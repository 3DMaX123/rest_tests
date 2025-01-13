import {cookies} from "next/headers";

/**
 * Get a cookie
 * @param {name} name of cookie
 */
export async function getCookie(name: string) {
  const cookie = (await cookies()).get(name)?.value;

  if (!cookie) return null;

  return cookie;
}


{/*
  // how to call setCookie through button
<form
  action={async (formData) => {
  "use server";
  setCookie("we-request", "true", 3);
  }}>
    <button type="submit">Login</button>
</form>
*/}
/**
 * Create a cookie
 * @param {name} name of cookie
 * @param {value} value of cookie
 * @param {days} days until expire from now
 */
export async function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now());
  expires.setDate(expires.getDate() + days);
  (await cookies()).set(name, value, {expires: expires, httpOnly: process.env.NODE_ENV === "production"});
}


/**
 * Deletes cookie
 * @param {name} name of cookie
 */
async function deleteCookie(name: string) {
  (await cookies()).set(name, "", {maxAge: 0});
}

/**
 * Get all cookies
 * @param {name} name of cookie
 * @return {Array}
 */
export async function getAllCookie() {
  const cookieStore = await cookies();
  return cookieStore.getAll();
}


/**
 * Checks if cookie exists
 * @param {name} name of cookie
 * @return {boolean}
 */
export async function isCookieExist(name: string) {
  const cookieStore = await cookies();
  const hasCookie = cookieStore.has(name);

  return hasCookie;
}
