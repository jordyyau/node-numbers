/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Payload1, payload1Schema } from './payload1';

export interface TerminationCustomerProductAssignmentsResponse {
  payload?: Payload1;
}

export const terminationCustomerProductAssignmentsResponseSchema: Schema<TerminationCustomerProductAssignmentsResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => payload1Schema)),
      { xmlName: 'TerminationProducts' },
    ],
  }
);
