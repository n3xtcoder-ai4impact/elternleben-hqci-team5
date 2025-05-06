import { AzureOpenAI } from 'openai';
import type { Context } from "@netlify/functions";

import dotenv from 'dotenv';

dotenv.config();

export default async (req: Request, context: Context) => {
  // You will need to set these environment variables or edit the following values

  const endpoint =
    process.env['AZURE_OPENAI_ENDPOINT'] ||
    'https://subad-m9xb2ofp-eastus2.openai.azure.com/';

  const apiKey =
    process.env['AZURE_OPENAI_API_KEY'] || '<REPLACE_WITH_YOUR_KEY_VALUE_HERE>';

  const apiVersion = '2025-01-01-preview';

  const deployment = 'gpt-4.1'; // This must match your deployment name

  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

  const result = await client.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are an AI assistant that helps people find information.',
      },
    ],
    model: 'gpt-4.1',
    max_tokens: 800,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: null,
  });

  console.log(JSON.stringify(result, null, 2));
  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
}
