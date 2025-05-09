import ChatBot, { Flow, Settings, Styles } from 'react-chatbotify';

import initialMessages from './initialMessages';
import { useState } from 'react';
import { parse } from 'yaml';

export const ElternlebenChatBot = () => {
  const [messages, setMessages] = useState(initialMessages);

  const call_openai = async (params) => {
    console.log('params', params);
    const messagesWithUserInput = params.userInput ? [
      ...messages,
      { role: 'user', content: params.userInput },
    ] : messages;
    try {
      console.log('messagesWithUserInput', messagesWithUserInput);
      const response = await fetch(
        '/.netlify/functions/chat_completions_create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: messagesWithUserInput }),
        }
      );
      const chatCompletion = await response.json();
      console.log(chatCompletion);

      const message = chatCompletion.choices[0].message;
      const content = message.content;
      const messagesWithUserInputAndResponse = [
        ...messagesWithUserInput,
        { role: 'assistant', content },
      ];
      console.log('messagesWithUserInputAndResponse', messagesWithUserInputAndResponse);

      const citationIds = [...content.matchAll(/\[(doc\d+)\]/g)].map(match => match[1]);
      const uniqueIds = [...new Set(citationIds)];
      console.log('uniqueIds', uniqueIds);

      await params.injectMessage(content);
      setMessages(messagesWithUserInputAndResponse);
    } catch (error) {
      console.error('Error fetching chat completion:', error);
      await params.injectMessage(
        'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      );
    }
  };
  const flow: Flow = {
    start: {
      message: async (params) => {
        await call_openai(params);
      },
      path: 'start',
    },
  };

  const header = {
    title: 'Leni, der Elternleben-Chatbot',
    showAvatar: true,
    avatar: 'assets/Check_nobg_75.png',
    buttons: [],
  };
  const settings: Settings = {
    general: { embedded: true, showFooter: false },
    chatInput: {
      enabledPlaceholderText: 'Bitte gebe deine Frage ein ...',
    },
    chatHistory: {
      disabled: true,
      storageKey: 'example_llm_conversation',
    },
    header,
    botBubble: {
      animate: true,
      simStream: false,
      showAvatar: true,
      avatar: 'assets/Check_nobg_75.png',
    },
    chatWindow: {
      showScrollbar: true,
    },
    emoji: {
      disabled: true,
    },
    footer: {
      buttons: [],
    },
  };

  const elternlebenStyle = {
    background: 'rgb(85, 165, 50)',
    color: 'rgb(255, 255, 255)',
  };
  const styles: Styles = {
    bodyStyle: elternlebenStyle,

    headerStyle: {
      background: 'rgb(255, 255, 255)',
      color: 'rgb(76, 76, 76)',
      boxShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 5px 0px',
      zIndex: 99,
    },
    userBubbleStyle: {
      backgroundColor: '#E0E0E0',
      color: 'rgb(76, 76, 76)',
      borderRadius: '6px',
      boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 12px 0px',
    },
    botBubbleStyle: {
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgb(76, 76, 76)',
      borderRadius: '6px',
      boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 12px 0px',
    },
    sendButtonStyle: {
      backgroundColor: 'rgb(244, 146, 5)',
      borderRadius: '10px',
      boxShadow: 'rgb(128, 128, 128) 5px 5px 5px 0px',
    },
    sendButtonDisabledStyle: {
      backgroundColor: 'rgb(244, 146, 5)',
      borderRadius: '10px',
      boxShadow: 'rgb(128, 128, 128) 5px 5px 5px 0px',
    },
    sendButtonHoveredStyle: {
      backgroundColor: 'rgb(244, 146, 5)',
      borderRadius: '10px',
      boxShadow: 'rgb(128, 128, 128) 5px 5px 5px 0px',
    },
    chatWindowStyle: {
      borderRadius: '0px',
      width: '100%',
      height: '100vh',
    },
  };

  return <ChatBot settings={settings} styles={styles} flow={flow} />;
};
