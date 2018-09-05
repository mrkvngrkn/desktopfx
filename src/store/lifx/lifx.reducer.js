import { GET_LIGHTS } from './lifx.constants';

const initialSubState = {
    byId: {},
    all: [],
};

const initialState = {
    light: initialSubState,
    group: initialSubState,
    location: initialSubState,
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_LIGHTS.PENDING:
        case GET_LIGHTS.ERROR: {
            return state;
        }
        case GET_LIGHTS.SUCCESS: {
            return {
                ...state,
                light: action.payload.light,
                group: action.payload.group,
                location: action.payload.location,
            };
        }
        default: {
            return state;
        }
    }
};