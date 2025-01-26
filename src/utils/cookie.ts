import {cache} from "react";
import {cookies} from "next/headers";
import {menu} from "@c/menu";
import {shuffle} from "@ut/arrays";
import {IMenu} from "../types/pages/fill-in-gap";


export const getCookieData = cache(async (cookieName: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(cookieName);
});

export const getFilteredMenu = cache((cookiesFormatted: string[], isShuffle: boolean) => {
  let newMenu = [];

  const typeMenu = menu.filter((item: IMenu) => cookiesFormatted.includes(item.type));
  if (typeMenu.length > 0) {
    newMenu = typeMenu;
  } else {
    newMenu = menu.filter((item: IMenu) =>
      item.subType !== undefined && cookiesFormatted.includes(item.subType),
    );
  }

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
