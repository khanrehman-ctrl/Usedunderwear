
import { GoogleGenAI } from "@google/genai";

export const generateProductDescription = async (productInfo: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional luxury copywriter for a sustainable pre-loved fashion brand named "EcoIntimates". Generate a short, alluring, and professional product description (under 50 words) for the following item: ${productInfo}. Focus on quality, sustainability, and unique character.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    
    return response.text || "Unable to generate description at this time.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI assistant is currently resting. Please try again later.";
  }
};

export const refineListing = async (title: string, rawDescription: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Refine this product listing for "EcoIntimates". 
      Title: ${title}
      Draft: ${rawDescription}
      Make it sound professional, emphasize the condition and the eco-friendly choice of buying pre-loved. Keep it under 60 words.`,
      config: {
        temperature: 0.8,
      }
    });
    return response.text;
  } catch (error) {
    return "Could not refine at this moment.";
  }
};

export const chatWithAssistant = async (message: string, history: {role: string, parts: {text: string}[]}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.concat([{role: 'user', parts: [{text: message}]}]),
      config: {
        systemInstruction: "You are an expert stylist for EcoIntimates, a platform for pre-owned luxury intimates. You help customers find the right size, style, and care instructions. Be helpful, classy, and concise.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am having trouble connecting right now.";
  }
};
