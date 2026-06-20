"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Check, CloudUpload, Download, Plus, Trash2 } from "lucide-react";

type PartnerType = "agency" | "individual";
type FieldType = "text" | "email" | "tel" | "date" | "select" | "file" | "checkbox";

type Field = {
  label: string;
  name: string;
  type?: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  span?: "full";
  dropzone?: boolean;
};

type FieldSection = {
  title?: string;
  fields: Field[];
};

type Step = {
  label: string;
  sections?: FieldSection[];
  preview?: boolean;
  brokers?: boolean;
};

type PreviewGroup = {
  title: string;
  items: Array<{ label: string; value: string }>;
};

const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Pakistan",
  "India",
  "United Kingdom",
  "United States",
  "Other",
];

const companyInformation: FieldSection[] = [
  {
    fields: [
      { label: "Agency sub type", name: "agencySubType", type: "select", required: true, options: ["Real Estate Agency", "International Brokerage", "Referral Partner"] },
      { label: "Agency name (as per trade license)", name: "agencyName", required: true },
      { label: "Trade license / registration number", name: "tradeLicense", required: true },
      { label: "Trade license expiry date", name: "tradeLicenseExpiry", type: "date", required: true },
      { label: "Head of sales", name: "headOfSales" },
      { label: "Agency phone number", name: "agencyPhone", type: "tel" },
      { label: "Head of sales email", name: "headOfSalesEmail", type: "email" },
      { label: "Company registered email", name: "companyEmail", type: "email", required: true },
      { label: "Country code", name: "companyCountryCode", type: "select", required: true, options: ["United Arab Emirates: +971", "Saudi Arabia: +966", "Pakistan: +92", "United Kingdom: +44", "Other"] },
      { label: "Company phone", name: "companyPhone", type: "tel", required: true },
      { label: "Source", name: "companySource", type: "select", required: true, options: ["Zaman representative", "Referral", "Social media", "Event", "Website", "Other"] },
      { label: "Office unit number", name: "officeUnit", required: true },
      { label: "Building name", name: "buildingName", required: true },
      { label: "Country", name: "companyCountry", type: "select", required: true, options: countries },
      { label: "City", name: "companyCity", required: true },
      { label: "P.O. Box", name: "poBox", required: true },
      { label: "Company RERA (ORN No.)", name: "companyRera", required: true },
      { label: "Company RERA registration expiry", name: "companyReraExpiry", type: "date", required: true },
      { label: "Have TRN?", name: "hasTrn", type: "select", required: true, options: ["Yes", "No"] },
      { label: "TRN number", name: "trnNumber" },
    ],
  },
];

