/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { LdapRole, ldapRoleSchema } from './ldapRole';

export interface LdapRolePermissionXrefResponse {
  payload?: LdapRole;
}

export const ldapRolePermissionXrefResponseSchema: Schema<LdapRolePermissionXrefResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => ldapRoleSchema)),
      { xmlName: 'Role' },
    ],
  }
);
