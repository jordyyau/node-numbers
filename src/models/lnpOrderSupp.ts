/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { PhoneNumberList, phoneNumberListSchema } from './phoneNumberList';
import {
  ProcessingStatus4Enum,
  processingStatus4EnumSchema,
} from './processingStatus4Enum';
import { Subscriber, subscriberSchema } from './subscriber';
import { WirelessInfo, wirelessInfoSchema } from './wirelessInfo';

export interface LnpOrderSupp {
  customerOrderId?: string;
  processingStatus?: ProcessingStatus4Enum;
  billingTelephoneNumber?: string;
  newBillingTelephoneNumber?: string;
  wirelessInfo?: WirelessInfo;
  requestedFocDateStr?: string;
  subscriber?: Subscriber;
  peerId?: string;
  partialPort?: string;
  loaAuthorizingPerson?: string;
  immediately?: boolean;
  triggered?: boolean;
  billingType?: string;
  autoActivationType?: string;
  tnAttributes?: string[];
  overrideValidation?: boolean;
  alternateSpid?: string;
  siteId?: number;
  actualFocDate?: string;
  numbersToPort?: PhoneNumberList;
}

export const lnpOrderSuppSchema: Schema<LnpOrderSupp> = object({
  customerOrderId: [
    'customerOrderId',
    optional(string()),
    { xmlName: 'CustomerOrderId' },
  ],
  processingStatus: [
    'processingStatus',
    optional(processingStatus4EnumSchema),
    { xmlName: 'ProcessingStatus' },
  ],
  billingTelephoneNumber: [
    'billingTelephoneNumber',
    optional(string()),
    { xmlName: 'BillingTelephoneNumber' },
  ],
  newBillingTelephoneNumber: [
    'newBillingTelephoneNumber',
    optional(string()),
    { xmlName: 'NewBillingTelephoneNumber' },
  ],
  wirelessInfo: [
    'wirelessInfo',
    optional(lazy(() => wirelessInfoSchema)),
    { xmlName: 'WirelessInfo' },
  ],
  requestedFocDateStr: [
    'requestedFocDateStr',
    optional(string()),
    { xmlName: 'RequestedFocDate' },
  ],
  subscriber: [
    'subscriber',
    optional(lazy(() => subscriberSchema)),
    { xmlName: 'Subscriber' },
  ],
  peerId: ['peerId', optional(string()), { xmlName: 'PeerId' }],
  partialPort: ['partialPort', optional(string()), { xmlName: 'PartialPort' }],
  loaAuthorizingPerson: [
    'loaAuthorizingPerson',
    optional(string()),
    { xmlName: 'LoaAuthorizingPerson' },
  ],
  immediately: ['immediately', optional(boolean()), { xmlName: 'Immediately' }],
  triggered: ['triggered', optional(boolean()), { xmlName: 'Triggered' }],
  billingType: ['billingType', optional(string()), { xmlName: 'BillingType' }],
  autoActivationType: [
    'autoActivationType',
    optional(string()),
    { xmlName: 'AutoActivation' },
  ],
  tnAttributes: [
    'tnAttributes',
    optional(array(string(), { xmlItemName: 'TnAttribute' })),
    { xmlName: 'TnAttributes' },
  ],
  overrideValidation: [
    'overrideValidation',
    optional(boolean()),
    { xmlName: 'OverrideValidation' },
  ],
  alternateSpid: [
    'alternateSpid',
    optional(string()),
    { xmlName: 'AlternateSpid' },
  ],
  siteId: ['siteId', optional(number()), { xmlName: 'SiteId' }],
  actualFocDate: [
    'actualFocDate',
    optional(string()),
    { xmlName: 'ActualFocDate' },
  ],
  numbersToPort: [
    'numbersToPort',
    optional(lazy(() => phoneNumberListSchema)),
    { xmlName: 'ListOfPhoneNumbers' },
  ],
});
