export const createActions = (constants) => {
    return {
        pending: (payload) => ({
            type: constants.PENDING,
            payload,
        }),
        success: (payload) => ({
            type: constants.SUCCESS,
            payload,
        }),
        error: (payload) => ({
            type: constants.ERROR,
            payload,
        }),
    }
};
