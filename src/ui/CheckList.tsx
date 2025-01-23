
import {FC} from "react";
import {cookies} from "next/headers";
import CheckListUi from "@ui/CheckListUi";
import {ICheckListProps} from "@t/ui/check-list";
import {DISH_TYPES} from "@c/constants";


const CheckList: FC<ICheckListProps> = async ({cookieName}) => {
  const cookieStore = await cookies();
  const cookiesFormatted = cookieStore.get(cookieName)?.value.split(",").filter(Boolean) || [];

  const updateTestTypes = async (
      items: string[],
  ) => {
    "use server";
    try {
      const cookieStore = await cookies();

      const expires = new Date();
      expires.setDate(expires.getDate() + 7);
      cookieStore.set(cookieName, items.join(","), {expires});
    } catch (error) {
      // eslint-disable-next-line no-undef
      console.error(`Failed to update cookie ${cookieName}:`, error);
    }
  };

  return (
    <CheckListUi
      list={DISH_TYPES}
      onUpdate={updateTestTypes}
      cookieItems={cookiesFormatted}
    />
  );
};

CheckList.displayName = "CheckListCookie";

export default CheckList;
