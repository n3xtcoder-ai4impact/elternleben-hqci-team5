import { parse } from 'yaml';

export const getCitationMap = (citations: any) => {
  const citationMap = citations.reduce(
    (acc: any, citation: any, index: number) => {
      const { content } = citation;
      const yamlText = content?.split('---')[1]?.replace(/\\r\\n/g, '\n');
      const parsed = parse(yamlText ?? '');
      const { author, category, description, filepath, title, url } = parsed;
      acc[`doc${index}`] = { description, title, url };
      return acc;
    },
    {}
  );
  return citationMap;
};

export function linkifyDocuments(message: any) {
  console.log('linkifyDocuments message', message);
  const { content, context } = message;
  console.log('context', context);
  console.log('content', content);
  console.log('context.citations', context?.citations);
  const docMap = getCitationMap(context?.citations ?? []);
  console.log('docMap', docMap);
  const replacedContent = content.replace(/\[(doc\d+)\]/g, (match: string) => {
    console.log('  match', match);

    const metadata = docMap[match];
    console.log('  metadata', metadata);
    if (metadata) {
      const { title, url } = metadata;
      return `[${title}](${url})`;
    } else {
      return match;
    }
  });

  console.log('replacedContent', replacedContent);
  return replacedContent;
}
