import {cache} from "react";
import {cookies} from "next/headers";


export const getCookieData = cache(async (cookieName: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(cookieName)?.value.split(",").filter(Boolean) || [];
});
