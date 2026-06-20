import { AboutHero } from "@/components/about/about-hero";
import { CommitmentsSection } from "@/components/about/commitments-section";
import { DestinationsSection } from "@/components/about/destinations-section";
import { DesignSequenceSection } from "@/components/about/design-sequence-section";
import { LeadershipQuoteSection } from "@/components/about/leadership-quote-section";
import { PillarsSection } from "@/components/about/pillars-section";
import { PortfolioSection } from "@/components/about/portfolio-section";
import { WhoWeAreSection } from "@/components/about/who-we-are-section";
import { Footer, Header } from "@/components/site-shell";
import {
  aboutHero,
  commitmentItems,
  destinationsSection,
  leadershipQuote,
  pillarCards,
  portfolioItems,
  whoWeAreCards,
} from "@/lib/about-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zaman Developers | Dubai Waterfront Real Estate",
  description:
    "Discover Zaman Developers—Dubai-born real estate development focused on design excellence, engineering precision, and waterfront landmarks on Dubai Islands.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero {...aboutHero} />
        <LeadershipQuoteSection {...leadershipQuote} />
        <DesignSequenceSection />
        <WhoWeAreSection cards={whoWeAreCards} />
        <DestinationsSection {...destinationsSection} />
        <PillarsSection cards={pillarCards} />
        <PortfolioSection items={portfolioItems} />
        <CommitmentsSection items={commitmentItems} />
      </main>
      <Footer />
    </>
  );
}
