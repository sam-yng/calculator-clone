"use client";
import React from "react";
import classNames from "classnames";
import { useAppSelector } from "@/lib/hooks";
import { selectValue } from "@/lib/features/calculatorSlice";

export const Value = () => {
  const value = useAppSelector(selectValue);

  return <h1 className={classNames("text-2xl", "mt-2")}>{value}</h1>;
};
