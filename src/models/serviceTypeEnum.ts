/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ServiceTypeEnum
 */
export enum ServiceTypeEnum {
  HTTPV1 = 'HTTPV1',
  HTTPV2 = 'HTTPV2',
}

/**
 * Schema for ServiceTypeEnum
 */
export const serviceTypeEnumSchema: Schema<ServiceTypeEnum> = stringEnum(ServiceTypeEnum);
