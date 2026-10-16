"use client";

import { FormEvent, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type FieldName = "name" | "email" | "subject" | "message";
type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const INQUIRY_TYPES = ["Web App", "E-Commerce", "Consulting", "Full-time"];

function validateField(field: FieldName, value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return `${field === "email" ? "Email address" : field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
  }

  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
    return "Enter a valid email address, such as name@example.com.";
  }

  if (field === "name" && trimmedValue.length < 2) {
    return "Full name must contain at least 2 characters.";
  }

  if (field === "subject" && trimmedValue.length < 3) {
    return "Subject must contain at least 3 characters.";
  }

  if (field === "message" && trimmedValue.length < 10) {
    return "Message must contain at least 10 characters.";
  }

  return "";
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [inquiryType, setInquiryType] = useState(INQUIRY_TYPES[0]);
  const [isValidated, setIsValidated] = useState(false);
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement>>>({});

  const updateField = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setIsValidated(false);
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: validateField(field, value) || undefined }));
    }
  };

  const validateOnBlur = (field: FieldName) => {
    const error = validateField(field, values[field]);
    setErrors((current) => ({ ...current, [field]: error || undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    const fieldOrder: FieldName[] = ["name", "email", "subject", "message"];

    fieldOrder.forEach((field) => {
      const error = validateField(field, values[field]);
      if (error) nextErrors[field] = error;
    });

    setErrors(nextErrors);
    setIsValidated(Object.keys(nextErrors).length === 0);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = fieldOrder.find((field) => nextErrors[field]);
      if (firstInvalidField) fieldRefs.current[firstInvalidField]?.focus();
    }
  };

  const inputStyles = (field: FieldName) =>
    `w-full px-space-md py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline outline-none border transition-all shadow-inner focus:bg-surface-container-low focus:ring-2 focus:ring-primary-container/30 ${
      errors[field]
        ? "border-error focus:border-error focus:ring-error/20"
        : "border-outline-variant/60 focus:border-primary-container"
    }`;

  const renderError = (field: FieldName) =>
    errors[field] ? (
      <p id={`${field}-error`} className="flex items-center gap-1.5 font-body-sm text-body-sm text-error" role="alert">
        <Icon name="info" size={15} />
        {errors[field]}
      </p>
    ) : null;

  return (
    <div className="p-space-lg md:p-space-xl rounded-2xl bg-surface-container/75 backdrop-blur-xl shadow-2xl border border-white/5 flex flex-col gap-space-lg relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
        <div className="flex items-center gap-space-xs min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-error shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary shrink-0" />
          <span className="font-code-inline text-code-inline text-outline ml-2 truncate">msg_dispatch.tsx</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-high/80 text-secondary self-start sm:self-auto">
          <Icon name="info" size={14} />
          <span className="font-label-sm text-label-sm">Demo only — no backend</span>
        </div>
      </div>

      <form className="flex flex-col gap-space-md" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider" htmlFor="full-name">
              Full Name <span className="text-primary-container" aria-hidden="true">*</span>
            </label>
            <input
              ref={(element) => { fieldRefs.current.name = element ?? undefined; }}
              id="full-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              onBlur={() => validateOnBlur("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputStyles("name")}
              placeholder="e.g. Sarah Jenkins"
            />
            {renderError("name")}
          </div>

          <div className="flex flex-col gap-space-xs">
            <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider" htmlFor="email-address">
              Email Address <span className="text-primary-container" aria-hidden="true">*</span>
            </label>
            <input
              ref={(element) => { fieldRefs.current.email = element ?? undefined; }}
              id="email-address"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              onBlur={() => validateOnBlur("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputStyles("email")}
              placeholder="e.g. sarah@company.com"
            />
            {renderError("email")}
          </div>
        </div>

        <div className="flex flex-col gap-space-xs">
          <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider" htmlFor="subject-line">
            Subject <span className="text-primary-container" aria-hidden="true">*</span>
          </label>
          <input
            ref={(element) => { fieldRefs.current.subject = element ?? undefined; }}
            id="subject-line"
            name="subject"
            type="text"
            required
            value={values.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            onBlur={() => validateOnBlur("subject")}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={inputStyles("subject")}
            placeholder="e.g. New project inquiry"
          />
          {renderError("subject")}
        </div>

        <fieldset className="flex flex-col gap-space-xs">
          <legend className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Inquiry Type / Scope <span className="text-outline normal-case">(optional)</span></legend>
          <div className="flex flex-wrap gap-2 pt-1">
            {INQUIRY_TYPES.map((type) => {
              const isSelected = inquiryType === type;
              return (
                <button
                  key={type}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setInquiryType(type)}
                  className={`px-space-md py-2 rounded-full font-badge-label text-badge-label transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                    isSelected
                      ? "bg-surface-container-high text-primary shadow-sm"
                      : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between gap-space-sm">
            <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider" htmlFor="message-content">
              Message <span className="text-primary-container" aria-hidden="true">*</span>
            </label>
            <span className="font-label-sm text-label-sm text-outline">10+ characters</span>
          </div>
          <textarea
            ref={(element) => { fieldRefs.current.message = element ?? undefined; }}
            id="message-content"
            name="message"
            rows={6}
            required
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            onBlur={() => validateOnBlur("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : "message-help"}
            className={`${inputStyles("message")} resize-y min-h-36`}
            placeholder="Tell me about your project, timeline, and goals..."
          />
          <p id="message-help" className="sr-only">Enter at least 10 characters.</p>
          {renderError("message")}
        </div>

        <div className="pt-space-xs flex flex-col gap-space-sm">
          <button type="submit" className="w-full py-4 px-space-md rounded-xl font-title-md text-title-md bg-primary-container text-on-primary-container hover:bg-primary shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:shadow-[0_0_32px_rgba(34,211,238,0.55)] transition-all flex items-center justify-center gap-space-xs group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
            <span>Validate Demo Message</span>
            <Icon name="arrow_forward" size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-start sm:items-center justify-center gap-space-xs text-outline font-label-sm text-label-sm pt-1 text-center">
            <Icon name="lock" size={14} className="mt-0.5 sm:mt-0" />
            <span>Form contents stay in this browser tab and are not submitted.</span>
          </div>
        </div>

        {isValidated && (
          <div className="p-space-md rounded-xl bg-tertiary-container/20 border border-tertiary/30 text-on-surface flex items-start gap-space-sm" role="status" aria-live="polite">
            <Icon name="check_circle" size={20} className="text-tertiary shrink-0 mt-0.5" />
            <span className="font-body-sm text-body-sm">Demo validation complete. Nothing was sent, saved, or transmitted.</span>
          </div>
        )}
      </form>
    </div>
  );
}
