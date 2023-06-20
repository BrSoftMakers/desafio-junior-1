import { z } from 'zod'
import { formMessagesError } from '../../../../constants/formMessagesError'

export const schemaCustomerForm = z.object({
  fullName: z
    .string({ required_error: formMessagesError.requiredMessage })
    .min(8, 'Seu nome deve ter no mínimo 8 caracteres.')
    .max(50, 'Seu nome deve ter no entre 8 e 50 caracteres.'),
  email: z.string().email('Insira um e-mail válido.'),
  phone: z
    .string({ required_error: formMessagesError.requiredMessage })
    .min(8, 'Insira um telefone válido.')
    .max(20, 'Insira um telefone válido.'),
  customerAddress: z.object({
    zipCode: z.string({ required_error: formMessagesError.requiredMessage }),
    street: z.string({ required_error: formMessagesError.requiredMessage }),
    number: z.string({ required_error: formMessagesError.requiredMessage }),
    state: z.string({ required_error: formMessagesError.requiredMessage }),
    city: z.string({ required_error: formMessagesError.requiredMessage }),
  }),
})
