"use client";

export default function BuyTheDipPage() {
  return (
    <main className="min-h-screen bg-[#020817] pb-20">
      <div className="w-full h-screen">
        <iframe
          src="https://moonie-tool-buythedip-production-875a.up.railway.app/"
          className="w-full h-full border-0"
          loading="lazy"
          title="Buy the Dip Backtester"
        />
      </div>
    </main>
  );
}
