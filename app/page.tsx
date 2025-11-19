import CoinCard from "./_components/CoinCard";
import { Coin } from "@/types/coin";
import CoinsClient from "./_components/CoinsClient";
import Header from "./_components/Header";

export default async function Page() {
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  let coins: Coin[] = [];
  let error: string | null = null;

  try {
    const res = await fetch(API, { next: { revalidate: 30 } });
    if (!res.ok) throw new Error("Failed to load data");
    coins = await res.json();
  } catch (err: unknown) {
    error = err instanceof Error ? err.message : "Unknown error";
  }

  return (
    <div className="w-full min-h-screen background">
      <Header />
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 highlight">Crypto Price Tracker</h1>
      <p className="text-gray-400 mb-6">
        Live cryptocurrency prices fetched from CoinGecko.
      </p>

      <CoinsClient initialCoins={coins} initialError={error} />
    </div>
    </div>
  );
}
