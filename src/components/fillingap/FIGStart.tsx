import { IFigStart } from "@t/components/fig-start"
import Button from "@ui/Button"
import React, { FC } from "react"

const FIGStart: FC<IFigStart> = ({ setStatus }) => {

    const handleTestStart = (): void => {
        setStatus("test");
    }

    return (
        <Button
            className='bg-white'
            is='button'
            action={handleTestStart}
            text="Розпочати"
            to={false}
        />
    )
}

FIGStart.displayName = "FIGStart";

export default FIGStart