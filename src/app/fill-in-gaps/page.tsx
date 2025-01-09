import FillInGap from '@comp/fillingap/FillInGap';
import Button from '@ui/Button';
import { Metadata } from 'next';
import React from "react";
import { menuMain, menuPizza } from "@c/menu";
import { shuffle } from '@ut/arrays';

export const metadata: Metadata = {
    title: "Заповнити пропуски | Restaurant tests"
};

const page = () => {
    const menus = menuMain.concat(menuPizza);
    shuffle(menus);

    return (
        <div>
            <Button is='comeBack' action={false} text='' to='' />
            <FillInGap menus={menus} />
        </div>
    )
}

export default page