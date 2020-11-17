/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface LdapPermission {
  permissionId?: string;
  description?: string;
  internal?: boolean;
}

export const ldapPermissionSchema: Schema<LdapPermission> = object({
  permissionId: [
    'permissionId',
    optional(string()),
    { xmlName: 'PermissionId' },
  ],
  description: [
    'description',
    optional(string()),
    { xmlName: 'PermissionDescription' },
  ],
  internal: ['internal', optional(boolean()), { xmlName: 'Internal' }],
});
