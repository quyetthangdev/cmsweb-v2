import * as z from 'zod'

export const createSiteSchema = z.object({
  name: z.string().min(1, 'Tên địa điểm không hợp lệ'),
  company: z.string().min(1, 'Slug công ty không hợp lệ'), //company slug
  companyName: z.string().min(1, 'Tên công ty không hợp lệ')
})

export type TCreateSiteSchema = z.infer<typeof createSiteSchema>
