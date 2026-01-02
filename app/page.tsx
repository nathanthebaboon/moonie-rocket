// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="scroll-snap-container bg-[#1a2043] text-[#ffe9a8]">

      {/* SECTION 1: FLY TO THE MOON */}
      <Section
        id="1"
        align="left"
        imageClass="img-moon-rocket"
        titleLines={["Fly to the moon", "with Moonie Rocket"]}
        image={
          <Image
            src="/moonie/moon-rocket.png"
            alt="Rocket flying over the moon"
            width={480}
            height={480}
            className="w-full max-w-md h-auto"
            priority
          />
        }
      />

      {/* SECTION 2: COMBINE SMART MONEY TOOLS */}
      <Section
        id="2"
        align="right"
        imageClass="img-apes-moon"
        titleLines={[
          "Combine Smart Money Tools",
          "with your hodl-ing",
        ]}
        image={
          <Image
            src="/moonie/apes-moon.png"
            alt="Apes sitting on the moon"
            width={480}
            height={480}
            className="w-full max-w-md h-auto"
          />
        }
      />

      {/* SECTION 3: TEST YOUR PLAN */}
      <Section
        id="3"
        align="left"
        imageClass="img-rocket"
        titleLines={["Test your plan", "before you ape-in"]}
        image={
          <Image
            src="/moonie/rocket.png"
            alt="Rocket taking off"
            width={480}
            height={480}
            className="w-full max-w-md h-auto"
          />
        }
      />

      {/* SECTION 4: SEE THE FUTURE */}
      <Section
        id="4"
        align="right"
        imageClass="img-candles"

        titleLines={[
          "See the future",
          "before you buy the dip",
        ]}
        image={
          <Image
            src="/moonie/candles.png"
            alt="Candlestick chart"
            width={480}
            height={480}
            className="w-full max-w-md h-auto"
          />
        }
      />

      {/* SECTION 5: OPTIMISE DIAMOND HANDS */}
      <Section
        id="5"
        align="left"
        imageClass="img-diamond"

        titleLines={[
          "Optimise your",
          "diamond hands holdings",
        ]}
        image={
          <Image
            src="/moonie/diamond.png"
            alt="Diamond"
            width={520}
            height={520}
            className="w-full max-w-lg h-auto"
          />
        }
      />

      {/* SECTION 6: HOP ONBOARD */}
      <Section
        id="6"
        align="right"
        imageClass="img-banana-ape"
        titleLines={[
          "Hop onboard the",
          "Moonie Rocket today!",
        ]}
        image={
          <Image
            src="/moonie/banana-ape.png"
            alt="Ape chilling in banana boat"
            width={480}
            height={480}
            className="w-full max-w-md h-auto"
          />
        }
      />

      {/* SECTION 7: SIMPLE CTA */}
      <section className="section section-cta flex flex-col items-center text-center">
        <Image
          src="/moonie/diamond-icon.png"
          alt="Diamond icon"
          width={240}
          height={240}
          className="mb-6"
        />

        <p className="cta-title">
          Launching mid-2026
        </p>

        <a
          href="https://t.me/moonierocket"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Try our <br/> Beta Version
        </a>
      </section>
    </main>
  );
}

/**
 * Reusable section component to mirror each “block” in the poster.
 */
function Section({
  id,
  align,
  titleLines,
  image,
  imageClass,
}: {
  id: string;
  align: "left" | "right";
  titleLines: string[];
  image: React.ReactNode;
  imageClass?: string;
}) {
  const isLeft = align === "left";

  return (
    <section className={`section section-${id}`}>
      <div className="section-inner">
        {isLeft ? (
          <>
            <TitleBlock titleLines={titleLines} />
            <div className={`section-image ${imageClass ?? ""}`}>
              {image}
            </div>
          </>
        ) : (
          <>
            <div className={`section-image ${imageClass ?? ""}`}>
              {image}
            </div>
            <TitleBlock titleLines={titleLines} />
          </>
        )}
      </div>
    </section>
  );
}




function TitleBlock({ titleLines }: { titleLines: string[] }) {
  return (
    <div className="flex-1 text-left uppercase">
      {titleLines.map((line, idx) => (
        <p key={idx} className="poster-line">
          <span className={idx % 2 === 0 ? "poster-line-white" : "poster-line-gold"}>
            {line}
          </span>
        </p>
      ))}
    </div>
  );
}
