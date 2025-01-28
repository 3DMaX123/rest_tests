import {StartProps} from "@t/components/start";
import Button from "@ui/Button";
import React, {FC} from "react";

const Start: FC<StartProps> = ({setStatus}) => {
  const handleTestStart = (): void => {
    setStatus("test");
  };

  return (
    <Button
      className='bg-white'
      is='button'
      action={handleTestStart}
      text="Розпочати"
    />
  );
};

Start.displayName = "Start";

export default Start;
