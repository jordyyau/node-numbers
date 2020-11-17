/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TnMessagingTypeEnum
 */
export enum TnMessagingTypeEnum {
  ONNETTNS = 'ON_NET_TNS',
  OFFNETTNS = 'OFF_NET_TNS',
  OFFNETCATNS = 'OFF_NET_CA_TNS',
  EXTERNALCUSTOMEROWNEDTNS = 'EXTERNAL_CUSTOMER_OWNED_TNS',
  EXTERNALTHIRDPARTYTNS = 'EXTERNAL_THIRD_PARTY_TNS',
  EXTERNALCANADIANTNS = 'EXTERNAL_CANADIAN_TNS',
  TOLLFREETNS = 'TOLL_FREE_TNS',
  EXTERNALTOLLFREETNS = 'EXTERNAL_TOLL_FREE_TNS',
  A2PONNETTNS = 'A2P_ON_NET_TNS',
  A2POFFNETTNS = 'A2P_OFF_NET_TNS',
  INCORRECTVALUE = 'INCORRECT_VALUE',
}

/**
 * Schema for TnMessagingTypeEnum
 */
export const tnMessagingTypeEnumSchema: Schema<TnMessagingTypeEnum> = stringEnum(TnMessagingTypeEnum);
