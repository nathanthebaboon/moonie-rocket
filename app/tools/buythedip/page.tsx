"use client";

import Link from "next/link";

export default function BuyTheDipPage() {
  return (
    <main className="min-h-screen bg-[#020817]">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-white text-lg font-semibold">
            Buy the Dip Backtester
          </h1>

          <Link
            href="/"
            className="text-sm text-white/80 hover:text-white underline"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="w-full h-[85vh] rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="https://moonie-tool-buythedip-production-875a.up.railway.app/"
            className="w-full h-full border-0"
            loading="lazy"
            title="Buy the Dip Backtester"
          />
        </div>
      </div>
    </main>
  );
}
