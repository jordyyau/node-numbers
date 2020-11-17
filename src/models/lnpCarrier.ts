/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface LnpCarrier {
  spid?: string;
  name?: string;
  portOutMinimumDays?: number;
  l3PortOutMinimumDays?: number;
  vendorId?: number;
  onNetTnThreshold?: number;
}

export const lnpCarrierSchema: Schema<LnpCarrier> = object({
  spid: ['spid', optional(string()), { xmlName: 'Spid' }],
  name: ['name', optional(string()), { xmlName: 'Name' }],
  portOutMinimumDays: [
    'portOutMinimumDays',
    optional(number()),
    { xmlName: 'PortOutMinDays' },
  ],
  l3PortOutMinimumDays: [
    'l3PortOutMinimumDays',
    optional(number()),
    { xmlName: 'L3PortOutMinDays' },
  ],
  vendorId: ['vendorId', optional(number()), { xmlName: 'VendorId' }],
  onNetTnThreshold: [
    'onNetTnThreshold',
    optional(number()),
    { xmlName: 'MaxTnsPerAutomatedPort' },
  ],
});
