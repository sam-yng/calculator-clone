import React from "react";
import classNames from "classnames";

type ButtonProps = {
  value: number | string;
  color: "bg-orange-calc" | "bg-grey-calc";
  opacity?: boolean;
  span?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  value,
  color,
  opacity,
  span,
}) => {
  return (
    <button
      value={value}
      className={classNames(
        color,
        opacity && "bg-opacity-55",
        span && "col-span-2",
      )}
    >
      {value}
    </button>
  );
};
