/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { DatePatch, datePatchSchema } from './datePatch';
import { IntPatch, intPatchSchema } from './intPatch';
import {
  ProcessingStatusPatch,
  processingStatusPatchSchema,
} from './processingStatusPatch';
import { StringPatch, stringPatchSchema } from './stringPatch';
import { SubscriberPatch, subscriberPatchSchema } from './subscriberPatch';
import {
  TnAttributesPatch,
  tnAttributesPatchSchema,
} from './tnAttributesPatch';

export interface BulkPortinPatch {
  customerOrderId?: StringPatch;
  requestedFocDate?: DatePatch;
  alternateSpid?: StringPatch;
  billingTelephoneNumber?: StringPatch;
  subscriber?: SubscriberPatch;
  loaAuthorizingPerson?: StringPatch;
  accountNumber?: StringPatch;
  pinNumber?: StringPatch;
  siteId?: IntPatch;
  peerId?: IntPatch;
  processingStatus?: ProcessingStatusPatch;
  tnAttributes?: TnAttributesPatch;
}

export const bulkPortinPatchSchema: Schema<BulkPortinPatch> = object({
  customerOrderId: [
    'customerOrderId',
    optional(lazy(() => stringPatchSchema)),
    { xmlName: 'CustomerOrderId' },
  ],
  requestedFocDate: [
    'requestedFocDate',
    optional(lazy(() => datePatchSchema)),
    { xmlName: 'RequestedFocDate' },
  ],
  alternateSpid: [
    'alternateSpid',
    optional(lazy(() => stringPatchSchema)),
    { xmlName: 'AlternateSpid' },
  ],
  billingTelephoneNumber: [
    'billingTelephoneNumber',
    optional(lazy(() => stringPatchSchema)),
    { xmlName: 'BillingTelephoneNumber' },
  ],
  subscriber: [
    'subscriber',
    optional(lazy(() => subscriberPatchSchema)),
    { xmlName: 'Subscriber' },
  ],
  loaAuthorizingPerson: [
    'loaAuthorizingPerson',
    optional(lazy(() => stringPatchSchema)),
    { xmlName: 'LoaAuthorizingPerson' },
  ],
  accountNumber: [
    'accountNumber',
    optional(lazy(() => stringPatchSchema)),
    { xmlName: 'AccountNumber' },
  ],
  pinNumber: [
    'pinNumber',
    optional(lazy(() => stringPatchSchema)),
    { xmlName: 'PinNumber' },
  ],
  siteId: [
    'siteId',
    optional(lazy(() => intPatchSchema)),
    { xmlName: 'SiteId' },
  ],
  peerId: [
    'peerId',
    optional(lazy(() => intPatchSchema)),
    { xmlName: 'PeerId' },
  ],
  processingStatus: [
    'processingStatus',
    optional(lazy(() => processingStatusPatchSchema)),
    { xmlName: 'ProcessingStatus' },
  ],
  tnAttributes: [
    'tnAttributes',
    optional(lazy(() => tnAttributesPatchSchema)),
    { xmlName: 'TnAttributes' },
  ],
});
