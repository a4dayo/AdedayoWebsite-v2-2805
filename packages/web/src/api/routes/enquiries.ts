import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";
import { notifyEnquiry } from "../notify";
import { BUDGET_OPTIONS, ENGAGEMENT_TYPES, TIMELINE_OPTIONS } from "../../shared/services";

const createInput = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(200),
  organisation: z.string().trim().max(160).optional(),
  engagement: z.enum(ENGAGEMENT_TYPES),
  message: z.string().trim().min(20, "Tell me a little more about the goal").max(4000),
  budget: z.enum(BUDGET_OPTIONS),
  timeline: z.enum(TIMELINE_OPTIONS),
});

export const enquiries = {
  create: base.input(createInput).handler(async ({ input }) => {
    const [row] = await db
      .insert(schema.enquiries)
      .values({
        name: input.name,
        email: input.email.toLowerCase(),
        organisation: input.organisation || null,
        engagement: input.engagement,
        message: input.message,
        budget: input.budget,
        timeline: input.timeline,
      })
      .returning({ id: schema.enquiries.id });

    const id = row?.id ?? null;
    await notifyEnquiry({
      id,
      name: input.name,
      email: input.email.toLowerCase(),
      organisation: input.organisation || null,
      engagement: input.engagement,
      budget: input.budget,
      timeline: input.timeline,
      message: input.message,
    });

    return { id, received: true };
  }),
};
