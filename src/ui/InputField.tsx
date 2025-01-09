"use client";

import React from 'react';
import { IInputFields } from '@t/ui/input-field';
import { cn } from '../utils/shadcn';
import styles from "@s/ui/input-fields.module.css";

const InputField = ({ className, value, setValue, placehilder = "" }: IInputFields) => {

    const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <input
            onChange={handleInputText}
            className={cn(className, styles.input)}
            // onKeyDown={handleKeyDown}
            value={value}
            type={"text"}
            placeholder={placehilder}
            autoComplete="off"
        />
    )
}

export default InputField