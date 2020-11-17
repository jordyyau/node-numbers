/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AssociatedSipPeers,
  associatedSipPeersSchema,
} from './associatedSipPeers';

export interface AssociatedSipPeersResponse {
  payload?: AssociatedSipPeers;
}

export const associatedSipPeersResponseSchema: Schema<AssociatedSipPeersResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => associatedSipPeersSchema)),
      { xmlName: 'AssociatedSipPeers' },
    ],
  }
);
