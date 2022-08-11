import { configureStore } from "@reduxjs/toolkit";
import teamGridReducer from "./features/teamGridSlice";

export const store = configureStore({
  reducer: {
    teamGrid: teamGridReducer
  }
})



