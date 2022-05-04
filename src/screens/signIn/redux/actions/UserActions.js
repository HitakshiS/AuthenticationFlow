import {
    RESET_USER,
    SAVE_USER
} from './types';

export const logoutResetUserAct = () => {
    return {
        type: RESET_USER,
        payload: null,
    };
};

export const saveUserData = (data) => {
    return {
        type: SAVE_USER,
        payload: data,
    };
};
