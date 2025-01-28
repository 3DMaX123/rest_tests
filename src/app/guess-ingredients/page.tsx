import GuessIng from "@r/src/components/guess-ing/GuessIng";
import Button from "@ui/Button";
import CheckList from "@ui/CheckList";
import {getFormattedMenu} from "@ut/cookie";
import React from "react";

const page = async () => {
  const cookieName = "guessIngType";
  const {cookies, formattedMenu} = await getFormattedMenu(cookieName);

  return (
    <div>
      <CheckList cookieName={cookieName}/>
      <Button is="comeBack" to="" />
      <GuessIng
        menu={formattedMenu}
        cookies={cookies?.value}
      />
    </div>
  );
};

export default page;
