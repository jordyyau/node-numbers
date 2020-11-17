/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface TelephoneNumbersAssignmentOrderPayload {
  customerOrderId?: string;
  telephoneNumbers?: string[];
  action?: string;
}

export const telephoneNumbersAssignmentOrderPayloadSchema: Schema<TelephoneNumbersAssignmentOrderPayload> = object(
  {
    customerOrderId: [
      'customerOrderId',
      optional(string()),
      { xmlName: 'CustomerOrderId' },
    ],
    telephoneNumbers: [
      'telephoneNumbers',
      optional(array(string(), { xmlItemName: 'TelephoneNumber' })),
      { xmlName: 'TelephoneNumbers' },
    ],
    action: ['action', optional(string()), { xmlName: 'Action' }],
  }
);
