import { createSelector } from 'reselect';

const module = 'lifx';

export const lightById = (state, props) => state[module].light.byId[props.id];
export const groupById = (state, props) => state[module].group.byId[props.id];
export const locationById = (state, props) => state[module].location.byId[props.id];

export const allLights = (state) => state[module].light.all.map(lightId => lightById(state, { id: lightId }));

export const lightsByLocationId = createSelector(
    allLights,
    (state, props) => props.id,
    (lights, id) => {
        return lights.filter(light => light.location === id);
    }
);
export const lightsByGroupId = createSelector(
    allLights,
    (state, props) => props.id,
    (lights, id) => {
        return lights.filter(light => light.group === id);
    }
);

export const allGroups = (state) => state[module].group.all.map(groupId => ({
    ...groupById(state, { id: groupId }),
    lights: lightsByGroupId(state, { id: groupId }),
}));

export const allLocations = (state) => state[module].location.all.map(locationId => ({
    ...locationById(state, { id: locationId }),
    lights: lightsByLocationId(state, { id: locationId }),
}));