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
              // use a *fixed*, generous height so the inner page doesn’t need its own scroll
              style={{ height: "2000px" }}
              loading="lazy"
              title="Buy the Dip Backtester"
            />
          </div>
        </div>
      </div>
    </main>
  );
}