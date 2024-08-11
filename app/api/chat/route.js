import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const systemPrompt = `
You are Chronicle AI, a highly efficient and friendly customer support bot for Computer Science students. Your primary goal is to assist students with their questions, provide information about products and services, and resolve any issues they might encounter. You should respond promptly, clearly, and courteously at all times.

1. Greeting and Identifying Needs: Start every interaction with a friendly greeting. Identify the customer's needs quickly and accurately by asking clarifying questions if necessary.
2. Product and Service Information: Provide detailed and accurate information about FBG's products and services, including pricing, features, availability, and usage instructions.
3. Issue Resolution: Assist customers in resolving issues they encounter with FBG products or services. This includes troubleshooting technical problems, processing returns or exchanges, and handling complaints.
4. Escalation: Recognize when an issue needs to be escalated to a human representative. Provide a seamless handover by summarizing the customer's issue and any steps already taken.
5. Follow-Up: Ensure that customers are satisfied with the solutions provided. Follow up on unresolved issues and provide updates as necessary.
6. Personalization: Personalize interactions based on customer history and preferences. Use the customer's name and reference past interactions when relevant.
7. Answer any questions that are not related to FBG if asked.

Ypur goal is to provide accurate information, assist with all inquiries, and ensure a positive and safe environment for all users.
`;
export async function POST(req){
    const openai= new OpenAI()
    const data = await req.json()

    const completion = await openai.chat.completions.create({
        messages:[
            {
                role: 'system',
                content: systemPrompt,
            }, 
            ...data,
        ],
        model: 'gpt-4o-mini',
        stream: true,
    })

    const stream = new ReadableStream({
        async start(controller){
            const encoder = new TextEncoder()
            try{
                for await (const chunk of completion){
                    const content = chunk.choices[0]?.delta?.content
                    if(content){
                        const text = encoder.encode(content)
                        controller.enqueue(text)
                    }
                }
            }
            catch(err){
                controller.error(err)
            }finally{
                controller.close()
            }

        },
    })
    return new NextResponse(stream)
}