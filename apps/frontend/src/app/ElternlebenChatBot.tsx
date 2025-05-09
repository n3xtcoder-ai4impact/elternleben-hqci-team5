import ChatBot, { Flow, Settings, Styles } from 'react-chatbotify';
import OpenAI from 'openai';

export const ElternlebenChatBot = () => {
  let hasError = false;

  // example openai conversation
  // you can replace with other LLMs such as Google Gemini
  const call_openai = async (params) => {
    console.log(params);
    try {
      const response = await fetch(
        '/.netlify/functions/chat_completions_create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userInput: params.userInput }),
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
    botBubbleStyle: {
      backgroundColor: 'rgb(237, 237, 237)',
      color: 'rgb(76, 76, 76)',
      borderRadius: '0px',
      boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 12px 0px',
    },
    userBubbleStyle: {
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgb(76, 76, 76)',
      borderRadius: '0px',
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