const signatoryDetails: FieldSection[] = [
  {
    title: "Owner details",
    fields: [
      { label: "Owner first name", name: "ownerFirstName", required: true },
      { label: "Owner last name", name: "ownerLastName", required: true },
      { label: "Owner Emirates ID number", name: "ownerEid", required: true },
      { label: "Owner EID expiry date", name: "ownerEidExpiry", type: "date", required: true },
      { label: "Owner passport number", name: "ownerPassport", required: true },
      { label: "Owner passport expiry date", name: "ownerPassportExpiry", type: "date", required: true },
      { label: "Owner country code", name: "ownerCountryCode", type: "select", required: true, options: ["United Arab Emirates: +971", "Saudi Arabia: +966", "Pakistan: +92", "United Kingdom: +44", "Other"] },
      { label: "Owner mobile", name: "ownerMobile", type: "tel", required: true },
      { label: "Owner nationality", name: "ownerNationality", type: "select", required: true, options: countries },
      { label: "Owner email", name: "ownerEmail", type: "email", required: true },
      { label: "Owner broker card number", name: "ownerBrokerCard" },
      { label: "Owner broker card expiry date", name: "ownerBrokerCardExpiry", type: "date" },
      { label: "Owner and authorized signatory are the same", name: "ownerSame", type: "checkbox", span: "full" },
    ],
  },
  {
    title: "Authorized signatory details",
    fields: [
      { label: "Authorized signatory first name", name: "signatoryFirstName", required: true },
      { label: "Authorized signatory last name", name: "signatoryLastName", required: true },
      { label: "Authorized signatory Emirates ID number", name: "signatoryEid", required: true },
      { label: "Authorized signatory EID expiry date", name: "signatoryEidExpiry", type: "date", required: true },
      { label: "Authorized signatory passport number", name: "signatoryPassport", required: true },
      { label: "Authorized signatory passport expiry date", name: "signatoryPassportExpiry", type: "date", required: true },
      { label: "Authorized signatory country code", name: "signatoryCountryCode", type: "select", required: true, options: ["United Arab Emirates: +971", "Saudi Arabia: +966", "Pakistan: +92", "United Kingdom: +44", "Other"] },
      { label: "Authorized signatory mobile", name: "signatoryMobile", type: "tel", required: true },
      { label: "Authorized signatory nationality", name: "signatoryNationality", type: "select", required: true, options: countries },
      { label: "Authorized signatory email", name: "signatoryEmail", type: "email", required: true },
      { label: "Authorized signatory broker card number", name: "signatoryBrokerCard" },
      { label: "Authorized signatory broker card expiry date", name: "signatoryBrokerCardExpiry", type: "date" },
    ],
  },
];

const agencyBankInformation: FieldSection[] = [
  {
    fields: [
      { label: "Bank details available", name: "bankDetailsAvailable", type: "select", required: true, options: ["Yes", "No"] },
      { label: "Bank name", name: "agencyBankName", type: "select", required: true, options: ["Abu Dhabi Commercial Bank", "Abu Dhabi Islamic Bank", "Emirates NBD", "First Abu Dhabi Bank", "Mashreq Bank", "Other"] },
      { label: "Bank account number", name: "bankAccountNumber", required: true },
      { label: "Beneficiary name", name: "beneficiaryName", required: true },
      { label: "IBAN number", name: "agencyIban", required: true },
      { label: "Swift code", name: "agencySwiftCode", required: true },
      { label: "Currency", name: "currency", type: "select", required: true, options: ["AED", "USD", "EUR", "GBP", "Other"] },
      { label: "Bank branch name", name: "bankBranchName", required: true },
      { label: "Bank address", name: "bankAddress", required: true },
    ],
  },
];

const agencyDocuments: FieldSection[] = [
  {
    fields: [
      { label: "Trade license", name: "tradeLicenseFile", type: "file", required: true, dropzone: true },
      { label: "Other documents 1", name: "otherDocuments1", type: "file", dropzone: true },
      { label: "Other documents 2", name: "otherDocuments2", type: "file", dropzone: true },
      { label: "Passport copy (authorized signatory)", name: "signatoryPassportFile", type: "file", required: true, dropzone: true },
      { label: "Visa (authorized signatory)", name: "signatoryVisaFile", type: "file", dropzone: true },
      { label: "EID (authorized signatory)", name: "signatoryEidFile", type: "file", required: true, dropzone: true },
      { label: "VAT declaration", name: "vatDeclarationFile", type: "file", dropzone: true },
      { label: "VAT certificate", name: "vatCertificateFile", type: "file", required: true, dropzone: true },
      { label: "MOA / POA", name: "moaPoaFile", type: "file", dropzone: true },
      { label: "Bank details on company letterhead with sign and stamp", name: "bankLetter", type: "file", required: true, dropzone: true },
      { label: "Other documents", name: "otherDocuments", type: "file", dropzone: true },
      { label: "Broker card", name: "brokerCardFile", type: "file", dropzone: true },
      { label: "I acknowledge that I have reviewed the information and documents provided and confirm that they are accurate and complete.", name: "documentsAcknowledged", type: "checkbox", required: true, span: "full" },
    ],
  },
];

