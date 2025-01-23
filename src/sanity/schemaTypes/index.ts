import { type SchemaTypeDefinition } from 'sanity'

import { productSchema } from '../product'
import { categorySchema } from '../category'
import shipment from '../shipment'
import customer from '../customer'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,categorySchema,shipment,customer],
}
