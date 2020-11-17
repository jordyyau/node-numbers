/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  EepToEngAssociationsPayload,
  eepToEngAssociationsPayloadSchema,
} from './eepToEngAssociationsPayload';
import {
  EmergencyNotificationRecipientsPayload,
  emergencyNotificationRecipientsPayloadSchema,
} from './emergencyNotificationRecipientsPayload';

export interface EmergencyNotificationGroupPayload {
  identifier?: string;
  createdDate?: string;
  modifiedBy?: string;
  modifiedDate?: string;
  description?: string;
  emergencyNotificationRecipients?: EmergencyNotificationRecipientsPayload;
  eepToEngAssociations?: EepToEngAssociationsPayload;
}

export const emergencyNotificationGroupPayloadSchema: Schema<EmergencyNotificationGroupPayload> = object(
  {
    identifier: ['identifier', optional(string()), { xmlName: 'Identifier' }],
    createdDate: [
      'createdDate',
      optional(string()),
      { xmlName: 'CreatedDate' },
    ],
    modifiedBy: ['modifiedBy', optional(string()), { xmlName: 'ModifiedBy' }],
    modifiedDate: [
      'modifiedDate',
      optional(string()),
      { xmlName: 'ModifiedDate' },
    ],
    description: [
      'description',
      optional(string()),
      { xmlName: 'Description' },
    ],
    emergencyNotificationRecipients: [
      'emergencyNotificationRecipients',
      optional(lazy(() => emergencyNotificationRecipientsPayloadSchema)),
      { xmlName: 'EmergencyNotificationRecipients' },
    ],
    eepToEngAssociations: [
      'eepToEngAssociations',
      optional(lazy(() => eepToEngAssociationsPayloadSchema)),
      { xmlName: 'EepToEngAssociations' },
    ],
  }
);
