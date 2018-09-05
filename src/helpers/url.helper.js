import { LightsSelectorMap, URL } from '../constants/url';

export const generateLightsURL = (type = 'all', value = '') => {
    const mappedValue = LightsSelectorMap[type] ? `${LightsSelectorMap[type]}:${value}` : type;
    return URL.LIGHTS.replace(':selector', mappedValue);
};
