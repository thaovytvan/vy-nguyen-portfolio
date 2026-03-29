export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

import i18n from "../i18n/config";

export const generateChatResponse = async (messages: ChatMessage[]): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing API Key. Please add VITE_GEMINI_API_KEY to your .env file.");
  }

  // Map conversation history to Gemini 'user' and 'model' roles
  const history = messages.map(msg => ({
    role: msg.sender === "user" ? "user" : "model",
    parts: [{ text: msg.text }]
  }));

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        role: "system",
        parts: [{ text: "You are a helpful and polite AI assistant on Nguyen Vy's personal portfolio website. Provide short, friendly answers about software development, Vy's skills, or general greetings. Answer in the same language as the user (Vietnamese or English)." }]
      },
      contents: history,
    })
  });

  if (!response.ok) {
    throw new Error("API responded with an error");
  }

  const data = await response.json();
  const botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || i18n.t("chat_error_fallback");

  return botText;
};
