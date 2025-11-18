import { Coin } from "@/types/coin";
const CoinCard = ({ coin }: { coin: Coin }) => {
  const change = coin.price_change_percentage_24h;
  const changeColor = change > 0 ? "text-green-400" : "text-red-400";

  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-800 shadow-md">
      {/* Left */}
      <div className="flex items-center gap-4">
        <img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full" />

        <div>
          <div className="text-lg font-semibold">
            {coin.name}{" "}
            <span className="text-sm text-gray-400">
              ({coin.symbol.toUpperCase()})
            </span>
          </div>
          <div className="text-sm text-gray-400">
            Market cap: ${coin.market_cap.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="text-right">
        <div className="text-lg font-medium">
          ${coin.current_price.toLocaleString()}
        </div>
        <div className={`text-sm ${changeColor}`}>
          {change?.toFixed(2)}% (24h)
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
