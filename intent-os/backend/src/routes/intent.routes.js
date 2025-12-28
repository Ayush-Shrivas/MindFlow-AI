import express from "express";
import { extractIntent } from "../services/gemini.service.js";

const router = express.Router();

router.post("/extract", async (req, res) => {
  try {
    const { userInput } = req.body;

    if (!userInput) {
      return res.status(400).json({ error: "userInput required" });
    }

    const intent = await extractIntent(userInput);

    res.json({
      success: true,
      intent,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Intent extraction failed" });
  }
});

export default router;
