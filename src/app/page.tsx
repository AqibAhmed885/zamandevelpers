import { AboutSection } from "@/components/home/about-section";
import { FeaturedPropertySection } from "@/components/home/featured-property-section";
import { NewsBlogsSection } from "@/components/home/news-blogs-section";
import { RegisterInterestSection } from "@/components/home/register-interest-section";
import { ScrollHero } from "@/components/scroll-hero";
import { Footer, Header } from "@/components/site-shell";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrollHero />
        <AboutSection />
        <FeaturedPropertySection />
        <NewsBlogsSection />
        <RegisterInterestSection />
      </main>
      <Footer />
    </>
  );
}
