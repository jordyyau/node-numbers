/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface BillingReportRetrievalResponse {
  reportStatus?: string;
  description?: string;
}

export const billingReportRetrievalResponseSchema: Schema<BillingReportRetrievalResponse> = object(
  {
    reportStatus: [
      'reportStatus',
      optional(string()),
      { xmlName: 'ReportStatus' },
    ],
    description: [
      'description',
      optional(string()),
      { xmlName: 'Description' },
    ],
  }
);
