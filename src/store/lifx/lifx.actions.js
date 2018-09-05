import { GET_LIGHTS, SET_GROUP_BY_ID, SET_LIGHT_BY_ID, SET_LIGHTS, SET_LOCATION_BY_ID } from './lifx.constants';
import { normalizeGetLights } from './normalize/normalize';
import { createActions } from '../helpers/createActions';
import { createLifxAction } from './helpers/createLifxAction';

export function getLights() {
    return createLifxAction({
        actions: createActions(GET_LIGHTS),
        method: 'GET',
        url: '/lights/all',
        normalize: normalizeGetLights,
    })
}

export function setStateAll(payload) {
    return createLifxAction({
        actions: createActions(SET_LIGHTS),
        method: 'PUT',
        url: '/lights/all/state',
        data: {
            ...payload,
        },
    })
}

export function setStateBySelector(selector, payload, actions) {
    return createLifxAction({
        actions,
        method: 'PUT',
        url: `/lights/${selector}/state`,
        data: {
            ...payload,
        },
    })
}

export const setStateByLightId = (id, payload) => setStateBySelector(`id:${id}`, payload, createActions(SET_LIGHT_BY_ID));
export const setStateByGroupId = (id, payload) => setStateBySelector(`group_id:${id}`, payload, createActions(SET_GROUP_BY_ID));
export const setStateByLocationId = (id, payload) => setStateBySelector(`location_id:${id}`, payload, createActions(SET_LOCATION_BY_ID));