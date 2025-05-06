import ChatBot, { Flow, Settings, Styles } from "react-chatbotify";
import OpenAI from 'openai';

export const ElternlebenChatBot = () => {
	let hasError = false;

	// example openai conversation
	// you can replace with other LLMs such as Google Gemini
	const call_openai = async (params) => {
		try {
			const response = await fetch('/.netlify/functions/chat_completions_create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					messages: [
						{
							role: 'system',
							content: [
								{
									type: 'text',
									text: prompt,
								},
							],
						},
						{
							role: 'user',
							content: [
								{
									type: 'text',
									text: params.userInput,
								},
							],
						},
						{
							role: 'assistant',
							content: [
								{
									type: 'text',
									text: 'Die angeforderte Information ist in den bereitgestellten Daten nicht enthalten. Bitte stelle deine Frage einem unserer Experten über unsere E-Mail-Beratung unter: https://www.elternleben.de/ueber-stell-uns-deine-frage/. Kann ich dir sonst noch irgendwie weiterhelfen?',
								},
							],
						},
					],
					model: 'gpt-4.1',
					max_tokens: 800,
					temperature: 1,
					top_p: 1,
					frequency_penalty: 0,
					presence_penalty: 0,
					stop: null,
				}),
			});
			const chatCompletion = await response.json();
			console.log(chatCompletion);

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
