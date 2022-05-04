import { createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from '../../redux';

//redux persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//redux store
const AppReduxStore = createStore(
  persistedReducer,
  {}
);

export const persistor = persistStore(AppReduxStore);

export default AppReduxStore;
