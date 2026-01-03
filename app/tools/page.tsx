// app/tools/page.tsx
"use client";

import Image from "next/image";

type AppConfig = {
  title: string;
  description: string;
  image: string;  
  url: string;
  cta?: string;
};

type SectionConfig = {
  name: string;
  subtitle?: string;   
  apps: AppConfig[];
};

const SECTIONS: SectionConfig[] = [
  {
    name: "Backtesting Retail Trading Strategies",
    subtitle: "Simple apps for retail traders to backtest commonly adopted retail trading strategies",
    apps: [
      {
        title: "Buy The Dip Backtester",
        description:
          "Thinking of buying the dip? See how that strategy would have performed if you adopted it in the past.",
        image: "/moonie/tools/buy-the-dip.png",
        url: "https://moonierocket.com/tools/buythedip",
        cta: "Try It Now ↗",
      },
            {
        title: "Dollar Cost Averaging Backtester",
        description:
          "Thinking of dollar cost averaging? See how that strategy might perform versus buying it up front.",
        image: "/moonie/tools/coming-soon-2.png",
        url: "https://t.me/moonierocket",
        cta: "Stay Updated ↗",
      },
      {
        title: "Chase the Rally Backtester",
        description:
          "Wondering if you should continue to chase the rally? See how that strategy might play out.",
        image: "/moonie/tools/coming-soon-2.png",
        url: "https://t.me/moonierocket",
        cta: "Stay Updated ↗",
      },
    ],
  },
  {
    name: "Visualising Asset Risks and Return",
    subtitle: "Simple apps for retail traders to visualise asset risks and returns more easily",
    apps: [
      {
        title: "Returns Distribution Visualiser",
        description:
          "See how the asset that you're looking to buy typically performs in terms of average returns and its distribution historically.",
        image: "/moonie/tools/coming-soon-2.png",
        url: "https://t.me/moonierocket",
        cta: "Stay Updated ↗",
      },
            {
        title: "To Be Decided",
        description:
          "To Be Decided.",
        image: "/moonie/tools/coming-soon-2.png",
        url: "https://t.me/moonierocket",
        cta: "Provide Suggestions ↗",
      },
      {
        title: "To Be Decided",
        description:
          "To Be Decided.",
        image: "/moonie/tools/coming-soon-2.png",
        url: "https://t.me/moonierocket",
        cta: "Provide Suggestions ↗",
      },
    ],
  },
  // add more sections as you build more tools
];

export default function ToolsPage() {
  const handleOpen = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="scroll-snap-container tools-main">
      <div className="tools-inner">

        {/* SECTIONS */}
        {SECTIONS.map((section) => (
          <section key={section.name} className="tools-section">
            <h2 className="tools-section-title">{section.name}</h2>
                {section.subtitle && (
                <p className="tools-section-subtitle">
                    {section.subtitle}
                </p>
                )}
            <div className="tools-grid">
              {section.apps.map((app) => (
                <article
                  key={app.title}
                  className="card tools-card"
                  onClick={() => handleOpen(app.url)}
                >
                  <div className="tools-thumb">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="tools-thumb-img"
                    />
                  </div>

                  <div className="tools-card-body">
                    <h3 className="tools-card-title">{app.title}</h3>
                    <p className="tools-card-desc">{app.description}</p>
                    <span className="tools-card-cta">{app.cta ?? "Try It Now ↗"}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
