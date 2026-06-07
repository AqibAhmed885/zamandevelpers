import { Footer, Header, PageIntro } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Contact Us"
          title="Schedule a private briefing for Isla Bay."
          body="Connect with Zaman Developers for investor enquiries, broker registration, project briefings, and priority access to Isla Bay."
        />
        <section className="bg-[#f7f3ea] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-lg bg-[#16211f] p-8 text-white">
              <h2 className="text-2xl font-semibold">Zaman Developers</h2>
              <div className="mt-8 space-y-5 text-sm leading-7 text-white/72">
                <p>Dubai Islands, Dubai, United Arab Emirates</p>
                <p>sales@zamandevelopers.com</p>
                <p>+971 00 000 0000</p>
              </div>
            </div>
            <form className="rounded-lg bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-[#d8cfbf] px-4 py-3" placeholder="Full name" />
                <input className="rounded-md border border-[#d8cfbf] px-4 py-3" placeholder="Email address" />
                <input className="rounded-md border border-[#d8cfbf] px-4 py-3" placeholder="Phone number" />
                <select className="rounded-md border border-[#d8cfbf] px-4 py-3 text-[#44514d]">
                  <option>Private briefing</option>
                  <option>Investor enquiry</option>
                  <option>Broker partnership</option>
                  <option>Payment support</option>
                </select>
              </div>
              <textarea className="mt-4 min-h-36 w-full rounded-md border border-[#d8cfbf] px-4 py-3" placeholder="Message" />
              <button className="mt-5 w-full rounded-full bg-[#16211f] px-6 py-3 text-sm font-semibold text-white">
                Submit Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
