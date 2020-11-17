/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  TerminationRoutingException,
  terminationRoutingExceptionSchema,
} from './terminationRoutingException';

export interface TerminationRoutingExceptionMetadataResponse {
  payload?: TerminationRoutingException;
}

export const terminationRoutingExceptionMetadataResponseSchema: Schema<TerminationRoutingExceptionMetadataResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => terminationRoutingExceptionSchema)),
      { xmlName: 'TerminationRoutingException' },
    ],
  }
);
