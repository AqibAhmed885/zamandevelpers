import { Footer, Header, PageIntro } from "@/components/site-shell";

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Partners"
          title="Partner with Dubai's next real estate force."
          body="Agency and individual brokers can join the Zaman Circle for first-look access to Isla Bay, private off-plan launches, and global support."
        />
        <section className="bg-[#f7f3ea] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-5">
              <div className="rounded-lg bg-white p-7">
                <h2 className="text-2xl font-semibold text-[#16211f]">
                  For Investors
                </h2>
                <p className="mt-4 leading-7 text-[#44514d]">
                  Unlock high-yielding real estate portfolios backed by the
                  premium waterfront location of Dubai Islands, featuring
                  attractive investor-centric payment plans.
                </p>
              </div>
              <div className="rounded-lg bg-white p-7">
                <h2 className="text-2xl font-semibold text-[#16211f]">
                  For Registered Brokers
                </h2>
                <p className="mt-4 leading-7 text-[#44514d]">
                  Gain exclusive first-look access to private off-plan launches,
                  advanced 3D digital marketing assets, and a global support
                  network.
                </p>
              </div>
            </div>
            <form className="rounded-lg bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-[#d8cfbf] px-4 py-3" placeholder="Name" />
                <input className="rounded-md border border-[#d8cfbf] px-4 py-3" placeholder="Company or agency" />
                <input className="rounded-md border border-[#d8cfbf] px-4 py-3" placeholder="Email" />
                <input className="rounded-md border border-[#d8cfbf] px-4 py-3" placeholder="Phone" />
                <select className="rounded-md border border-[#d8cfbf] px-4 py-3 text-[#44514d] sm:col-span-2">
                  <option>Agency Partner</option>
                  <option>Individual Broker</option>
                  <option>Investor Network</option>
                </select>
              </div>
              <button className="mt-5 w-full rounded-full bg-[#16211f] px-6 py-3 text-sm font-semibold text-white">
                Register as an Official Partner
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
