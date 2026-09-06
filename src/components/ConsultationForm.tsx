import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";
import { whatsappLink } from "@/lib/whatsapp";
import { MagneticButton } from "@/components/MagneticButton";

const projectTypes = ["New", "Custom", "Home Interior", "Office", "Consultation", "Other"] as const;
const categories = [
  "Living",
  "Bedroom",
  "Dining",
  "Office & Study",
  "Custom & Space-Saving",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone number")
    .regex(/^[0-9+()\-\s]+$/, "Only digits, spaces and + ( ) - are allowed"),
  projectType: z.enum(projectTypes),
  category: z.enum(categories),
  message: z.string().trim().max(1000).optional(),
  method: z.enum(["WhatsApp", "Call"]),
});

type FormValues = z.infer<typeof schema>;

function submitConsultation(values: FormValues) {
  if (values.method === "WhatsApp") {
    window.open(
      whatsappLink({
        name: values.name,
        category: values.category,
        method: values.method,
        message: values.message,
      }),
      "_blank",
      "noopener,noreferrer",
    );
  }
}

const fieldClass =
  "mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-[0.95rem] outline-none transition-colors focus:border-gold";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { projectType: "Custom", category: "Living", method: "WhatsApp" },
  });

  if (submitted) {
    return (
      <div className="border-border bg-card rounded-sm border p-9 text-center">
        <CheckCircle2 className="text-gold mx-auto size-10" aria-hidden />
        <h3 className="mt-5 text-2xl font-semibold">Thank you.</h3>
        <p className="text-muted-foreground mt-3">
          Your consultation details are ready to send to Heaven Furniture Mart.
        </p>
        <p className="text-muted-foreground mx-auto mt-4 max-w-md text-sm">
          {submitted.method === "WhatsApp"
            ? "WhatsApp has opened with your project details already written for you."
            : "Call us directly and keep your project details nearby so we can help quickly."}
        </p>
        {submitted.method === "WhatsApp" ? (
          <a
            href={whatsappLink({
              name: submitted.name,
              category: submitted.category,
              method: submitted.method,
              message: submitted.message,
            })}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-gold text-accent-foreground mt-7 inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold"
          >
            <MessageCircle className="size-4" aria-hidden />
            Open WhatsApp again
          </a>
        ) : (
          <a
            href={company.phoneHref}
            className="bg-gold text-accent-foreground mt-7 inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold"
          >
            Call {company.phone}
          </a>
        )}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setSubmitted(null)}
            className="text-muted-foreground hover:text-gold text-sm underline underline-offset-4"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit((values) => {
        submitConsultation(values);
        setSubmitted(values);
      })}
      className="border-border bg-card rounded-sm border p-7 md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold">
            Name <span className="text-rust">*</span>
          </label>
          <input
            id="name"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="text-destructive mt-1.5 text-xs">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone <span className="text-rust">*</span>
          </label>
          <input
            id="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+880 1XXX-XXXXXX"
            className={fieldClass}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="text-destructive mt-1.5 text-xs">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className="text-sm font-semibold">
            Project type
          </label>
          <select id="projectType" className={fieldClass} {...register("projectType")}>
            {projectTypes.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="category" className="text-sm font-semibold">
            Furniture category
          </label>
          <select id="category" className={fieldClass} {...register("category")}>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold">
            Your idea or requirement
          </label>
          <textarea
            id="message"
            rows={5}
            className={fieldClass}
            placeholder="Room size, style you like, timeline…"
            {...register("message")}
          />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-semibold">Preferred contact</legend>
          <div className="mt-3 flex gap-6">
            {(["WhatsApp", "Call"] as const).map((m) => (
              <label key={m} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value={m}
                  className="accent-gold size-4"
                  {...register("method")}
                />
                {m}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <MagneticButton
        type="submit"
        disabled={isSubmitting}
        className="bg-gold text-accent-foreground mt-8 w-full rounded-sm px-6 py-4 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        Request a Consultation
      </MagneticButton>
      <p className="text-muted-foreground mt-4 text-xs">
        Your details are used only to contact you about this enquiry.
      </p>
    </form>
  );
}
