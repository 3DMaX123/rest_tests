import CheckList from "@ui/CheckList";
import {cookies} from "next/headers";
import {figCheckList} from "@c/constants";
import {FC} from "react";
import {ICheckListCookieProps} from "@t/ui/check-list-cookie";


const CheckListCookie: FC<ICheckListCookieProps> = async ({cookieName}) => {
  const cookieStore = await cookies();
  const cookiesFormatted = cookieStore.get(cookieName)?.value.split(",").filter(Boolean) || [];

  const updateTestTypes = async (
      item: string,
      action: "delete" | "save",
  ) => {
    "use server";

    try {
      const cookieStore = await cookies();
      const newCookieValue = action === "delete" ?
        cookiesFormatted.filter((i) => i !== item) :
        [...new Set([...cookiesFormatted, item])]; // Prevent duplicates

      if (newCookieValue.length === 0) {
        cookieStore.set(cookieName, "", {maxAge: 0});
        return;
      }

      const expires = new Date();
      expires.setDate(expires.getDate() + 7);

      cookieStore.set(cookieName, newCookieValue.join(","), {expires});
    } catch (error) {
      // eslint-disable-next-line no-undef
      console.error(`Failed to update cookie ${cookieName}:`, error);
    }
  };

  return (
    <CheckList
      list={figCheckList}
      onUpdate={updateTestTypes}
      selectedItems={cookiesFormatted}
    />
  );
};

export default CheckListCookie;
