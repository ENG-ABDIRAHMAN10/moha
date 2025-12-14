import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "Raali ahow, API Key-ga ma shaqeynayo hadda. (API Key missing)";
  }

  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Waan ka xumahay, jawaab ma helin.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Khalad ayaa dhacay intii aan jawaabta raadinayay.";
  }
};