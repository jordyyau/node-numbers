/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  PortinLosingCarrierInfo,
  portinLosingCarrierInfoSchema,
} from './portinLosingCarrierInfo';

export interface PortinLosingCarrierResponse {
  payload?: PortinLosingCarrierInfo;
}

export const portinLosingCarrierResponseSchema: Schema<PortinLosingCarrierResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => portinLosingCarrierInfoSchema)),
      { xmlName: 'LosingCarrier' },
    ],
  }
);
