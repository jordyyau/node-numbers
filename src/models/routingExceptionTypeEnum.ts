/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RoutingExceptionTypeEnum
 */
export enum RoutingExceptionTypeEnum {
  BLOCK = 'BLOCK',
}

/**
 * Schema for RoutingExceptionTypeEnum
 */
export const routingExceptionTypeEnumSchema: Schema<RoutingExceptionTypeEnum> = stringEnum(RoutingExceptionTypeEnum);
