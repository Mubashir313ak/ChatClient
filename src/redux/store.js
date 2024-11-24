import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
// import chatReducer from "./slices/chatSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // chat: chatReducer,
  },
});

export default store;
