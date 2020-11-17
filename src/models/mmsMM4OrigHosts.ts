/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { MmsMM4OrigHost, mmsMM4OrigHostSchema } from './mmsMM4OrigHost';

export interface MmsMM4OrigHosts {
  hosts?: MmsMM4OrigHost[];
}

export const mmsMM4OrigHostsSchema: Schema<MmsMM4OrigHosts> = object({
  hosts: [
    'hosts',
    optional(
      array(lazy(() => mmsMM4OrigHostSchema), { xmlItemName: 'origHost' })
    ),
    { xmlName: 'OrigHosts' },
  ],
});
