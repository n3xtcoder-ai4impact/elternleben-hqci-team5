import { AzureOpenAI } from 'openai';
import type { Context } from '@netlify/functions';

import dotenv from 'dotenv';

dotenv.config();

export default async (req: Request, context: Context) => {
  const endpoint =
    process.env['AZURE_OPENAI_ENDPOINT'] ||
    'https://subad-m9xb2ofp-eastus2.openai.azure.com/';
  const apiKey =
    process.env['AZURE_OPENAI_API_KEY'] || '<REPLACE_WITH_YOUR_KEY_VALUE_HERE>';
  const apiVersion = '2025-01-01-preview';
  const deployment = 'gpt-4.1'; // This must match your deployment name

  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

  const body = await req.json();
  const result = await client.chat.completions.create(body);

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
};
