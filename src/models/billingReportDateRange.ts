/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface BillingReportDateRange {
  startDate?: string;
  endDate?: string;
}

export const billingReportDateRangeSchema: Schema<BillingReportDateRange> = object(
  {
    startDate: ['startDate', optional(string()), { xmlName: 'StartDate' }],
    endDate: ['endDate', optional(string()), { xmlName: 'EndDate' }],
  }
);
