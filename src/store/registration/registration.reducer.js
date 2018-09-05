import { REGISTER } from './registration.constants';

const initialState = {
    key: '',
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REGISTER.SUCCESS: {
            return {
                ...state,
                key: action.payload.key,
            };
        }
        default: {
            return state;
        }
    }
};