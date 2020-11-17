/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Note, noteSchema } from './note';

export interface NoteResponse {
  payload?: Note;
}

export const noteResponseSchema: Schema<NoteResponse> = object({
  payload: ['payload', optional(lazy(() => noteSchema)), { xmlName: 'Note' }],
});
