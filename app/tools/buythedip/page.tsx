"use client";

export default function ToolsPage() {
  return (
    <main className="bg-[#020817] min-h-screen">
      <div className="flex justify-center py-10">
        {/* Width-limited, centered container */}
        <div className="w-full max-w-5xl px-4">
          <div className="rounded-2xl bg-[#020817] shadow-lg overflow-hidden">
            <iframe
              src="https://moonie-tool-buythedip-production-875a.up.railway.app/"
              className="w-full border-0"
              style={{ minHeight: "1200px" }} // tweak: 1000–1200px if needed
              loading="lazy"
              title="Buy the Dip Backtester"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
