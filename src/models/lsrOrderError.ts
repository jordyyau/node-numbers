/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface LsrOrderError {
  code?: number;
  description?: string;
}

export const lsrOrderErrorSchema: Schema<LsrOrderError> = object({
  code: ['code', optional(number()), { xmlName: 'Code' }],
  description: ['description', optional(string()), { xmlName: 'Description' }],
});
