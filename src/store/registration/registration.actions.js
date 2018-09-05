import { REGISTER } from './registration.constants';
import { createActions } from '../helpers/createActions';

const registerActions = createActions(REGISTER);

export function register(newKey) {
    return async dispatch => {
        dispatch(registerActions.pending());
        try {
            // If key is provided, set as new key
            if (newKey) {
                localStorage.setItem('key', JSON.stringify(newKey));
                return dispatch(registerActions.success({ key: newKey }));
            }

            // Check if key is already stored
            const key = localStorage.getItem('key');
            if (!!key) {
                return dispatch(registerActions.success({ key: JSON.parse(key) }));
            }

            throw Error('Registration failed');
        } catch(e) {
            console.log(e);
            dispatch(registerActions.error({ e }));
        }
    };
}