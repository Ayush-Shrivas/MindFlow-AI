import axios from "axios";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export async function extractIntent(userInput) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY missing");
    }

    const prompt = `
You are an intent understanding system.

Analyze the following user input deeply.

User input:
"${userInput}"

Your task:
- Infer the user's primary goal
- Infer the emotional state (even if implicit)
- Extract constraints (if any)
- Identify unknowns or open questions

Rules:
- Do NOT return "Unknown" unless absolutely impossible
- Make reasonable inferences
- Be concise but meaningful

Respond ONLY in valid JSON with this structure:

{
  "goal": "...",
  "emotion": "...",
  "constraints": [],
  "unknowns": []
}
`;


    const response = await axios.post(
      `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let rawText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      throw new Error("Empty response from Gemini");
    }

    // 🔥 IMPORTANT: Clean Gemini output
    rawText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(rawText);

    return parsed;
  } catch (error) {
    console.error("🔥 Gemini Intent Error:", error.message);

    // ✅ FALLBACK (never crash server)
    return {
      goal: "Unknown",
      emotion: "Unknown",
      constraints: [],
      unknowns: []
    };
  }
}
