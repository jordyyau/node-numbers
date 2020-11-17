/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { LdapRole, ldapRoleSchema } from './ldapRole';

export interface LdapRoleResponse {
  payload?: LdapRole;
}

export const ldapRoleResponseSchema: Schema<LdapRoleResponse> = object({
  payload: [
    'payload',
    optional(lazy(() => ldapRoleSchema)),
    { xmlName: 'Role' },
  ],
});
