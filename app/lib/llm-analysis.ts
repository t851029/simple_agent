import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

interface Strategy {
  name: string;
  description: string;
  probability: number;
}

export async function analyzeOptions(optionsData: OptionsData): Promise<Strategy[]> {
  const prompt = `Based on the following options data: ${JSON.stringify(optionsData)}, determine the highest probability options strategies.`;

  const completion = await openai.createCompletion({
    model: 'gpt-4',
    prompt,
    max_tokens: 500,
    temperature: 0.7,
  });

  // Assume the LLM returns a JSON string of strategies
  const strategies = JSON.parse(completion.data.choices[0].text.trim());
  return strategies;
} 