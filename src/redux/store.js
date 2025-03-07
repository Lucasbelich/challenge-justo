import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

/* import loginReducer from "./api/auth/login/loginSlice";
import loginQuery, {
  middleware as loginMiddleware,
} from "./api/auth/login/loginQuery"; */

const combinedReducers = combineReducers({
  /*   login: loginReducer,
  loginQuery, */
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
    getDefaultMiddleware().concat(/* loginMiddleware */),
});

setupListeners(store.dispatch);
export default store;
