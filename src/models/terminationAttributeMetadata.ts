/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import {
  array,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AttributeProvisionTypeEnum,
  attributeProvisionTypeEnumSchema,
} from './attributeProvisionTypeEnum';
import { OriginEnum, originEnumSchema } from './originEnum';
import {
  ValidationTypeEnum,
  validationTypeEnumSchema,
} from './validationTypeEnum';

export interface TerminationAttributeMetadata {
  id?: number;
  name?: string;
  validationType?: ValidationTypeEnum;
  attributeProvisionTypes?: AttributeProvisionTypeEnum[];
  origin?: OriginEnum;
  repeatable?: boolean;
  values?: string[];
}

export const terminationAttributeMetadataSchema: Schema<TerminationAttributeMetadata> = object(
  {
    id: ['id', optional(number())],
    name: ['name', optional(string())],
    validationType: ['validationType', optional(validationTypeEnumSchema)],
    attributeProvisionTypes: [
      'attributeProvisionTypes',
      optional(
        array(
          attributeProvisionTypeEnumSchema,
          { xmlItemName: 'attributeProvisionTypes' }
        )
      ),
    ],
    origin: ['origin', optional(originEnumSchema)],
    repeatable: ['repeatable', optional(boolean())],
    values: ['values', optional(array(string(), { xmlItemName: 'value' }))],
  }
);
