import React from "react";
import classNames from "classnames";

export default function Home() {
  return (
    <main className={classNames("h-screen", "p-6", "py-24")}>
      <div
        className={classNames(
          "border-[0.5px]",
          "border-white",
          "md:w-[14vw]",
          "md:h-[34vh]",
          "top-0",
          "bottom-0",
          "left-0",
          "right-0",
          "m-auto",
          "md:absolute",
          "rounded-md",
          "h-full",
        )}
      >
        <div
          className={classNames(
            "grid-rows-6",
            "grid-cols-4",
            "grid",
            "gap-0.5",
            "md:w-[14vw]",
            "md:h-[34vh]",
            "p-1",
            "h-full",
          )}
        >
          <div className={classNames("col-span-4", "text-right", "mr-3")}>
            <h1 className={classNames("text-2xl", "mt-1")}>0</h1>
          </div>
          <button className={classNames("bg-grey-calc", "bg-opacity-55")}>
            AC
          </button>
          <button className={classNames("bg-grey-calc", "bg-opacity-55")}>
            +/-
          </button>
          <button className={classNames("bg-grey-calc", "bg-opacity-55")}>
            %
          </button>
          <button className={classNames("bg-orange-calc")}>÷</button>
          <button className={classNames("bg-grey-calc")}>7</button>
          <button className={classNames("bg-grey-calc")}>8</button>
          <button className={classNames("bg-grey-calc")}>9</button>
          <button className={classNames("bg-orange-calc")}>x</button>
          <button className={classNames("bg-grey-calc")}>4</button>
          <button className={classNames("bg-grey-calc")}>5</button>
          <button className={classNames("bg-grey-calc")}>6</button>
          <button className={classNames("bg-orange-calc")}>-</button>
          <button className={classNames("bg-grey-calc")}>1</button>
          <button className={classNames("bg-grey-calc")}>2</button>
          <button className={classNames("bg-grey-calc")}>3</button>
          <button className={classNames("bg-orange-calc")}>+</button>
          <button className={classNames("col-span-2", "bg-grey-calc")}>
            0
          </button>
          <button className={classNames("bg-grey-calc")}>.</button>
          <button className={classNames("bg-orange-calc")}>=</button>
        </div>
      </div>
    </main>
  );
}
