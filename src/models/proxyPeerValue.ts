/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { ServiceTypeEnum, serviceTypeEnumSchema } from './serviceTypeEnum';

export interface ProxyPeerValue {
  name?: string;
  serviceType?: ServiceTypeEnum;
  proxyPeerId?: number;
}

export const proxyPeerValueSchema: Schema<ProxyPeerValue> = object({
  name: ['name', optional(string()), { xmlName: 'Name' }],
  serviceType: [
    'serviceType',
    optional(serviceTypeEnumSchema),
    { xmlName: 'Service' },
  ],
  proxyPeerId: ['proxyPeerId', optional(number()), { xmlName: 'ProxyPeerId' }],
});
