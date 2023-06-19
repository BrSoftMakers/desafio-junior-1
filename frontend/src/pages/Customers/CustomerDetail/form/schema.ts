import { z } from 'zod'

export const schemaCustomerForm = z.object({
  fullName: z
    .string({ required_error: 'Campo obrigatório' })
    .min(8, 'Seu nome deve ter no mínimo 8 caracteres.')
    .max(50, 'Seu nome deve ter no entre 8 e 50 caracteres.'),
  email: z.string().email('Insira um e-mail válido.'),
  phone: z
    .string({ required_error: 'Campo obrigatório.' })
    .min(8, 'Insira um telefone válido.')
    .max(20, 'Insira um telefone válido.'),
  customerAddress: z.object({
    zipCode: z.string({ required_error: 'Campo obrigatório.' }),
    street: z.string({ required_error: 'Campo obrigatório.' }),
    number: z.string({ required_error: 'Campo obrigatório.' }),
    state: z.string({ required_error: 'Campo obrigatório.' }),
    city: z.string({ required_error: 'Campo obrigatório.' }),
  }),
})
