import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.lifx.com/v1',
    timeout: 10000,
});

export const createLifxAction = ({ actions, method, url, data, headers, normalize }) =>
    async (dispatch, getState) => {
        dispatch(actions.pending());

        const { registration: { key }} = getState();

        if (!key) {
            return dispatch(actions.error({ error: { message: 'No API key registered' } }));
        }

        try {
            const headerWithKey = {
                ...headers,
                'Authorization': `Bearer ${key}`,
            };
            const response = await instance.request({ url, method, data, headers: headerWithKey });
            const normalizedResponse = normalize ? normalize(response.data) : response.data;
            return dispatch(actions.success(normalizedResponse));
        } catch (error) {
            return dispatch(actions.error({ error }));
        }
    };