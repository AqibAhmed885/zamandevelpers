"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  CreditCard,
  FileCheck2,
  LockKeyhole,
  Mail,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const fieldClass =
  "mt-2 h-12 w-full border border-[var(--color-cool-gray)]/45 bg-transparent px-4 text-sm font-normal normal-case tracking-normal text-[var(--color-charcoal)] outline-none transition-colors placeholder:text-[var(--color-cool-gray)]/70 focus:border-[var(--color-metallic-gold)]";

const paymentSteps = [
  {
    icon: FileCheck2,
    title: "Confirm Your Reference",
    body: "Use the booking or unit reference supplied in your official project documentation.",
  },
  {
    icon: CreditCard,
    title: "Review Your Payment",
    body: "Confirm the payment purpose and amount before continuing to the payment gateway.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Processing",
    body: "Gateway processing will be enabled once verified merchant credentials are connected.",
  },
] as const;

export function PaymentContentSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);

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

      const steps = gsap.utils.toArray<HTMLElement>(".payment-step-card");

      gsap.fromTo(
        steps,
        { y: 64 },
        {
          y: 0,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 92%",
            end: "center 68%",
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
                Client Payments
              </p>
              <h2 className="mt-2 text-3xl font-semibold uppercase leading-tight text-[var(--color-primary-navy)] sm:text-4xl">
                Payment gateway ready
              </h2>
            </div>

            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--color-charcoal)]">
              This secure payment area is prepared for reservation payments,
              installments, and outstanding dues. Enter the same booking details
              used in your official Zaman Developers documentation.
            </p>

            <div className="mt-10 border-t border-[var(--color-primary-navy)]/10 pt-8">
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--color-metallic-gold)]/45 text-[var(--color-metallic-gold)]">
                  <LockKeyhole aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-primary-navy)]">
                    Integration Status
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-cool-gray)]">
                    Gateway activation is pending verified merchant credentials.
                    No online payment is processed by this form yet.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--color-metallic-gold)]/45 text-[var(--color-metallic-gold)]">
                  <Mail aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-primary-navy)]">
                    Payment Support
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-cool-gray)]">
                    For payment-plan or account assistance, contact our sales team.
                  </p>
                  <a
                    href="mailto:sales@zamandevelopers.com"
                    className="mt-2 block break-all text-sm text-[var(--color-primary-navy)] transition-colors hover:text-[var(--color-metallic-gold)]"
                  >
                    sales@zamandevelopers.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} className="will-change-transform">
            <div className="border-l-[3px] border-[var(--color-metallic-gold)] pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-metallic-gold)]">
                Payment Details
              </p>
              <h2 className="mt-2 text-2xl font-semibold uppercase text-[var(--color-primary-navy)] sm:text-3xl">
                Find your upcoming payment
              </h2>
            </div>

            <div className="mt-9 grid gap-x-7 gap-y-6 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)] sm:col-span-2">
                Booking or Unit Reference
                <input
                  name="reference"
                  required
                  className={fieldClass}
                  placeholder="Enter your reference"
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                Customer Email
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
                  className={fieldClass}
                  placeholder="+971 00 000 0000"
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                Payment Type
                <select name="paymentType" className={fieldClass}>
                  <option>Upcoming payment</option>
                  <option>Outstanding dues</option>
                  <option>Reservation payment</option>
                  <option>Installment payment</option>
                </select>
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-navy)]">
                Amount
                <div className="mt-2 flex h-12 border border-[var(--color-cool-gray)]/45 transition-colors focus-within:border-[var(--color-metallic-gold)]">
                  <span className="flex items-center border-r border-[var(--color-cool-gray)]/30 px-4 text-xs font-semibold text-[var(--color-primary-navy)]">
                    AED
                  </span>
                  <input
                    name="amount"
                    type="number"
                    min="0"
                    step="0.01"
                    required
                    className="min-w-0 flex-1 bg-transparent px-4 text-sm font-normal normal-case tracking-normal text-[var(--color-charcoal)] outline-none placeholder:text-[var(--color-cool-gray)]/70"
                    placeholder="0.00"
                  />
                </div>
              </label>
            </div>

            <label className="mt-7 flex items-start gap-3 text-xs leading-5 text-[var(--color-cool-gray)]">
              <input
                type="checkbox"
                name="detailsConfirmation"
                required
                className="mt-1 accent-[var(--color-metallic-gold)]"
              />
              I confirm that the reference, payment type, and amount entered above
              match my official payment notice.
            </label>

            <button
              type="submit"
              className="mt-9 inline-flex items-center gap-5 bg-[var(--color-primary-navy)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-metallic-gold)] hover:text-[var(--color-primary-navy)]"
            >
              Continue to Payment
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>

            <p className="mt-4 max-w-xl text-xs leading-5 text-[var(--color-cool-gray)]">
              Online payment processing will become available after the payment
              gateway integration is activated.
            </p>
          </form>
        </div>

        <div
          ref={stepsRef}
          className="mt-24 grid gap-5 border-t border-[var(--color-primary-navy)]/10 pt-12 md:grid-cols-3 lg:mt-32"
        >
          {paymentSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="payment-step-card border border-[var(--color-metallic-gold)]/25 bg-[var(--color-off-white)] p-7 will-change-transform"
              >
                <div className="flex items-start justify-between gap-5">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-[var(--color-metallic-gold)]"
                  />
                  <span className="font-heading text-2xl text-[var(--color-primary-navy)]/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold uppercase text-[var(--color-primary-navy)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-cool-gray)]">
                  {step.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
