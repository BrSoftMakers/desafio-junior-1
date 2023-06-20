import { z } from 'zod'
import { schemaCustomerForm } from './schemaCustomerForm'

export type formCustomerProps = z.infer<typeof schemaCustomerForm>
