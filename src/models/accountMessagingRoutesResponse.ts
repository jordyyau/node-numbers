/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { MessagingRoutes, messagingRoutesSchema } from './messagingRoutes';

export interface AccountMessagingRoutesResponse {
  payload?: MessagingRoutes;
}

export const accountMessagingRoutesResponseSchema: Schema<AccountMessagingRoutesResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => messagingRoutesSchema)),
      { xmlName: 'MessagingRoutes' },
    ],
  }
);