const individualDetails: FieldSection[] = [
  {
    title: "Agent details",
    fields: [
      { label: "First name", name: "agentFirstName", required: true },
      { label: "Last name", name: "agentLastName", required: true },
      { label: "Emirates ID number", name: "agentEid", required: true },
      { label: "Emirates ID expiry date", name: "agentEidExpiry", type: "date", required: true },
      { label: "Passport number", name: "agentPassport", required: true },
      { label: "Passport expiry date", name: "agentPassportExpiry", type: "date", required: true },
      { label: "Country code", name: "agentCountryCode", type: "select", required: true, options: ["United Arab Emirates: +971", "Saudi Arabia: +966", "Pakistan: +92", "United Kingdom: +44", "Other"] },
      { label: "Mobile", name: "agentMobile", type: "tel", required: true },
      { label: "Nationality", name: "agentNationality", type: "select", required: true, options: countries },
      { label: "Email", name: "agentEmail", type: "email", required: true },
      { label: "Broker card number", name: "agentBrokerCard" },
      { label: "Broker card expiry date", name: "agentBrokerCardExpiry", type: "date" },
    ],
  },
  {
    title: "Address and referral details",
    fields: [
      { label: "Source", name: "agentSource", type: "select", required: true, options: ["Zaman representative", "Referral", "Social media", "Event", "Website", "Other"] },
      { label: "Country", name: "agentCountry", type: "select", required: true, options: countries },
      { label: "City", name: "agentCity", required: true },
      { label: "Residential address", name: "agentAddress", required: true },
    ],
  },
];

const individualDocuments: FieldSection[] = [
  {
    fields: [
      { label: "Passport copy (authorized signatory)", name: "agentPassportFile", type: "file", required: true, dropzone: true },
      { label: "Bank details on company letterhead with sign and stamp", name: "agentBankLetter", type: "file", required: true, dropzone: true },
      { label: "Other documents", name: "agentOtherDocuments", type: "file", dropzone: true },
      { label: "Visa (authorized signatory)", name: "agentVisaFile", type: "file", dropzone: true },
      { label: "EID (authorized signatory)", name: "agentEidFile", type: "file", required: true, dropzone: true },
      { label: "Individual passport", name: "individualPassportFile", type: "file", dropzone: true },
      { label: "I acknowledge that I have reviewed the information and documents provided and confirm that they are accurate and complete.", name: "individualDocumentsAcknowledged", type: "checkbox", required: true, span: "full" },
    ],
  },
];

const agencySteps: Step[] = [
  { label: "Company Information", sections: companyInformation },
  { label: "Signatory Details", sections: signatoryDetails },
  { label: "Broker Details", brokers: true },
  { label: "Bank Info", sections: agencyBankInformation },
  { label: "Documents", sections: agencyDocuments },
  { label: "Preview & Submit", preview: true },
];

const individualSteps: Step[] = [
  { label: "Agent Details", sections: individualDetails },
  { label: "Bank Info", sections: agencyBankInformation },
  { label: "Documents", sections: individualDocuments },
  { label: "Preview & Submit", preview: true },
];

const inputClass =
  "mt-2 h-11 w-full rounded-sm border border-[var(--color-cool-gray)]/35 bg-[var(--color-white)] px-3 text-sm text-[var(--color-primary-navy)] outline-none transition placeholder:text-[var(--color-cool-gray)] focus:border-[var(--color-metallic-gold)] focus:ring-2 focus:ring-[var(--color-metallic-gold)]/20";

