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
  const { content, context } = message;
  const docMap = getCitationMap(context?.citations ?? []);
  const replacedContent = content.replace(/\[(doc\d+)\]/g, (match: string) => {
    const metadata = docMap[match];
    if (metadata) {
      const { title, url } = metadata;
      return `[${title}](${url})`;
    } else {
      return match;
    }
  });

  return replacedContent;
}
