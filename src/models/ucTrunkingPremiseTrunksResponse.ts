/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  UcTrunkingPremiseTrunks,
  ucTrunkingPremiseTrunksSchema,
} from './ucTrunkingPremiseTrunks';

export interface UcTrunkingPremiseTrunksResponse {
  payload?: UcTrunkingPremiseTrunks;
}

export const ucTrunkingPremiseTrunksResponseSchema: Schema<UcTrunkingPremiseTrunksResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => ucTrunkingPremiseTrunksSchema)),
      { xmlName: 'UcTrunkingPremiseSettings' },
    ],
  }
);
