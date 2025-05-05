import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import axios from 'axios';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const userInput = (req.body && req.body.message) || "";

    if (!userInput) {
        context.res = {
            status: 400,
            body: "Missing 'message' in request body."
        };
        return;
    }

    const azureEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT;
    const apiVersion = "2023-05-15";
    const apiKey = process.env.AZURE_OPENAI_API_KEY;

    const url = `${azureEndpoint}openai/deployments/${deploymentName}/chat/completions?api-version=${apiVersion}`;

    try {
        const response = await axios.post(url, {
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: userInput }
            ],
            temperature: 0.7,
            max_tokens: 500
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        const botReply = response.data.choices[0].message.content;

        context.res = {
            status: 200,
            body: { reply: botReply }
        };
    } catch (error: unknown) {
        console.error("Azure OpenAI call error:", error);
        context.res = {
            status: 500,
            body: "Error communicating with Azure OpenAI."
        };
    }
};

export default httpTrigger;