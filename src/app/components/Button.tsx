import React from "react";
import classNames from "classnames";

type ButtonProps = {
  value: number | string;
  color: "bg-orange-calc" | "bg-grey-calc";
  opacity?: boolean;
  span?: boolean;
  handleChange?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  value,
  color,
  opacity,
  span,
}) => {
  // const { dispatch, currentCalculatorValue } = useCalculator();

  // const handleCalculatorValueChange = () => {
  //   if (Number.isInteger(value)) {
  //     dispatch(
  //       changeCalculatorValue({ state: currentCalculatorValue, action: value }),
  //     );
  //     console.log(currentCalculatorValue);
  //   }
  // };

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
