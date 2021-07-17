import { configureStore } from "@reduxjs/toolkit";
import { safeReducer } from "./features/index";

export default configureStore({
  reducer: {
    safe: safeReducer,
  },
});
