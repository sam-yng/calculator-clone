import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./features/calculatorSlice";

export const makeStore = () => {
  return configureStore({
    reducer: calculatorReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
