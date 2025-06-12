import { z } from 'zod';

export const LaunchDTOSchema = z.object({
  id: z.string(),
  name: z.string(),
  rocket: z.string().optional(),
  date_utc: z.string(),
  success: z.boolean().nullable().optional(),
});

export type LaunchDTO = z.infer<typeof LaunchDTOSchema>;

export type Launch = {
  id: string;
  name: string;
  rocket: string;
  date_utc: string;
  success?: boolean;
};
