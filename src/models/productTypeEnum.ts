/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProductTypeEnum
 */
export enum ProductTypeEnum {
  Origination = 'Origination',
  Termination = 'Termination',
  MESSAGING = 'MESSAGING',
  E911 = 'E911',
  TollFree = 'TollFree',
  UcTrunking = 'UcTrunking',
  EdgeManagement = 'EdgeManagement',
  CORE = 'CORE',
  Iris = 'Iris',
  NumberManagement = 'NumberManagement',
  Analytics = 'Analytics',
}

/**
 * Schema for ProductTypeEnum
 */
export const productTypeEnumSchema: Schema<ProductTypeEnum> = stringEnum(ProductTypeEnum);
