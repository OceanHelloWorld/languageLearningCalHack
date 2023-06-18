const { Configuration, OpenAIApi } = require("openai");

export const sendOpenAICall = async (prompt) => {
	try {
		const configuration = new Configuration({
			apiKey: process.env.REACT_APP_OPENAI_API_KEY,
		});
		const openai = new OpenAIApi(configuration);
		const result = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: prompt,
			temperature: 0.5,
			max_tokens: 4000,
		});
		return result?.data?.choices?.[0].text
	} catch (e) {
		console.error('open ai call failed: ', e);
		return undefined;
	}	
}