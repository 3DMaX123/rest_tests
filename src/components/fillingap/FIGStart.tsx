import { IFigStart } from '@t/components/fig-start'
import Button from '@ui/Button'
import React from 'react'

const FIGStart = ({ status, setStatus }: IFigStart) => {

    const startTest = () => {
        setStatus("test");
    }

    return (
        <>
            {status === "start" &&
                <Button className='bg-white' is='button' action={startTest} text="Розпочати" to={false} />
            }
        </>
    )
}

export default FIGStart