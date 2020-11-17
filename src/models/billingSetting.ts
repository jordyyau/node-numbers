/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Key, keySchema } from './key';
import { Value, valueSchema } from './value';

export interface BillingSetting {
  key?: Key;
  values?: Value[];
}

export const billingSettingSchema: Schema<BillingSetting> = object({
  key: ['key', optional(lazy(() => keySchema)), { xmlName: 'Key' }],
  values: [
    'values',
    optional(array(lazy(() => valueSchema), { xmlItemName: 'Value' })),
    { xmlName: 'Values' },
  ],
});
