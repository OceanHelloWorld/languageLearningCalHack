const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const sendOpenAICall = async (prompt) => {
	try {
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

export const getVocabWords = async (theme, language, difficulty) => {
	try {
		const result = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: generateVocabPrompt(theme, language, difficulty),
			temperature: 0.5,
			max_tokens: 4000,
		});
		return result?.data?.choices?.[0].text
	} catch (e) {
		console.error('open ai call failed: ', e);
		return undefined;
	}	 
}

function generateVocabPrompt(theme, language, difficulty) {
	return `Generate 20 vocabulary words in ${language}
	for the following theme: ${theme}
	
	Use the following format for your response:
	{word in ${language}} - {word in english}
	
	Select words for the following proficiency level: ${difficulty}`;
}

export const getReadingExercise = async (words, language, difficulty) => {
	try {
		const result = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: generateReadingPrompt(words, language, difficulty),
			temperature: 0.5,
			max_tokens: 4000,
		});
		return result?.data?.choices?.[0].text
	} catch (e) {
		console.error('open ai call failed: ', e);
		return undefined;
	}	 
}

function generateReadingPrompt(words, language, difficulty) {
	return `Generate a paragraph using the following words:
	${words}
	In ${language} for the following language proficiency: ${difficulty}`;
}