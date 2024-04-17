"use client";
import React from "react";
import classNames from "classnames";
import { setValue } from "@/lib/features/calculatorSlice";
import { useAppDispatch } from "@/lib/hooks";

type ButtonProps = {
  value?: number;
  color: "bg-orange-calc" | "bg-grey-calc";
  opacity?: boolean;
  span?: boolean;
  text?: string;
};

export const Button: React.FC<ButtonProps> = ({
  value,
  color,
  opacity,
  span,
  text,
}) => {
  const dispatch = useAppDispatch();

  return (
    <button
      value={value}
      className={classNames(
        color,
        opacity && "bg-opacity-55",
        span && "col-span-2",
      )}
      onClick={() => dispatch(setValue(value!))}
    >
      {text ? text : value}
    </button>
  );
};
