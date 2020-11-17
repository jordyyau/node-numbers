/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { TelephoneNumber, telephoneNumberSchema } from './telephoneNumber';

export interface TnOptions {
  numberFormat?: string;
  rpidFormat?: string;
  rewriteUser?: string;
  callForward?: TelephoneNumber;
  finalDestinationUri?: string;
  cnamLookup?: string;
  portOutPasscode?: string;
}

export const tnOptionsSchema: Schema<TnOptions> = object({
  numberFormat: [
    'numberFormat',
    optional(string()),
    { xmlName: 'NumberFormat' },
  ],
  rpidFormat: ['rpidFormat', optional(string()), { xmlName: 'RPIDFormat' }],
  rewriteUser: ['rewriteUser', optional(string()), { xmlName: 'RewriteUser' }],
  callForward: [
    'callForward',
    optional(lazy(() => telephoneNumberSchema)),
    { xmlName: 'CallForward' },
  ],
  finalDestinationUri: [
    'finalDestinationUri',
    optional(string()),
    { xmlName: 'FinalDestinationURI' },
  ],
  cnamLookup: [
    'cnamLookup',
    optional(string()),
    { xmlName: 'CallingNameDisplay' },
  ],
  portOutPasscode: [
    'portOutPasscode',
    optional(string()),
    { xmlName: 'PortOutPasscode' },
  ],
});
