/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface Country {
  id?: number;
  name?: string;
  twoLetterCode?: string;
  threeLetterCode?: string;
  supported?: boolean;
}

export const countrySchema: Schema<Country> = object({
  id: ['id', optional(number()), { xmlName: 'Id' }],
  name: ['name', optional(string()), { xmlName: 'CountryName' }],
  twoLetterCode: [
    'twoLetterCode',
    optional(string()),
    { xmlName: 'TwoLetterCode' },
  ],
  threeLetterCode: [
    'threeLetterCode',
    optional(string()),
    { xmlName: 'ThreeLetterCode' },
  ],
  supported: ['supported', optional(boolean()), { xmlName: 'Supported' }],
});
