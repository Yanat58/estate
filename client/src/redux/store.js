import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
