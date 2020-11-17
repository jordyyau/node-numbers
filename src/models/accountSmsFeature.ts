/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AccountSmsFeatureSettings,
  accountSmsFeatureSettingsSchema,
} from './accountSmsFeatureSettings';
import { SmppSettings, smppSettingsSchema } from './smppSettings';

export interface AccountSmsFeature {
  smsFeatureSettings?: AccountSmsFeatureSettings;
  smppSettings?: SmppSettings;
}

export const accountSmsFeatureSchema: Schema<AccountSmsFeature> = object({
  smsFeatureSettings: [
    'smsFeatureSettings',
    optional(lazy(() => accountSmsFeatureSettingsSchema)),
    { xmlName: 'AccountSmsFeatureSettings' },
  ],
  smppSettings: [
    'smppSettings',
    optional(lazy(() => smppSettingsSchema)),
    { xmlName: 'SmppSettings' },
  ],
});
