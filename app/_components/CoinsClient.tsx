"use client";
import { useState } from "react";
import CoinCard from "./CoinCard";
import { Coin } from "@/types/coin";

export default function CoinsClient({
    initialCoins,
    initialError,
}:{
    initialCoins: Coin[];
    initialError: string | null;
}){
    const [coins, setCoins] = useState<Coin[]>(initialCoins);
  const [error, setError] = useState<string | null>(initialError);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  async function refresh() {
    setLoading(true);
    try {
      const res = await fetch("/api/coins");
      const data = await res.json();
      setCoins(data);
      setError(null);
    } catch {
      setError("Failed to refresh");
    }
    setLoading(false);
  }

  const filtered = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* search + button */}
      <div className="flex gap-3 mb-6">
        <input
          className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
          placeholder="Search coin..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={refresh}
          className="px-4 py-2 bg-[#009367] rounded-lg hover:opacity-80"
        >
          Refresh
        </button>
      </div>

      {loading && <p className="text-gray-400 mb-4">Refreshing...</p>}
      {error && <p className="text-red-400 mb-4">Error: {error}</p>}

      <div className="grid gap-4">
        {filtered.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </>
  );
}
