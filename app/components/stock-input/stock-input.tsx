import { useState } from 'react';

interface StockInputProps {
  onAnalyze: (stockSymbol: string) => void;
}

export function StockInput({ onAnalyze }: StockInputProps) {
  const [stockSymbol, setStockSymbol] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onAnalyze(stockSymbol);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={stockSymbol}
        onChange={(e) => setStockSymbol(e.target.value.toUpperCase())}
        placeholder="Enter Stock Symbol"
        className="p-2 border rounded"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        Analyze
      </button>
    </form>
  );
} 