/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AlternateEndUserIdentifier,
  alternateEndUserIdentifierSchema,
} from './alternateEndUserIdentifier';

export interface AlternateEndUserIdentifierResponse {
  payload?: AlternateEndUserIdentifier;
}

export const alternateEndUserIdentifierResponseSchema: Schema<AlternateEndUserIdentifierResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => alternateEndUserIdentifierSchema)),
      { xmlName: 'AlternateEndUserIdentifier' },
    ],
  }
);
