"use client";

import React, {FC} from "react";
import {IInputFieldProps} from "@t/ui/input-field";
import {cn} from "../utils/shadcn";
import styles from "@s/ui/input-fields.module.css";

const InputField: FC<IInputFieldProps> = ({
  className,
  value,
  setValue,
  placeHolder = "",
  triggerInput,
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && triggerInput) {
      triggerInput();
    }
  };

  return (
    <input
      onChange={setValue}
      className={cn(className, styles.input)}
      onKeyUp={handleKeyPress}
      value={value}
      type={"text"}
      placeholder={placeHolder}
      autoComplete="off"
    />
  );
};

export default InputField;
