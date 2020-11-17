/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { CallbackPayload, callbackPayloadSchema } from './callbackPayload';

export interface EmergencyNotificationRecipientPayload {
  identifier?: string;
  description?: string;
  type?: string;
  email?: string;
  sms?: string[];
  tts?: string[];
  callback?: CallbackPayload;
}

export const emergencyNotificationRecipientPayloadSchema: Schema<EmergencyNotificationRecipientPayload> = object(
  {
    identifier: ['identifier', optional(string()), { xmlName: 'Identifier' }],
    description: [
      'description',
      optional(string()),
      { xmlName: 'Description' },
    ],
    type: ['type', optional(string()), { xmlName: 'Type' }],
    email: ['email', optional(string()), { xmlName: 'EmailAddress' }],
    sms: [
      'sms',
      optional(array(string(), { xmlItemName: 'TelephoneNumber' })),
      { xmlName: 'Sms' },
    ],
    tts: [
      'tts',
      optional(array(string(), { xmlItemName: 'TelephoneNumber' })),
      { xmlName: 'Tts' },
    ],
    callback: [
      'callback',
      optional(lazy(() => callbackPayloadSchema)),
      { xmlName: 'Callback' },
    ],
  }
);
