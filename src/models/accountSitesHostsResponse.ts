/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AccountSitesHosts,
  accountSitesHostsSchema,
} from './accountSitesHosts';

export interface AccountSitesHostsResponse {
  payload?: AccountSitesHosts;
}

export const accountSitesHostsResponseSchema: Schema<AccountSitesHostsResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => accountSitesHostsSchema)),
      { xmlName: 'SiteHosts' },
    ],
  }
);
