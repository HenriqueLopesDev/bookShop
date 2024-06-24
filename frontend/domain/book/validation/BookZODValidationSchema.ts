import { z } from 'zod'

export const createNewBookValidationSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'O título é obrigatório' })
    .max(255, { message: 'O título deve ter no máximo 255 caracteres' }),
  authors: z
    .string()
    .min(1, { message: 'É obrigatório selecionar ao menos um autor' }),
  edition: z
    .string()
    .min(1, { message: 'A edição é obrigatória' })
    .max(255, { message: 'A edição deve ter no máximo 255 caracteres' }),
  categories: z.string().min(1, { message: 'As categorias são obrigatórias' }),
  year: z.string().length(4, { message: 'O ano deve ter 4 caracteres' }),
  publisher: z
    .string()
    .min(1, { message: 'A editora é obrigatória' })
    .max(255, { message: 'A editora deve ter no máximo 255 caracteres' }),
  acquisitionValue: z
    .string()
    .min(1, { message: 'O valor de aquisição é obrigatório' })
    .max(255, {
      message: 'O valor de aquisição deve ter no máximo 255 caracteres',
    }),
  isbn: z
    .string()
    .min(1, { message: 'O ISBN é obrigatório' })
    .max(255, { message: 'O ISBN deve ter no máximo 255 caracteres' }),
  pages: z
    .string()
    .min(1, { message: 'A quantidade de páginas é obrigatória' })
    .max(255, {
      message: 'A quantidade de páginas deve ter no máximo 255 caracteres',
    }),
  synopsis: z
    .string()
    .min(1, { message: 'A sinopse é obrigatória' })
    .max(255, { message: 'A sinopse deve ter no máximo 255 caracteres' }),
  dimensions: z
    .string()
    .min(1, { message: 'As dimensões são obrigatórias' })
    .max(255, { message: 'As dimensões devem ter no máximo 255 caracteres' }),
  pricingGroup: z
    .string()
    .min(1, { message: 'O grupo de precificação é obrigatório' })
    .max(255, {
      message: 'O grupo de precificação deve ter no máximo 255 caracteres',
    }),
  barcode: z
    .string()
    .min(1, { message: 'O código de barras é obrigatório' })
    .max(255, {
      message: 'O código de barras deve ter no máximo 255 caracteres',
    }),
})

export type formSchema = z.infer<typeof createNewBookValidationSchema>
