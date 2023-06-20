import { z } from 'zod'
import { formMessagesError } from '../../../../constants/formMessagesError'

export const schemaPetForm = z.object({
  name: z
    .string({ required_error: formMessagesError.requiredMessage })
    .min(3, 'O nome deve ter no mínimo 3 caracteres.')
    .max(50, 'O nome deve ter entre 3 e 50 caracteres.'),
  age: z
    .number({
      required_error: formMessagesError.requiredMessage,
      invalid_type_error: 'Insira a idade do pet em anos.',
    })
    .int('Você deve inserir um número inteiro. Ex: 1, 2, 3...'),
  type: z.enum(['cat', 'dog'], {
    errorMap: () => ({ message: 'Selecione uma opção.' }),
  }),
  race: z
    .string({ required_error: formMessagesError.requiredMessage })
    .min(3, 'Raça deve ter no mínimo 3 caracteres.')
    .max(50, 'Raça deve ter entre 3 e 50 caracteres.'),
})
