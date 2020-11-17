/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  UserActivityEventDetails,
  userActivityEventDetailsSchema,
} from './userActivityEventDetails';

export interface UserActivityEventDetailsResponse {
  payload?: UserActivityEventDetails;
}

export const userActivityEventDetailsResponseSchema: Schema<UserActivityEventDetailsResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => userActivityEventDetailsSchema)),
      { xmlName: 'UserActivityEventDetails' },
    ],
  }
);
