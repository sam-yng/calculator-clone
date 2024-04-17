import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CalculatorState {
  value: number;
}

const initialState: CalculatorState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: "calculatorValue",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // addCalculatorValue: (state, action) => {},
    // subtractCalculatorValue: (state, action) => {},
    // divideCalculatorValue: (state, action) => {},
    // multiplyCalulatorValue: (state, action) => {},
    // calculateCalculatorValue: (state, action) => {},
  },
});

export const { setValue } = calculatorSlice.actions;
export const selectValue = (state: RootState) => state.value;
export default calculatorSlice.reducer;
