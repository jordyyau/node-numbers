/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { ResponseStatus, responseStatusSchema } from './responseStatus';

export interface AdminDataResponse {
  responseStatus?: ResponseStatus;
}

export const adminDataResponseSchema: Schema<AdminDataResponse> = object({
  responseStatus: [
    'responseStatus',
    optional(lazy(() => responseStatusSchema)),
    { xmlName: 'ResponseStatus' },
  ],
});
