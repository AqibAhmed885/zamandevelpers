import Image from "next/image";

export function RegisterInterestSection() {
  return (
    <section className="relative overflow-hidden bg-[#090807] px-5 py-20 text-white lg:px-8 lg:py-28">
      <Image
        src="/isla/11.jpeg"
        alt="Isla Bay interior lounge"
        fill
        sizes="100vw"
        className="object-cover "
      />
      <div className="absolute inset-0 bg-black/22" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/68 via-black/38 to-black/72" />

      <div className="relative z-10 mx-auto grid max-w-360 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-3xl lg:pl-28">
          <div className="border-l-[3px] border-[#9f264a] pl-5">
            <h2 className="text-4xl font-light uppercase leading-tight tracking-wider text-white sm:text-3xl">
              Claim Your Era.
              <br />
              Secure Your Legacy.
            </h2>
          </div>
          <p className="mt-10 max-w-3xl text-base  leading-7 text-white/90">
            Zaman Developers transcends ordinary design to build timeless monuments that command admiration for generations. We do not merely shape skylines; we masterfully curate the human experience. We invite you to join us on this extraordinary journey and anchor your future at Isla Bay on Dubai Islands. Register your interest today to unlock exclusive, first-look access to private pre-launch inventory and premier layouts before the global market. Step into the Zaman Developers legacy—where elite beachfront living delivers far beyond expectations.
          </p>
        </div>

        <form className="mx-auto w-full max-w-120 bg-black/48 px-8 py-10 backdrop-blur-[1px] lg:mr-10 lg:px-8 lg:py-8">
          <div className="space-y-5">
            <label className="block">
              <span className="text-xs font-semibold uppercase text-white">
                First Name
              </span>
              <input
                className="mt-1 h-8 w-full border border-white/28 bg-transparent px-4 text-xs uppercase tracking-[0.03em] text-white outline-none transition placeholder:text-white/38 focus:border-[#9f264a]"
                placeholder="Enter first name"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase text-white">
                Last Name
              </span>
              <input
                className="mt-1 h-8 w-full border border-white/28 bg-transparent px-4 text-xs uppercase tracking-[0.03em] text-white outline-none transition placeholder:text-white/38 focus:border-[#9f264a]"
                placeholder="Enter last name"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase text-white">
                Email
              </span>
              <input
                type="email"
                className="mt-1 h-8 w-full border border-white/28 bg-transparent px-4 text-xs uppercase tracking-[0.03em] text-white outline-none transition placeholder:text-white/38 focus:border-[#9f264a]"
                placeholder="Enter your email"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase text-white">
                Phone Number
              </span>
              <div className="mt-1 flex h-8 items-center border border-white/28 bg-transparent px-4 transition focus-within:border-[#9f264a]">
                <span className="mr-4 text-xl" aria-hidden="true">
                  🇦🇪
                </span>
                <input
                  type="tel"
                  className="h-full min-w-0 flex-1 bg-transparent text-xs uppercase tracking-[0.03em] text-white outline-none placeholder:text-white/38"
                  placeholder="XX XXX XXXX"
                />
              </div>
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase text-white">
                Country
              </span>
              <select className="mt-2 h-8 w-full border border-white/28 bg-black/20 px-4 text-xs font-semibold text-white outline-none transition focus:border-[#9f264a]">
                <option>-- select one --</option>
                <option>United Arab Emirates</option>
                <option>Saudi Arabia</option>
                <option>Qatar</option>
                <option>Kuwait</option>
                <option>Pakistan</option>
                <option>India</option>
                <option>United Kingdom</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase text-white">
                Message
              </span>
              <textarea
                className="mt-1 min-h-24 w-full resize-y border border-white/28 bg-transparent px-4 py-3 text-sm uppercase tracking-[0.03em] text-white outline-none transition placeholder:text-white/38 focus:border-[#9f264a]"
                placeholder="Type your message"
              />
            </label>
          </div>

          <button className="mt-2 inline-flex  items-center justify-center gap-4 bg-[#9f264a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#7f1f3c]">
            Submit 
          </button>
        </form>
      </div>
    </section>
  );
}
