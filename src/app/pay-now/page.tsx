import { PageHero } from "@/components/page-hero";
import { PaymentContentSection } from "@/components/pay-now/payment-content-section";
import { Footer, Header } from "@/components/site-shell";

export default function PayNowPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Pay Now"
          title="Upcoming payments and dues."
          body="A payment gateway integration area for reservation payments, installments, service dues, and future client payment journeys."
          backgroundImage="/isla/10.jpeg"
        />
        <PaymentContentSection />
      </main>
      <Footer />
    </>
  );
}
