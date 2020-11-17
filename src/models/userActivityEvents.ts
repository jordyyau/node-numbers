/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  UserActivityEvent,
  userActivityEventSchema,
} from './userActivityEvent';

export interface UserActivityEvents {
  userActivityEvents?: UserActivityEvent[];
}

export const userActivityEventsSchema: Schema<UserActivityEvents> = object({
  userActivityEvents: [
    'userActivityEvents',
    optional(array(lazy(() => userActivityEventSchema))),
    { xmlName: 'UserEvent' },
  ],
});
