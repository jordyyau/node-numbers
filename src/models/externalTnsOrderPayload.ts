/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Status2Enum, status2EnumSchema } from './status2Enum';
import {
  TelephoneNumberGroupError,
  telephoneNumberGroupErrorSchema,
} from './telephoneNumberGroupError';

export interface ExternalTnsOrderPayload {
  id?: string;
  accountId?: number;
  name?: string;
  lastModifiedDateInUtc?: string;
  lastModifiedBy?: string;
  createdByUser?: string;
  customerOrderId?: string;
  siteId?: number;
  peerId?: number;
  orderCreateDate?: string;
  telephoneNumbers?: string[];
  action?: string;
  status?: Status2Enum;
  errors?: TelephoneNumberGroupError[];
  loaType?: string;
  sipPeerId?: number;
}

export const externalTnsOrderPayloadSchema: Schema<ExternalTnsOrderPayload> = object(
  {
    id: ['id', optional(string()), { xmlName: 'OrderId' }],
    accountId: ['accountId', optional(number()), { xmlName: 'AccountId' }],
    name: ['name', optional(string()), { xmlName: 'Name' }],
    lastModifiedDateInUtc: [
      'lastModifiedDateInUtc',
      optional(string()),
      { xmlName: 'LastModifiedDate' },
    ],
    lastModifiedBy: [
      'lastModifiedBy',
      optional(string()),
      { xmlName: 'LastModifiedBy' },
    ],
    createdByUser: [
      'createdByUser',
      optional(string()),
      { xmlName: 'CreatedByUser' },
    ],
    customerOrderId: [
      'customerOrderId',
      optional(string()),
      { xmlName: 'CustomerOrderId' },
    ],
    siteId: ['siteId', optional(number()), { xmlName: 'SiteId' }],
    peerId: ['peerId', optional(number()), { xmlName: 'PeerId' }],
    orderCreateDate: [
      'orderCreateDate',
      optional(string()),
      { xmlName: 'OrderCreateDate' },
    ],
    telephoneNumbers: [
      'telephoneNumbers',
      optional(array(string(), { xmlItemName: 'TelephoneNumber' })),
      { xmlName: 'TelephoneNumbers' },
    ],
    action: ['action', optional(string()), { xmlName: 'Action' }],
    status: [
      'status',
      optional(status2EnumSchema),
      { xmlName: 'ProcessingStatus' },
    ],
    errors: [
      'errors',
      optional(
        array(
          lazy(() => telephoneNumberGroupErrorSchema),
          { xmlItemName: 'Error' }
        )
      ),
      { xmlName: 'Errors' },
    ],
    loaType: ['loaType', optional(string()), { xmlName: 'LoaType' }],
    sipPeerId: ['sipPeerId', optional(number()), { xmlName: 'SipPeerId' }],
  }
);
