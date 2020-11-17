/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface ReportInstanceErrorDetails {
  code?: number;
  message?: string;
}

export const reportInstanceErrorDetailsSchema: Schema<ReportInstanceErrorDetails> = object(
  {
    code: ['code', optional(number()), { xmlName: 'Code' }],
    message: ['message', optional(string()), { xmlName: 'Message' }],
  }
);
