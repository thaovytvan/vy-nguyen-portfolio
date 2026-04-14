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
        parts: [{ text: `You are Thao Vy's Virtual Assistant on her personal portfolio website. 
Your goal is to provide professional, friendly, and concise information about Thao Vy.

Information about Thao Vy:
- Role: Full-Stack Engineer with nearly 3 years of experience.
- Specialization: Building scalable web apps with Node.js, React.js, Next.js, JavaScript, and TypeScript.
- Current/Latest Work: Software Engineer at 24HDEV CO., LTD (Apr 2023 – Jan 2026).
- Education: Graduated from Da Nang University of Science and Technology (DUT), Major in IT (2020-2024), GPA: 3.46.
- Core Skills: React.js, Next.js, TypeScript, Tailwind CSS, Node.js, RESTful APIs, Performance Optimization.
- Soft Skills: Leading features end-to-end, Sprint planning, Problem solving, Technical communication.
- Key Project: "eatsome." (Restaurant browsing app using React.js and Yelp API).

Guidelines:
1. Always answer in the same language the user uses (Vietnamese or English).
2. Be polite, helpful, and concise. 
3. If asked something not related to Thao Vy or software engineering, try to redirect the conversation back to Vy's profile politely.
4. Use a friendly tone, like a professional assistant.` }]
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
