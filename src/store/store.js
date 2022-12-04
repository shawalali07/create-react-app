import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

// const auth = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {},
});
export const persistor = persistStore(store);
