/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, number, object, optional, Schema } from '../schema';

export interface AccountMmsFeatureSettings {
  mm4Enabled?: boolean;
  tollFreeMMSAllowed?: boolean;
  defaultProvider?: number;
  genDlr?: boolean;
  genReadReply?: boolean;
}

export const accountMmsFeatureSettingsSchema: Schema<AccountMmsFeatureSettings> = object(
  {
    mm4Enabled: ['mm4Enabled', optional(boolean()), { xmlName: 'MM4Enabled' }],
    tollFreeMMSAllowed: [
      'tollFreeMMSAllowed',
      optional(boolean()),
      { xmlName: 'TollFreeMMSAllowed' },
    ],
    defaultProvider: [
      'defaultProvider',
      optional(number()),
      { xmlName: 'DefaultProvider' },
    ],
    genDlr: ['genDlr', optional(boolean()), { xmlName: 'GenDlr' }],
    genReadReply: [
      'genReadReply',
      optional(boolean()),
      { xmlName: 'GenReadReply' },
    ],
  }
);
