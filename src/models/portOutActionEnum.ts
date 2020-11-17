/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PortOutActionEnum
 */
export enum PortOutActionEnum {
  NEW = 'NEW',
  SUPP = 'SUPP',
  MODIFY = 'MODIFY',
  CANCEL = 'CANCEL',
}

/**
 * Schema for PortOutActionEnum
 */
export const portOutActionEnumSchema: Schema<PortOutActionEnum> = stringEnum(PortOutActionEnum);
