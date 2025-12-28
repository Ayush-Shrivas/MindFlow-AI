import axios from "axios";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export async function extractIntent(userInput) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY missing");
    }

    const prompt = `
You are an intent extraction system.

User input:
"${userInput}"

Return ONLY valid JSON in this exact format:
{
  "goal": "",
  "emotion": "",
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
