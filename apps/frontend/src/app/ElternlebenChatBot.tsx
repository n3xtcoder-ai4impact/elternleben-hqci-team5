import ChatBot, { Flow, Settings, Styles } from 'react-chatbotify';
import OpenAI from 'openai';

export const ElternlebenChatBot = () => {
  let hasError = false;

  // example openai conversation
  // you can replace with other LLMs such as Google Gemini
  const call_openai = async (params) => {
    try {
      const response = await fetch(
        '/.netlify/functions/chat_completions_create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userInput: params.userInput })
				}
      );
      const chatCompletion = await response.json();
      console.log(chatCompletion);

      await params.injectMessage(chatCompletion.choices[0].message.content);
    } catch (error) {
      await params.injectMessage(
        'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      );
      hasError = true;
    }
  };
  const flow: Flow = {
    // start: {
    //   message: 'Wie kann ich Ihnen helfen?',
    //   path: 'loop',
    //   isSensitive: false,
    // },
    start: {
      message: async (params) => {
        await call_openai(params);
      },
      path: () => {
        if (hasError) {
          return 'start';
        }
        return 'start';
      },
    },
  };

  const header = {
    title: 'Elternleben Chatbot',
    showAvatar: false,
    buttons: [],
  };
  const settings: Settings = {
    general: { embedded: true },
    chatHistory: { storageKey: 'example_llm_conversation' },
    header,
  };

  const elternlebenStyle = {
    background: '#4CAF50',
    color: '#fff',
  };
  const styles: Styles = {
    headerStyle: elternlebenStyle,
    botBubbleStyle: elternlebenStyle,
  };

  return <ChatBot settings={settings} styles={styles} flow={flow} />;
};
