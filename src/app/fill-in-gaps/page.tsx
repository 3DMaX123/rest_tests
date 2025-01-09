import FillInGapTest from '@r/src/components/fillingap/FillInGapTest';
import Button from '@ui/Button';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Заповнити пропуски | Restaurant tests"
};

const page = () => {

    return (
        <div>
            <Button is='comeBack' action={false} text='' to='' />
            <FillInGapTest />
        </div>
    )
}

export default page