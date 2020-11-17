/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AddressErrorDescription,
  addressErrorDescriptionSchema,
} from './addressErrorDescription';
import { Site, siteSchema } from './site';

export interface SiteResponse {
  payload?: Site;
  addressErrorDescription?: AddressErrorDescription;
}

export const siteResponseSchema: Schema<SiteResponse> = object({
  payload: ['payload', optional(lazy(() => siteSchema)), { xmlName: 'Site' }],
  addressErrorDescription: [
    'addressErrorDescription',
    optional(lazy(() => addressErrorDescriptionSchema)),
    { xmlName: 'AddressErrorDescription' },
  ],
});
