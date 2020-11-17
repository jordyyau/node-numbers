/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProtocolEnum
 */
export enum ProtocolEnum {
  SIP = 'SIP',
  SMPP = 'SMPP',
  HTTP = 'HTTP',
}

/**
 * Schema for ProtocolEnum
 */
export const protocolEnumSchema: Schema<ProtocolEnum> = stringEnum(ProtocolEnum);
