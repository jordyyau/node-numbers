/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface SipCredential {
  userName?: string;
  domain?: string;
  hash1?: string;
  hash1b?: string;
}

export const sipCredentialSchema: Schema<SipCredential> = object({
  userName: ['userName', optional(string()), { xmlName: 'UserName' }],
  domain: ['domain', optional(string()), { xmlName: 'Domain' }],
  hash1: ['hash1', optional(string()), { xmlName: 'Hash1' }],
  hash1b: ['hash1b', optional(string()), { xmlName: 'Hash1b' }],
});
