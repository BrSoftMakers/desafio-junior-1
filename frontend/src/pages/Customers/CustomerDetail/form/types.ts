import { z } from 'zod'
import { schemaCustomerForm } from './schema'

export type formCustomerProps = z.infer<typeof schemaCustomerForm>
