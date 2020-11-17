/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, number, object, optional, Schema } from '../schema';
import { SipCredential, sipCredentialSchema } from './sipCredential';
import {
  SipCredentialError,
  sipCredentialErrorSchema,
} from './sipCredentialError';

export interface SipCredentialResponse {
  payload?: SipCredential;
  accountId?: number;
  error?: SipCredentialError;
}

export const sipCredentialResponseSchema: Schema<SipCredentialResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => sipCredentialSchema)),
      { xmlName: 'SipCredential' },
    ],
    accountId: ['accountId', optional(number()), { xmlName: 'AccountId' }],
    error: [
      'error',
      optional(lazy(() => sipCredentialErrorSchema)),
      { xmlName: 'Error' },
    ],
  }
);