function FormField({ field }: { field: Field }) {
  if (field.type === "checkbox") {
    return (
      <label className="col-span-full flex cursor-pointer items-start gap-3 py-2">
        <input name={field.name} type="checkbox" required={field.required} className="mt-0.5 h-4 w-4 accent-[var(--color-metallic-gold)]" />
        <span className="text-sm leading-6 text-[var(--color-charcoal)]">
          {field.required && <span className="mr-1 text-[var(--color-metallic-gold)]">*</span>}
          {field.label}
        </span>
      </label>
    );
  }

  if (field.type === "file" && field.dropzone) {
    return (
      <label className="block">
        <span className="text-xs font-medium text-[var(--color-charcoal)]">
          {field.required && <span className="mr-1 text-[var(--color-metallic-gold)]">*</span>}
          {field.label}
        </span>
        <span className="mt-2 flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-sm border border-dashed border-[var(--color-cool-gray)]/35 bg-[var(--color-off-white)] px-4 py-4 text-center transition hover:border-[var(--color-metallic-gold)] hover:bg-[var(--color-white)]">
          <CloudUpload aria-hidden="true" className="h-6 w-6 text-[var(--color-metallic-gold)]" />
          <span className="mt-2 text-xs text-[var(--color-charcoal)]">Drag and drop files here or <strong className="text-[var(--color-metallic-gold)]">choose a file</strong></span>
          <span className="mt-1 text-[10px] text-[var(--color-cool-gray)]">PDF, JPG or PNG · Maximum 6MB</span>
          <input name={field.name} type="file" required={field.required} accept=".pdf,.jpg,.jpeg,.png" className="sr-only" />
        </span>
      </label>
    );
  }

  return (
    <label className={field.span === "full" ? "md:col-span-2 xl:col-span-4" : ""}>
      <span className="text-xs font-medium text-[var(--color-charcoal)]">
        {field.required && <span className="mr-1 text-[var(--color-metallic-gold)]">*</span>}
        {field.label}
      </span>
      {field.type === "select" ? (
        <select name={field.name} required={field.required} defaultValue="" className={inputClass}>
          <option value="" disabled>Select an option</option>
          {field.options?.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : (
        <input
          name={field.name}
          type={field.type ?? "text"}
          required={field.required}
          placeholder={field.placeholder}
          accept={field.type === "file" ? ".pdf,.jpg,.jpeg,.png" : undefined}
          className={field.type === "file" ? `${inputClass} cursor-pointer py-2 file:mr-3 file:rounded-sm file:border-0 file:bg-[var(--color-off-white)] file:px-3 file:py-1 file:text-xs file:font-semibold file:text-[var(--color-primary-navy)]` : inputClass}
        />
      )}
    </label>
  );
}

export function PartnerOnboardingForm() {
  const [partnerType, setPartnerType] = useState<PartnerType>("agency");
  const [currentStep, setCurrentStep] = useState(0);
  const [completedStep, setCompletedStep] = useState(0);
  const [preview, setPreview] = useState<PreviewGroup[]>([]);
  const [brokerIds, setBrokerIds] = useState([1]);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const steps = partnerType === "agency" ? agencySteps : individualSteps;

  function changePartnerType(type: PartnerType) {
    setPartnerType(type);
    setCurrentStep(0);
    setCompletedStep(0);
    setPreview([]);
    setBrokerIds([1]);
    setSubmitted(false);
    formRef.current?.reset();
  }

  function makePreview() {
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const groups: PreviewGroup[] = [];

    steps.forEach((previewStep) => {
      if (previewStep.preview) return;

      if (previewStep.brokers) {
        const brokerItems = brokerIds.flatMap((id, index) => [
          { label: `Broker ${index + 1} · Name`, name: `brokerName-${id}` },
          { label: `Broker ${index + 1} · Email`, name: `brokerEmail-${id}` },
          { label: `Broker ${index + 1} · Country code`, name: `brokerCountryCode-${id}` },
          { label: `Broker ${index + 1} · Mobile`, name: `brokerMobile-${id}` },
          { label: `Broker ${index + 1} · Broker card number`, name: `brokerCard-${id}` },
        ]).flatMap(({ label, name }) => {
          const value = data.get(name);
          return typeof value === "string" && value.trim() ? [{ label, value }] : [];
        });
        if (brokerItems.length) groups.push({ title: previewStep.label, items: brokerItems });
        return;
      }

      previewStep.sections?.forEach((section) => {
        const items = section.fields.flatMap((field) => {
          const value = data.get(field.name);
          if (value instanceof File) return value.size ? [{ label: field.label, value: value.name }] : [];
          if (typeof value !== "string" || !value.trim()) return [];
          return [{ label: field.label, value: field.type === "checkbox" ? "Yes" : value }];
        });
        if (items.length) groups.push({ title: section.title ?? previewStep.label, items });
      });
    });

    setPreview(groups);
  }

  function handleOwnerSame(event: ChangeEvent<HTMLFormElement>) {
    const target = event.target;
    if (target instanceof HTMLInputElement && target.type === "file") {
      const oversizedFile = Array.from(target.files ?? []).find((file) => file.size > 6 * 1024 * 1024);
      target.setCustomValidity(oversizedFile ? "Each file must be 6MB or smaller." : "");
    }
    if (!(target instanceof HTMLInputElement) || target.name !== "ownerSame" || !target.checked || !formRef.current) return;

    const pairs = [
      ["ownerFirstName", "signatoryFirstName"],
      ["ownerLastName", "signatoryLastName"],
      ["ownerEid", "signatoryEid"],
      ["ownerEidExpiry", "signatoryEidExpiry"],
      ["ownerPassport", "signatoryPassport"],
      ["ownerPassportExpiry", "signatoryPassportExpiry"],
      ["ownerCountryCode", "signatoryCountryCode"],
      ["ownerMobile", "signatoryMobile"],
      ["ownerNationality", "signatoryNationality"],
      ["ownerEmail", "signatoryEmail"],
      ["ownerBrokerCard", "signatoryBrokerCard"],
      ["ownerBrokerCardExpiry", "signatoryBrokerCardExpiry"],
    ];

    pairs.forEach(([sourceName, destinationName]) => {
      const source = formRef.current?.elements.namedItem(sourceName) as HTMLInputElement | HTMLSelectElement | null;
      const destination = formRef.current?.elements.namedItem(destinationName) as HTMLInputElement | HTMLSelectElement | null;
      if (source && destination) destination.value = source.value;
    });
  }

  function goNext() {
    const panel = formRef.current?.querySelector<HTMLElement>(`[data-step="${currentStep}"]`);
    const fields = Array.from(panel?.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input, select") ?? []);
    const invalidField = fields.find((field) => !field.checkValidity());

    if (invalidField) {
      invalidField.reportValidity();
      invalidField.focus();
      return;
    }

    const nextStep = Math.min(currentStep + 1, steps.length - 1);
    setCompletedStep((value) => Math.max(value, nextStep));
    setCurrentStep(nextStep);
    if (steps[nextStep]?.preview) makePreview();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="partner-onboarding" className="mx-auto max-w-360 scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="rounded-sm border border-[var(--color-cool-gray)]/28 bg-[var(--color-white)] shadow-[0_24px_80px_rgba(17,43,69,0.08)]">
        <div className="border-b border-[var(--color-cool-gray)]/25 p-5 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-metallic-gold)]">Partner onboarding</p>
          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-primary-navy)] sm:text-3xl">Register with the Zaman Circle</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-charcoal)]">Complete the application in one session. Required fields are marked with an asterisk.</p>
            </div>
            <div role="tablist" aria-label="Partner type" className="grid w-full max-w-md grid-cols-2 rounded-sm bg-[var(--color-off-white)] p-1">
              {(["agency", "individual"] as PartnerType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  role="tab"
                  aria-selected={partnerType === type}
                  onClick={() => changePartnerType(type)}
                  className={`min-h-11 px-4 text-sm font-semibold capitalize transition ${partnerType === type ? "bg-[var(--color-primary-navy)] text-[var(--color-white)] shadow-sm" : "text-[var(--color-charcoal)] hover:text-[var(--color-primary-navy)]"}`}
                >
                  {type === "agency" ? "Agency" : "Individual"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} onChange={handleOwnerSame} className="p-5 sm:p-8">
          <input type="hidden" name="partnerType" value={partnerType} />
          <div className="mb-10 overflow-x-auto pb-3" aria-label="Application progress">
            <ol className={`flex ${partnerType === "agency" ? "min-w-[980px]" : "min-w-[680px]"}`}>
              {steps.map((item, index) => (
                <li key={item.label} className={`flex items-center ${index < steps.length - 1 ? "flex-1" : "shrink-0"}`}>
                  <button
                    type="button"
                    disabled={index > completedStep}
                    onClick={() => {
                      setCurrentStep(index);
                      if (item.preview) makePreview();
                    }}
                    aria-current={index === currentStep ? "step" : undefined}
                    className={`group flex min-h-10 shrink-0 items-center gap-2.5 text-sm font-semibold transition ${index <= currentStep ? "text-[var(--color-primary-navy)]" : "text-[var(--color-cool-gray)]"}`}
                  >
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold text-[var(--color-white)] shadow-sm transition ${index <= currentStep ? "bg-[var(--color-primary-navy)]" : "bg-[var(--color-cool-gray)]"}`}>
                      {index < currentStep ? <Check aria-hidden="true" className="h-4 w-4" strokeWidth={3} /> : index + 1}
                    </span>
                    <span className="whitespace-nowrap">{item.label}</span>
                  </button>
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`mx-4 h-px min-w-10 flex-1 transition-colors ${index < completedStep ? "bg-[var(--color-metallic-gold)]/45" : "bg-[var(--color-cool-gray)]/35"}`}
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>

          {steps.map((item, index) => (
            <fieldset key={`${partnerType}-${item.label}`} data-step={index} hidden={index !== currentStep}>
              <legend className="sr-only">{item.label}</legend>
              {item.sections?.map((section, sectionIndex) => (
                <section key={section.title ?? sectionIndex} className={sectionIndex ? "mt-10 border-t border-[var(--color-cool-gray)]/20 pt-8" : ""}>
                  {section.title && <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-primary-navy)]">{section.title}</h3>}
                  <div className={`grid gap-x-6 gap-y-5 md:grid-cols-2 ${item.label === "Documents" ? "xl:grid-cols-2" : "xl:grid-cols-4"}`}>
                    {section.fields.map((field) => <FormField key={field.name} field={field} />)}
                  </div>
                </section>
              ))}

              {item.brokers && (
                <section>
                  <div className="mb-5 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setBrokerIds((ids) => [...ids, Math.max(...ids) + 1])}
                      className="inline-flex min-h-10 items-center gap-2 bg-[var(--color-metallic-gold)] px-5 text-sm font-semibold text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]"
                    >
                      <Plus aria-hidden="true" className="h-4 w-4" /> Add Broker
                    </button>
                  </div>
                  <div className="space-y-4">
                    {brokerIds.map((id, index) => (
                      <div key={id} className="grid gap-4 rounded-sm bg-[var(--color-off-white)] p-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1.35fr_1fr_auto] xl:items-end">
                        <label><span className="text-xs font-medium text-[var(--color-charcoal)]"><span className="mr-1 text-[var(--color-metallic-gold)]">*</span>Name</span><input name={`brokerName-${id}`} required className={inputClass} /></label>
                        <label><span className="text-xs font-medium text-[var(--color-charcoal)]"><span className="mr-1 text-[var(--color-metallic-gold)]">*</span>Email</span><input name={`brokerEmail-${id}`} type="email" required className={inputClass} /></label>
                        <label><span className="text-xs font-medium text-[var(--color-charcoal)]"><span className="mr-1 text-[var(--color-metallic-gold)]">*</span>Country code</span><select name={`brokerCountryCode-${id}`} required defaultValue="" className={inputClass}><option value="" disabled>Select an option</option><option>United Arab Emirates: +971</option><option>Saudi Arabia: +966</option><option>Pakistan: +92</option><option>Other</option></select></label>
                        <label><span className="text-xs font-medium text-[var(--color-charcoal)]"><span className="mr-1 text-[var(--color-metallic-gold)]">*</span>Mobile</span><input name={`brokerMobile-${id}`} type="tel" required className={inputClass} /></label>
                        <label><span className="text-xs font-medium text-[var(--color-charcoal)]">Broker card number</span><input name={`brokerCard-${id}`} className={inputClass} /></label>
                        <button
                          type="button"
                          aria-label={`Remove broker ${index + 1}`}
                          disabled={brokerIds.length === 1}
                          onClick={() => setBrokerIds((ids) => ids.filter((brokerId) => brokerId !== id))}
                          className="grid h-11 w-11 place-items-center border border-[var(--color-cool-gray)]/35 text-[var(--color-primary-navy)] transition hover:bg-[var(--color-white)] disabled:cursor-not-allowed disabled:opacity-35"
                        >
                          <Trash2 aria-hidden="true" className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {item.label === "Documents" && (
                <div className="mt-7 flex justify-end">
                  <a
                    href="/zaman-bank-details-template.txt"
                    download
                    className="inline-flex min-h-11 items-center gap-2 bg-[var(--color-metallic-gold)] px-6 text-sm font-semibold text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]"
                  >
                    <Download aria-hidden="true" className="h-4 w-4" /> Download Bank Document
                  </a>
                </div>
              )}

              {item.preview && (
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-primary-navy)]">Review your application</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-charcoal)]">Check the details below, then submit your {partnerType} registration.</p>
                  {submitted ? (
                    <div role="status" className="mt-8 border-l-4 border-[var(--color-metallic-gold)] bg-[var(--color-off-white)] p-6">
                      <p className="font-semibold text-[var(--color-primary-navy)]">Your application is ready.</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-charcoal)]">Thank you for registering with the Zaman Circle. Our partnership team will contact you after the submission service is connected.</p>
                    </div>
                  ) : (
                    <div className="mt-7 space-y-7">
                      {preview.length ? preview.map((group, groupIndex) => (
                        <section key={`${group.title}-${groupIndex}`}>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-primary-navy)]">{group.title}</h4>
                          <div className="grid gap-3 rounded-sm bg-[var(--color-off-white)] p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {group.items.map(({ label, value }, itemIndex) => (
                              <div key={`${label}-${itemIndex}`} className="min-w-0 p-2">
                                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-metallic-gold)]">{label}</p>
                                <p className="mt-2 break-words text-sm text-[var(--color-charcoal)]">{value}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                      )) : <p className="text-sm text-[var(--color-charcoal)]">No details have been entered yet.</p>}
                    </div>
                  )}
                </div>
              )}
            </fieldset>
          ))}

          <div className="mt-10 flex flex-wrap gap-3 border-t border-[var(--color-cool-gray)]/20 pt-6">
            {currentStep > 0 && (
              <button type="button" onClick={() => setCurrentStep((value) => value - 1)} className="min-h-11 border border-[var(--color-metallic-gold)] px-6 text-sm font-semibold text-[var(--color-primary-navy)] transition hover:bg-[var(--color-off-white)]">
                Back
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button type="button" onClick={goNext} className="min-h-11 bg-[var(--color-metallic-gold)] px-7 text-sm font-semibold text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]">
                Next
              </button>
            ) : (
              <button type="submit" disabled={submitted} className="min-h-11 bg-[var(--color-metallic-gold)] px-7 text-sm font-semibold text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)] disabled:cursor-not-allowed disabled:opacity-60">
                {submitted ? "Application Prepared" : "Submit Registration"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
