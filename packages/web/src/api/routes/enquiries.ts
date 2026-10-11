import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

export const ENGAGEMENT_TYPES = [
  "Advisory retainer",
  "Fractional COO / CPO",
  "Board or NED seat",
  "Corporate consulting",
  "Speaking engagement",
  "Full-time executive role",
  "Something else",
] as const;

const createInput = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("A valid email is required").max(200),
  organisation: z.string().max(160).optional(),
  engagement: z.enum(ENGAGEMENT_TYPES),
  message: z.string().min(10, "Tell me a little more").max(4000),
});

export const enquiries = {
  create: base.input(createInput).handler(async ({ input }) => {
    const [row] = await db
      .insert(schema.enquiries)
      .values({
        name: input.name.trim(),
        email: input.email.trim().toLowerCase(),
        organisation: input.organisation?.trim() || null,
        engagement: input.engagement,
        message: input.message.trim(),
      })
      .returning({ id: schema.enquiries.id });

    return { id: row?.id ?? null, received: true };
  }),
};
