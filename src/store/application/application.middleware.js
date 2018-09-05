import { APPLICATION_INIT } from './application.constants';
import { register } from '../registration/registration.actions';

export const ApplicationMiddleware = (store) => (next) => (action) => {
    if (action.type === APPLICATION_INIT) {
        store.dispatch(register());
    }

    next(action);
};
