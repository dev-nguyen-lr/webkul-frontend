import { z } from 'zod'

export const orderSchema = z.object({
  id: z.string(),
  status: z.string(),
})

export type Order = z.infer<typeof orderSchema>
