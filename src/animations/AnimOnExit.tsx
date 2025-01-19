import {AnimatePresence} from "framer-motion";
import React from "react";
import {IAnimOnExit} from "@t/animations/anim-on-exit";

const AnimOnExit = ({children}: IAnimOnExit) => {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  );
};

export default AnimOnExit;
