/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { LdapPermission, ldapPermissionSchema } from './ldapPermission';

export interface LdapPermissions {
  ldapPermissions?: LdapPermission[];
}

export const ldapPermissionsSchema: Schema<LdapPermissions> = object({
  ldapPermissions: [
    'ldapPermissions',
    optional(array(lazy(() => ldapPermissionSchema))),
    { xmlName: 'Permission' },
  ],
});
