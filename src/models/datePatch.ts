/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface DatePatch {
  delete?: boolean;
}

export const datePatchSchema: Schema<DatePatch> = object({
  delete: ['delete', optional(boolean()), { isAttr: true }],
});
