/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface SbcNodeGroup {
  id?: number;
  link?: string;
  name?: string;
  nodes?: string[];
}

export const sbcNodeGroupSchema: Schema<SbcNodeGroup> = object({
  id: ['id', optional(number()), { xmlName: 'Id' }],
  link: ['link', optional(string()), { xmlName: 'Link' }],
  name: ['name', optional(string()), { xmlName: 'Name' }],
  nodes: [
    'nodes',
    optional(array(string(), { xmlItemName: 'Node' })),
    { xmlName: 'Nodes' },
  ],
});
