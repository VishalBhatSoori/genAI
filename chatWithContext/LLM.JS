import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
import readlinesync from 'readline-sync';
dotenv.config();


const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

const history=[]

async function askGemini(userProblem) {
  history.push({
    role:'user',
    parts:[{text:userProblem}]
  })

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: history
  });

  history.push({
    role:'model',
    parts:[{text:response.text}]
  })
  
  console.log(response.text);
}

async function main(){
    const userProblem=readlinesync.question("Iam your llm assistent , how should i help you today\n");
    await askGemini(userProblem);
    console.log('\n');
    main();
}

main();