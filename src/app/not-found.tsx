import React from "react";
import MainBack from "@comp/MainBack";
import MainWindow from "@comp/MainWindow";

const Error = () => {
  return (
    <div className='flex items-center justify-center'>
      <MainBack />
      <MainWindow
        header="ТЮФУ!"
        subHeader="Я щось наробив і тепер воно не працює, ти знаєш мій номер..."
        className="mainWindowStandard"
      >
        <></>
      </MainWindow>
    </div>
  );
};

export default Error;
