import { company } from "@/data/company";

export type WhatsAppPayload = {
  name?: string | undefined;
  category?: string | undefined;
  method?: string | undefined;
  message?: string | undefined;
};

export function whatsappLink(payload: WhatsAppPayload = {}): string {
  const lines = [
    "Hello Heaven Furniture Mart,",
    "I would like to discuss a custom furniture project.",
  ];
  if (payload.name) lines.push(`Name: ${payload.name}`);
  if (payload.category) lines.push(`Requirement: ${payload.category}`);
  if (payload.method) lines.push(`Preferred contact: ${payload.method}`);
  if (payload.message) lines.push(`Details: ${payload.message}`);
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
