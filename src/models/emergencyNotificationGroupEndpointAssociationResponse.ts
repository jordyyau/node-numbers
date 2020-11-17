/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  EmergencyNotificationGroupEndpointAssociationPayload,
  emergencyNotificationGroupEndpointAssociationPayloadSchema,
} from './emergencyNotificationGroupEndpointAssociationPayload';

export interface EmergencyNotificationGroupEndpointAssociationResponse {
  payload?: EmergencyNotificationGroupEndpointAssociationPayload;
}

export const emergencyNotificationGroupEndpointAssociationResponseSchema: Schema<EmergencyNotificationGroupEndpointAssociationResponse> = object(
  {
    payload: [
      'payload',
      optional(
        lazy(() => emergencyNotificationGroupEndpointAssociationPayloadSchema)
      ),
      { xmlName: 'EmergencyNotificationEndpointOrder' },
    ],
  }
);
