import { z } from 'zod';

export const LaunchSchema = z.object({
  id: z.string(),
  name: z.string(),
  rocket: z.string(),
  date_utc: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Fecha inválida',
  }),
  success: z.boolean().nullable(),
});

export type LaunchParsed = z.infer<typeof LaunchSchema>;
