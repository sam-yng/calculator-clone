import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

export const calculatorSlice = createSlice({
  name: "calculatorValue",
  initialState,
  reducers: {
    changeCalculatorValue: (state, action) => {
      state === 0
        ? (state += action.payload.value)
        : "" + state + action.payload.value;
    },
    addCalculatorValue: (state, action) => {},
    subtractCalculatorValue: (state, action) => {},
    divideCalculatorValue: (state, action) => {},
    multiplyCalulatorValue: (state, action) => {},
    calculateCalculatorValue: (state, action) => {},
  },
});

export const {
  changeCalculatorValue,
  addCalculatorValue,
  subtractCalculatorValue,
  divideCalculatorValue,
  multiplyCalulatorValue,
  calculateCalculatorValue,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
