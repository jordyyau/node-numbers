/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';
import { UseTypeEnum, useTypeEnumSchema } from './useTypeEnum';
import { VisibilityEnum, visibilityEnumSchema } from './visibilityEnum';

export interface LidbDetailTnGroup {
  fullNumbers?: string[];
  subscriberInformation?: string;
  useType?: UseTypeEnum;
  visibility?: VisibilityEnum;
}

export const lidbDetailTnGroupSchema: Schema<LidbDetailTnGroup> = object({
  fullNumbers: [
    'fullNumbers',
    optional(array(string(), { xmlItemName: 'TelephoneNumber' })),
    { xmlName: 'TelephoneNumbers' },
  ],
  subscriberInformation: [
    'subscriberInformation',
    optional(string()),
    { xmlName: 'SubscriberInformation' },
  ],
  useType: ['useType', optional(useTypeEnumSchema), { xmlName: 'UseType' }],
  visibility: [
    'visibility',
    optional(visibilityEnumSchema),
    { xmlName: 'Visibility' },
  ],
});
