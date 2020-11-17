/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProcessingStatus3Enum
 */
export enum ProcessingStatus3Enum {
  RECEIVED = 'RECEIVED',
  PROCESSING = 'PROCESSING',
  COMPLETE = 'COMPLETE',
  PARTIAL = 'PARTIAL',
  FAILED = 'FAILED',
  ADJUSTEDCOMPLETE = 'ADJUSTED_COMPLETE',
  ADJUSTEDPARTIAL = 'ADJUSTED_PARTIAL',
}

/**
 * Schema for ProcessingStatus3Enum
 */
export const processingStatus3EnumSchema: Schema<ProcessingStatus3Enum> = stringEnum(ProcessingStatus3Enum);
