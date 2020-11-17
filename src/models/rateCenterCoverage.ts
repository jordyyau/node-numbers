/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface RateCenterCoverage {
  vendorId?: number;
  rcAbbreviation?: string;
  rcState?: string;
  tierId?: number;
  rcSupportsLnp?: boolean;
  rcSupportsNewTns?: boolean;
  lrn?: string;
  rcLata?: string;
}

export const rateCenterCoverageSchema: Schema<RateCenterCoverage> = object({
  vendorId: ['vendorId', optional(number()), { xmlName: 'VendorId' }],
  rcAbbreviation: [
    'rcAbbreviation',
    optional(string()),
    { xmlName: 'Abbreviation' },
  ],
  rcState: ['rcState', optional(string()), { xmlName: 'Region' }],
  tierId: ['tierId', optional(number()), { xmlName: 'TierId' }],
  rcSupportsLnp: [
    'rcSupportsLnp',
    optional(boolean()),
    { xmlName: 'SupportsLnp' },
  ],
  rcSupportsNewTns: [
    'rcSupportsNewTns',
    optional(boolean()),
    { xmlName: 'SupportsNewTns' },
  ],
  lrn: ['lrn', optional(string()), { xmlName: 'Lrn' }],
  rcLata: ['rcLata', optional(string()), { xmlName: 'Lata' }],
});
