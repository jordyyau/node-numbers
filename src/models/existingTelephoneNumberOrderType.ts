/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface ExistingTelephoneNumberOrderType {
  telephoneNumbers?: string[];
  reservationIds?: string[];
}

export const existingTelephoneNumberOrderTypeSchema: Schema<ExistingTelephoneNumberOrderType> = object(
  {
    telephoneNumbers: [
      'telephoneNumbers',
      optional(array(string(), { xmlItemName: 'TelephoneNumber' })),
      { xmlName: 'TelephoneNumberList' },
    ],
    reservationIds: [
      'reservationIds',
      optional(array(string(), { xmlItemName: 'ReservationId' })),
      { xmlName: 'ReservationIdList' },
    ],
  }
);
