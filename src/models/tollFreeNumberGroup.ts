/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface TollFreeNumberGroup {
  telephoneNumbers?: string[];
}

export const tollFreeNumberGroupSchema: Schema<TollFreeNumberGroup> = object({
  telephoneNumbers: [
    'telephoneNumbers',
    optional(array(string(), { xmlItemName: 'Tn' })),
    { xmlName: 'TnList' },
  ],
});
