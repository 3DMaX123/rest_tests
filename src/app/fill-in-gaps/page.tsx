import FillInGap from "@comp/fig/FillInGap";
import Button from "@ui/Button";
import {Metadata} from "next";
import React from "react";
import CheckList from "@ui/CheckList";
import {getFormattedMenu} from "@ut/cookie";


export const metadata: Metadata = {
  title: "Заповнити пропуски | Restaurant tests",
};

const page = async () => {
  const cookieName = "figTestType";
  const {cookies, formattedMenu} = await getFormattedMenu(cookieName);

  return (
    <div>
      <CheckList cookieName={cookieName}/>
      <Button is="comeBack" to="" />
      <FillInGap
        menu={formattedMenu}
        cookies={cookies?.value}
      />
    </div>
  );
};

export default page;
