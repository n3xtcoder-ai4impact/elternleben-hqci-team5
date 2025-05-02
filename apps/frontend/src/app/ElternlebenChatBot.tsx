import ChatBot, { Flow, Settings, Styles } from "react-chatbotify";
import OpenAI from 'openai';

export const ElternlebenChatBot = () => {
	const apiKey = "";
	const modelType = "gpt-3.5-turbo";
	let hasError = false;

	// example openai conversation
	// you can replace with other LLMs such as Google Gemini
	const call_openai = async (params) => {
		try {
			const openai = new OpenAI({
				apiKey: apiKey,
				dangerouslyAllowBrowser: true // required for testing on browser side, not recommended
			});

			// for streaming responses in parts (real-time), refer to real-time stream example
			const chatCompletion = await openai.chat.completions.create({
				// conversation history is not shown in this example as message length is kept to 1
				messages: [{ role: 'user', content: params.userInput }],
				model: modelType,
			});

			await params.injectMessage(chatCompletion.choices[0].message.content);
		} catch (error) {
			await params.injectMessage("Unable to load model, is your API Key valid?");
			hasError = true;
		}
	}
	const flow: Flow ={
		start: {
			message: "Wie kann ich Ihnen helfen?",
			path: "loop",
			isSensitive: false
		},
		loop: {
			message: async (params) => {
				await call_openai(params);
			},
			path: () => {
				if (hasError) {
					return "start"
				}
				return "loop"
			}
		}
	}

  const header = {
    title: "Elternleben Chatbot",
    showAvatar: false,
    buttons: []
  }
  const settings: Settings = {general: {embedded: true}, chatHistory: {storageKey: "example_llm_conversation"}, header}


  const elternlebenStyle = {
    background: "#4CAF50",
    color: "#fff",
  };
  const styles: Styles = {
    headerStyle: elternlebenStyle,
    botBubbleStyle: elternlebenStyle,
  };

  return (
		<ChatBot settings={settings} styles={styles} flow={flow}/>
	);
}
