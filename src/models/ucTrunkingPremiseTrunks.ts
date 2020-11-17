/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface UcTrunkingPremiseTrunks {
  premiseTrunks?: number;
}

export const ucTrunkingPremiseTrunksSchema: Schema<UcTrunkingPremiseTrunks> = object(
  {
    premiseTrunks: [
      'premiseTrunks',
      optional(number()),
      { xmlName: 'BiDirectionalTrunks' },
    ],
  }
);
