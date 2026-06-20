"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const fieldClass =
  "mt-2 h-12 w-full border border-[var(--color-cool-gray)]/45 bg-transparent px-4 text-sm text-[var(--color-charcoal)] outline-none transition-colors placeholder:text-[var(--color-cool-gray)]/70 focus:border-[var(--color-metallic-gold)]";

export function ContactContentSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const mapHeadingRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 86%",
          end: "center 48%",
          scrub: 1.15,
          invalidateOnRefresh: true,
        },
      });

      introTimeline
        .fromTo(detailsRef.current, { x: -90 }, { x: 0, ease: "none" }, 0)
        .fromTo(formRef.current, { x: 90 }, { x: 0, ease: "none" }, 0);

      gsap.fromTo(
        mapHeadingRef.current,
        { y: 48 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: mapHeadingRef.current,
            start: "top 92%",
            end: "top 68%",
            scrub: 1.1,
          },
        },
      );

      gsap.fromTo(
        mapRef.current,
        { y: 72 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 94%",
            end: "center 67%",
            scrub: 1.1,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-white)] px-5 py-20 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-[620px] w-[430px] opacity-35 [background:repeating-linear-gradient(64deg,transparent_0,transparent_18px,var(--color-off-white)_19px,var(--color-off-white)_22px)]"
      />

      <div className="relative mx-auto max-w-360">
        <div className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:gap-28">
          <div ref={detailsRef} className="will-change-transform">
            <div className="border-l-[3px] border-[var(--color-metallic-gold)] pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-metallic-gold)]">
                Contact Zaman Developers
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase leading-tight text-[var(--color-primary-navy)] sm:text-4xl">
                Get in touch with us
              </h2>
            </div>

            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--color-charcoal)]">
              Whether you have a project question, investment enquiry, or would
              like to arrange a private briefing, our team is ready to help. Use
              the details below or send us a message and we will respond promptly.
            </p>

            <address className="mt-10 space-y-9 not-italic">
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--color-metallic-gold)]/45 text-[var(--color-metallic-gold)]">
                  <Phone aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-primary-navy)]">
                    Sales Enquiry
                  </h3>
                  <a
                    href="tel:+971000000000"
                    className="mt-2 block text-sm text-[var(--color-cool-gray)] transition-colors hover:text-[var(--color-metallic-gold)]"
                  >
                    +971 00 000 0000
                  </a>
                  <a
                    href="mailto:sales@zamandevelopers.com"
                    className="mt-1 block break-all text-sm text-[var(--color-cool-gray)] transition-colors hover:text-[var(--color-metallic-gold)]"
                  >
                    sales@zamandevelopers.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--color-metallic-gold)]/45 text-[var(--color-metallic-gold)]">
                  <Mail aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-primary-navy)]">
                    General Enquiries
                  </h3>
                  <a
                    href="mailto:sales@zamandevelopers.com"
                    className="mt-2 block break-all text-sm text-[var(--color-cool-gray)] transition-colors hover:text-[var(--color-metallic-gold)]"
                  >
                    sales@zamandevelopers.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--color-metallic-gold)]/45 text-[var(--color-metallic-gold)]">
                  <MapPin aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-primary-navy)]">
                    Address
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-cool-gray)]">
                    Dubai Islands, Dubai,
                    <br />
                    United Arab Emirates
                  </p>
                </div>
              </div>
            </address>
          </div>

          <form ref={formRef} className="will-change-transform">
            <div className="grid gap-x-7 gap-y-6 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                First Name
                <input
                  name="firstName"
                  autoComplete="given-name"
                  required
                  className={fieldClass}
                  placeholder="First name"
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                Last Name
                <input
                  name="lastName"
                  autoComplete="family-name"
                  required
                  className={fieldClass}
                  placeholder="Last name"
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={fieldClass}
                  placeholder="Your email"
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                Phone Number
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className={fieldClass}
                  placeholder="+971 00 000 0000"
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                Country
                <select name="country" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select country
                  </option>
                  <option>United Arab Emirates</option>
                  <option>Saudi Arabia</option>
                  <option>Qatar</option>
                  <option>Kuwait</option>
                  <option>Pakistan</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                Enquiry Type
                <select name="enquiryType" className={fieldClass}>
                  <option>Private briefing</option>
                  <option>Investor enquiry</option>
                  <option>Broker partnership</option>
                  <option>Payment support</option>
                </select>
              </label>
            </div>

            <fieldset className="mt-7">
              <legend className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                Preferred Mode of Contact
              </legend>
              <div className="mt-3 flex gap-8 text-sm text-[var(--color-charcoal)]">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    className="accent-[var(--color-metallic-gold)]"
                  />
                  Phone
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    className="accent-[var(--color-metallic-gold)]"
                  />
                  Email
                </label>
              </div>
            </fieldset>

            <label className="mt-7 block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
              Message
              <textarea
                name="message"
                className="mt-2 min-h-32 w-full resize-y border border-[var(--color-cool-gray)]/45 bg-transparent px-4 py-3 text-sm font-normal normal-case tracking-normal text-[var(--color-charcoal)] outline-none transition-colors placeholder:text-[var(--color-cool-gray)]/70 focus:border-[var(--color-metallic-gold)]"
                placeholder="Tell us how we can help"
              />
            </label>

            <div className="mt-6 grid gap-4 text-xs leading-5 text-[var(--color-cool-gray)] sm:grid-cols-2">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  className="mt-1 accent-[var(--color-metallic-gold)]"
                />
                I&apos;d like to hear about project news and offers.
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  required
                  className="mt-1 accent-[var(--color-metallic-gold)]"
                />
                I have read and agree to the privacy policy.
              </label>
            </div>

            <button
              type="submit"
              className="mt-9 inline-flex items-center gap-5 bg-[var(--color-primary-navy)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-metallic-gold)] hover:text-[var(--color-primary-navy)]"
            >
              Submit Enquiry
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div ref={mapHeadingRef} className="mt-24 will-change-transform lg:mt-32">
          <div className="border-l-[3px] border-[var(--color-metallic-gold)] pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-metallic-gold)]">
              Visit Zaman Developers
            </p>
            <h2 className="mt-2 text-3xl font-semibold uppercase text-[var(--color-primary-navy)] sm:text-4xl">
              Our Head Office
            </h2>
          </div>
        </div>

        <div
          ref={mapRef}
          className="relative mt-9 h-[430px] overflow-hidden bg-[var(--color-off-white)] shadow-[0_18px_55px_rgba(17,43,69,0.1)] will-change-transform sm:h-[520px]"
        >
          <iframe
            title="Zaman Developers head office location on Dubai Islands"
            src="https://www.google.com/maps?q=Dubai+Islands,+Dubai,+United+Arab+Emirates&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Dubai+Islands,+Dubai,+United+Arab+Emirates"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-3 whitespace-nowrap bg-[var(--color-primary-navy)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-white)] shadow-lg transition-colors hover:bg-[var(--color-metallic-gold)] hover:text-[var(--color-primary-navy)]"
          >
            See Location on Map
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
