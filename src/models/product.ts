/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { ProductFeature, productFeatureSchema } from './productFeature';

export interface Product {
  name?: string;
  description?: string;
  managerFirstName?: string;
  managerLastName?: string;
  managerEmail?: string;
  features?: ProductFeature[];
}

export const productSchema: Schema<Product> = object({
  name: ['name', optional(string()), { xmlName: 'Name' }],
  description: ['description', optional(string()), { xmlName: 'Description' }],
  managerFirstName: [
    'managerFirstName',
    optional(string()),
    { xmlName: 'ProductManangerFirstName' },
  ],
  managerLastName: [
    'managerLastName',
    optional(string()),
    { xmlName: 'ProductManangerLastName' },
  ],
  managerEmail: [
    'managerEmail',
    optional(string()),
    { xmlName: 'ProductManangerEmail' },
  ],
  features: [
    'features',
    optional(
      array(lazy(() => productFeatureSchema), { xmlItemName: 'Feature' })
    ),
    { xmlName: 'Features' },
  ],
});
