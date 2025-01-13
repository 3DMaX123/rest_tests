import FillInGap from "@comp/fillingap/FillInGap";
import Button from "@ui/Button";
import {Metadata} from "next";
import React, {cache} from "react";
import {menuMain, menuPizza} from "@c/menu";
import {shuffle} from "@ut/arrays";
import CheckListCookie from "@ui/CheckListCookie";
import {cookies} from "next/headers";


export const metadata: Metadata = {
  title: "Заповнити пропуски | Restaurant tests",
};

const getCookieData = cache(async (cookieName: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(cookieName)?.value.split(",").filter(Boolean) || [];
});

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
      <CheckListCookie cookieName={cookieName}/>
      <Button is='comeBack' action={false} text='' to='' />
      <FillInGap menu={shuffledMenu} />
    </div>
  );
};

export default page;
