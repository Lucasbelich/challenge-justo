import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import apiReducer from "./api/apiSlice";
import apiQuery, { middleware as apiMiddleware } from "./api/apiQuery";

const combinedReducers = combineReducers({
  api: apiReducer,
  apiQuery,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    state = undefined;
  }
  return combinedReducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

setupListeners(store.dispatch);
export default store;
