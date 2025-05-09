import { AzureOpenAI } from 'openai';
import type { Context } from '@netlify/functions';

import dotenv from 'dotenv';

dotenv.config();

export default async (req: Request, context: Context) => {
  const endpoint =
    process.env['AZURE_OPENAI_ENDPOINT'] || '';
  const apiKey =
    process.env['AZURE_OPENAI_API_KEY'] || '';
  const apiVersion = process.env['AZURE_OPENAI_API_VERSION'] || '';
  const deployment = process.env['AZURE_OPENAI_DEPLOYMENT_NAME'] || ''
  const model = process.env['AZURE_OPENAI_MODEL'] || ''

  const search_endpoint = process.env['AZURE_SEARCH_ENDPOINT'] || '';
  const search_key = process.env['AZURE_SEARCH_KEY'] || '';
  const index_name = process.env['AZURE_SEARCH_INDEX_NAME'] || '';

  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

  const request = await req.json();
  const messages = request.messages;
  console.log('messages', messages);
  const result = await client.chat.completions.create({
    messages,
    model,
    max_tokens: 800,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: null,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    data_sources: [
      {
        type: 'azure_search',
        parameters: {
          filter: null,
          endpoint: search_endpoint,
          index_name,
          semantic_configuration: '',
          authentication: {
             type: 'api_key',
             key: search_key,
          },
          query_type: 'simple',
          in_scope: true,
          // role_information: prompt,
          strictness: 3,
          top_n_documents: 3,
        },
      },
    ],
  });

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
};
