// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
// import userReducer from "./userSlice";

// export const store = configureStore({
//   reducer: { cart: cartReducer, user: userReducer },
// });

//TO UNDERSTAND MORE ABOUT PERSISTSTORE REDUX TOOLKIT VISIT: https://redux-toolkit.js.org/usage/usage-guide

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

//persist from redux is used to store information in the browser even though we refresh the page or open another page it will still store in the browser
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

//Combining reducers userReducer and cartReducer
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
