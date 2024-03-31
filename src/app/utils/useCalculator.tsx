"use client";
import React, { createContext, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "@reduxjs/toolkit";

export type CalculatorContextType = {
  dispatch: Dispatch<Action>;
  currentCalculatorValue: number;
};

const CalculatorContext = createContext<CalculatorContextType | undefined>(
  undefined,
);

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const currentCalculatorValue = useSelector((state: number) => state);

  const value = useMemo(
    () => ({
      dispatch,
      currentCalculatorValue,
    }),
    [dispatch, currentCalculatorValue],
  );

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = (): CalculatorContextType => {
  const value = useContext(CalculatorContext);
  if (!value) {
    throw new Error(
      "useCalculator can only be called from within a CalculatorProvider",
    );
  }
  return value;
};
