/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface PaginationLinks {
  first?: string;
  next?: string;
  previous?: string;
  last?: string;
}

export const paginationLinksSchema: Schema<PaginationLinks> = object({
  first: ['first', optional(string())],
  next: ['next', optional(string())],
  previous: ['previous', optional(string())],
  last: ['last', optional(string())],
});
