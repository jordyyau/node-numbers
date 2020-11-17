/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface SipSigPort {
  index?: number;
  portNumber?: number;
}

export const sipSigPortSchema: Schema<SipSigPort> = object({
  index: ['index', optional(number()), { xmlName: 'Index' }],
  portNumber: ['portNumber', optional(number()), { xmlName: 'PortNumber' }],
});
