import { combineReducers } from 'redux';

import UserReducer from '../screens/signIn/redux/reducers/UserReducer';

const appAllReducers = combineReducers({
    userReducer: UserReducer
});


const rootReducer = (state, action) => {
    if (action.type === 'RESET_USER') {
        state = undefined;
    }

    return appAllReducers(state, action);
};

export default rootReducer;
