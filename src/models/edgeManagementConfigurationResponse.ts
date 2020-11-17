/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  EdgeManagementConfigurationPayload,
  edgeManagementConfigurationPayloadSchema,
} from './edgeManagementConfigurationPayload';

export interface EdgeManagementConfigurationResponse {
  payload?: EdgeManagementConfigurationPayload;
}

export const edgeManagementConfigurationResponseSchema: Schema<EdgeManagementConfigurationResponse> = object(
  {
    payload: [
      'payload',
      optional(lazy(() => edgeManagementConfigurationPayloadSchema)),
      { xmlName: 'EdgeManagementSettings' },
    ],
  }
);
