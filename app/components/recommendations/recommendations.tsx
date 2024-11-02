interface Strategy {
  name: string;
  description: string;
  probability: number;
}

interface RecommendationsProps {
  strategies: Strategy[];
}

export function Recommendations({ strategies }: RecommendationsProps) {
  return (
    <div className="space-y-4">
      {strategies.map((strategy, index) => (
        <div key={index} className="p-4 border rounded">
          <h2 className="text-xl font-semibold">{strategy.name}</h2>
          <p>{strategy.description}</p>
          <p className="text-gray-500">Probability: {strategy.probability}%</p>
        </div>
      ))}
    </div>
  );
} 