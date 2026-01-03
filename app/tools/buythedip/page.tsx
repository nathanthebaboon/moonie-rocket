"use client";

export default function BuyTheDipPage() {
  return (
    <main className="min-h-screen bg-[#020817] py-12">
      <div className="w-full max-w-3xl mx-auto">
        <div className="w-full">
          <iframe
            src="https://moonie-tool-buythedip-production-875a.up.railway.app/"
            className="w-full min-h-[900px] border-0"
            loading="lazy"
            title="Buy the Dip Backtester"
          />
        </div>
      </div>
    </main>
  );
}
