import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
import readlinesync from 'readline-sync';
dotenv.config();


const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history:[]
});
async function main(){
    
    const userQuery=readlinesync.question("Hello user, How may I help you today\n");
        const response1 = await chat.sendMessage({
        message: userQuery
    });
    console.log(response1.text);
    main();
}

main();