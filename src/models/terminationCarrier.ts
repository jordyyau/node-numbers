/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface TerminationCarrier {
  carriername?: string;
  description?: string;
  profileId?: number;
  gatewayId?: number;
  carrierId?: number;
  maskPosition?: number;
}

export const terminationCarrierSchema: Schema<TerminationCarrier> = object({
  carriername: ['carriername', optional(string())],
  description: ['description', optional(string())],
  profileId: ['profileId', optional(number())],
  gatewayId: ['gatewayId', optional(number())],
  carrierId: ['carrierId', optional(number())],
  maskPosition: ['maskPosition', optional(number())],
});
