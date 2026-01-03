// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";

const bernoru = localFont({
  src: "./fonts/bernoru.otf",
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
    <html lang="en" className={bernoru.className}>
      <body>
        <header className="site-header">
          {/* hidden checkbox controls mobile menu */}
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />

          <div className="header-inner">
            {/* LOGO + BRAND */}
            <Link href="/" className="header-left">
              <img src="/moonie/logo.png" alt="Moonie Rocket" className="logo" />
              <span className="brand">
                MOONIE <br /> ROCKET
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="nav desktop-nav">
              <a
                href="https://moonierocket.com/tools"
                target="_blank"
                rel="noopener noreferrer"
                className="header-cta"
              >
                Try It <br /> Now
              </a>

              <a
                href="https://t.me/moonierocket"
                target="_blank"
                rel="noopener noreferrer"
                className="header-cta"
              >
                Join the <br /> Community
              </a>
            </nav>

            {/* MOBILE MENU BUTTON (no onClick) */}
            <label htmlFor="nav-toggle" className="mobile-menu-btn">
              ☰
            </label>
          </div>

          {/* MOBILE DROPDOWN */}
          <div className="mobile-menu">
            <a
              href="https://moonierocket.com/tools"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-link"
            >
              Try It Now
            </a>

            <a
              href="https://t.me/moonierocket"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-link"
            >
              Join the Community
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
