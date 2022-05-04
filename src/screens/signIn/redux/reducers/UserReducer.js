import { RESET_USER, SAVE_USER } from '../actions/types';

//INITIAL_STATE
const INITIAL_STATE = {
    userData: null,
    isNotifSettingsOn: true,
};

//reducer
export default (state = INITIAL_STATE, action = { type, payload: false }) => {
    switch (action.type) {
        case SAVE_USER:
            {
                return {
                    ...state,
                    userData: action.payload,
                };
            }
        case RESET_USER:
            {
                return {
                    ...state,
                    userData: null,
                };
            }

        default:
            return state;
    }
};
