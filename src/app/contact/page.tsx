import { ContactContentSection } from "@/components/contact/contact-content-section";
import { PageHero } from "@/components/page-hero";
import { Footer, Header } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Schedule a private briefing for Isla Bay."
          body="Connect with Zaman Developers for investor enquiries, broker registration, project briefings, and priority access to Isla Bay."
          backgroundImage="/isla/2.jpeg"
        />
        <ContactContentSection />
      </main>
      <Footer />
    </>
  );
}
