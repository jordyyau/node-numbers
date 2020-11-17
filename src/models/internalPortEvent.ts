/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { BulkPortout, bulkPortoutSchema } from './bulkPortout';
import {
  ProcessingStatus9Enum,
  processingStatus9EnumSchema,
} from './processingStatus9Enum';
import { Status, statusSchema } from './status';

export interface InternalPortEvent {
  status?: Status;
  processingStatus?: ProcessingStatus9Enum;
  errors?: string[];
  bulkPortOut?: BulkPortout;
}

export const internalPortEventSchema: Schema<InternalPortEvent> = object({
  status: ['status', optional(lazy(() => statusSchema)), { xmlName: 'Status' }],
  processingStatus: [
    'processingStatus',
    optional(processingStatus9EnumSchema),
    { xmlName: 'ProcessingStatus' },
  ],
  errors: [
    'errors',
    optional(array(string(), { xmlItemName: 'Error' })),
    { xmlName: 'ProcessingErrors' },
  ],
  bulkPortOut: [
    'bulkPortOut',
    optional(lazy(() => bulkPortoutSchema)),
    { xmlName: 'BulkPortOut' },
  ],
});
