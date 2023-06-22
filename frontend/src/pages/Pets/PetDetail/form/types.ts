import { z } from 'zod'
import { schemaPetForm } from './schemaPetForm'

export type formPetProps = z.infer<typeof schemaPetForm>
