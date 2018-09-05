import { schema } from 'normalizr';

export const location = new schema.Entity('location');

export const group = new schema.Entity('group');

export const light = new schema.Entity('light', {
    group,
    location,
});