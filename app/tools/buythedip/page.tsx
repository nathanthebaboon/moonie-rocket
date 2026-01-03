"use client";

export default function ToolsPage() {
  return (
    <main className="bg-[#020817] min-h-screen pb-12">
      <div className="flex justify-center py-10">
        <div className="w-full max-w-5xl px-4">
          <div className="rounded-2xl bg-[#020817] shadow-lg overflow-hidden">
            <iframe
              src="https://moonie-tool-buythedip-production-875a.up.railway.app/"
              className="w-full border-0"
              style={{ minHeight: "1300px" }} // bump if your app needs more
              loading="lazy"
              title="Buy the Dip Backtester"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
