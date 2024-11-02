import axios from 'axios';

interface OptionsData {
  // Define the structure based on the API response
}

export async function fetchOptionsData(stockSymbol: string): Promise<OptionsData> {
  const apiKey = process.env.FINANCIAL_API_KEY;
  const url = `https://api.example.com/options?symbol=${stockSymbol}&apikey=${apiKey}`;

  const response = await axios.get(url);
  return response.data;
} 