import { StockInput } from '@/components/stock-input/stock-input';
import { Recommendations } from '@/components/recommendations/recommendations';
import { fetchOptionsData } from '@/lib/data-fetching';
import { analyzeOptions } from '@/lib/llm-analysis';
import { useState } from 'react';

interface Strategy {
  name: string;
  description: string;
  probability: number;
}

export default function HomePage() {
  const [strategies, setStrategies] = useState<Strategy[]>([]);

  async function handleAnalyze(stockSymbol: string) {
    const optionsData = await fetchOptionsData(stockSymbol);
    const strategies = await analyzeOptions(optionsData);
    setStrategies(strategies);
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <StockInput onAnalyze={handleAnalyze} />
      {strategies.length > 0 && <Recommendations strategies={strategies} />}
    </div>
  );
} 