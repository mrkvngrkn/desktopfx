import { normalize } from 'normalizr';
import { light as lightSchema } from './schema';

const splitEntity = (entity) => ({
    byId: entity,
    all: Object.keys(entity),
});

const enrichLightsRaw = (lightsRaw) => {
    return lightsRaw.map(light => {
        return {
            ...light,
            isOn: light.power === 'on'
        }
    });
};

export const normalizeGetLights = (lightsRaw) => {
    const { entities: { group, light, location }} = normalize(enrichLightsRaw(lightsRaw), [lightSchema]);
    return {
        group: splitEntity(group),
        light: splitEntity(light),
        location: splitEntity(location),
    };
};