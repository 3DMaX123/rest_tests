import FillInGap from "@comp/fillingap/FillInGap";
import Button from "@ui/Button";
import {Metadata} from "next";
import React, {cache} from "react";
import CheckList from "@ui/CheckList";
import {getCookieData} from "@ut/cookie";
import {menuMain, menuPizza} from "@c/menu";
import {shuffle} from "@ut/arrays";


export const metadata: Metadata = {
  title: "Заповнити пропуски | Restaurant tests",
};

const getFilteredMenu = cache((cookiesFormatted: string[]) => {
  const menu = [...menuMain, ...menuPizza];
  const newMenu = cookiesFormatted.length > 0 ?
    menu.filter((item) => cookiesFormatted.includes(item.type)) :
    menu;
  shuffle(newMenu);

  return newMenu;
});

const page = async () => {
  const cookieName = "figTestType";
  const cookiesFormatted = await getCookieData(cookieName);
  const shuffledMenu = getFilteredMenu(cookiesFormatted);


  return (
    <div>
      <CheckList cookieName={cookieName}/>
      <Button is='comeBack' to='' />
      <FillInGap menu={shuffledMenu} />
    </div>
  );
};

export default page;
