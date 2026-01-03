// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";

const bernoru = localFont({
  src: "./fonts/bernoru.otf", // or "./fonts/bernoru.ttf"
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moonie Rocket",
  description: "Backtest, optimise, and de-risk your trades before you ape in.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="header-inner">

            {/* CLICKABLE LOGO + BRAND */}
            <Link
              href="https://www.moonierocket.com"
              className="header-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/moonie/logo.png"
                alt="Moonie Rocket"
                className="logo"
              />
              <span className="brand">
                MOONIE <br /> ROCKET
              </span>
            </Link>

            {/* CTA BUTTON */}
            <nav className="nav">
              <a
                href="https://t.me/moonierocket"
                target="_blank"
                rel="noopener noreferrer"
                className="header-cta"
              >
                Get Early <br/> Access
              </a>
            </nav>

          </div>
        </header>


        {children}
      </body>
    </html>
  );
}
