import { push } from 'react-router-redux';
import { URL } from '../../constants/url';
import { generateLightsURL } from '../../helpers/url.helper';
import { REGISTER } from '../registration/registration.constants';

export const RegistrationMiddleware = (store) => (next) => (action) => {
    if (action.type === REGISTER.SUCCESS) {
        store.dispatch(push(generateLightsURL()));
    }

    if (action.type === REGISTER.ERROR) {
        store.dispatch(push(URL.REGISTER));
    }

    next(action);
};
