import {cache} from "react";
import {cookies} from "next/headers";
import {menu} from "@c/menu";
import {shuffle} from "@ut/arrays";


export const getCookieData = cache(async (cookieName: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(cookieName);
});

export const getFilteredMenu = cache((cookiesFormatted: string[], isShuffle: boolean) => {
  const newMenu = cookiesFormatted.length > 0 ?
    menu.filter((item) => cookiesFormatted.includes(item.type)) :
    menu;
  if (isShuffle) {
    shuffle(newMenu);
  }

  return newMenu;
});


export const getFormattedMenu = async (cookieName: string) => {
  const cookies = await getCookieData(cookieName);
  const cookiesFormatted = cookies?.value.split(",").filter(Boolean) || [];
  const formattedMenu = getFilteredMenu(cookiesFormatted, true);

  return {cookies, formattedMenu};
};
