import React from "react";
import classNames from "classnames";
import { Button } from "./components/Button";
import { Value } from "./components/Value";

export default function Home() {
  return (
    <main className={classNames("h-screen", "p-6", "py-24")}>
      <div
        className={classNames(
          "border-[0.5px]",
          "border-white",
          "md:w-[15%]",
          "md:h-[36vh]",
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
            "md:w-auto",
            "md:h-[36vh]",
            "p-1",
            "h-full",
            "text-xl",
          )}
        >
          <div className={classNames("col-span-4", "text-right", "mr-3")}>
            <Value />
          </div>
          <Button text={"AC"} color="bg-grey-calc" opacity />
          <Button text={"+/-"} color="bg-grey-calc" opacity />
          <Button text={"%"} color="bg-grey-calc" opacity />
          <Button text={"÷"} color="bg-orange-calc" />
          <Button value={7} color="bg-grey-calc" />
          <Button value={8} color="bg-grey-calc" />
          <Button value={9} color="bg-grey-calc" />
          <Button text={"x"} color="bg-orange-calc" />
          <Button value={4} color="bg-grey-calc" />
          <Button value={5} color="bg-grey-calc" />
          <Button value={6} color="bg-grey-calc" />
          <Button text={"-"} color="bg-orange-calc" />
          <Button value={1} color="bg-grey-calc" />
          <Button value={2} color="bg-grey-calc" />
          <Button value={3} color="bg-grey-calc" />
          <Button text={"+"} color="bg-orange-calc" />
          <Button value={0} color="bg-grey-calc" span />
          <Button text={"."} color="bg-grey-calc" />
          <Button text={"="} color="bg-orange-calc" />
        </div>
      </div>
    </main>
  );
}
