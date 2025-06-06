import { parse } from 'yaml';

export const getCitationMap = (citations: any) => {
  const citationMap = citations.reduce(
    (acc: any, citation: any, index: number) => {
      const { content } = citation;
      // console.log('content', content);
      const yamlText = content?.split('---')[1]?.replace(/\\r\\n/g, '\n');
      if (yamlText) {
        // console.log('yamlText', yamlText);
        const parsed = parse(yamlText ?? '');
        // console.log('parsed', parsed);
        const { author, category, description, filepath, title, url } = parsed;
        acc[`doc${index+1}`] = { description, title, url };
      }
      return acc;
    },
    {}
  );
  return citationMap;
};

export function linkifyDocuments(message: any) {
  // console.log('linkifyDocuments message', message);
  const { content, context } = message;
  // console.log('context', context);
  // console.log('content', content);
  // console.log('context.citations', context?.citations);
  const docMap = getCitationMap(context?.citations ?? []);
  // console.log('docMap', docMap);
  const replacedContent = content.replace(
    /\[(doc\d+)\]/g,
    (match: string, docId: string) => {
      // console.log('  match', match);
      // console.log('  docId', docId);

      // for now: remove [docX] from the message
      return ''

      const metadata = docMap[docId];
      // console.log('  metadata', metadata);
      if (metadata) {
        const { title, url } = metadata;
        return `[${title}](${url})`;
      } else {
        return match;
      }
    }
  );

  // console.log('replacedContent', replacedContent);
  return replacedContent;
}
