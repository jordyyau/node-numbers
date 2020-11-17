/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  TerminationRateDeckAssignment,
  terminationRateDeckAssignmentSchema,
} from './terminationRateDeckAssignment';

export interface TerminationRateDeckAssignmentUtilityResponse {
  payload?: TerminationRateDeckAssignment;
}

export const terminationRateDeckAssignmentUtilityResponseSchema: Schema<TerminationRateDeckAssignmentUtilityResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => terminationRateDeckAssignmentSchema)),
      { xmlName: 'TerminationRateDeckAssignment' },
    ],
  }
);
