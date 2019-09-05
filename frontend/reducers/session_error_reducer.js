import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session';


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLEAR_SESSION_ERRORS:
            return Object.assign({}, { errors: [] });
        default:
            return state;
    }
};