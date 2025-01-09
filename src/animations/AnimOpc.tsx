"use client";

import React from "react";
import {motion} from "framer-motion";
import {IAnimOpc} from "@t/animations/amin-opc";

const AnimOpc = ({
  children,
  className,
  duration = .2,
  ease = "easeIn",
  opacityInitial = 0,
  opacityAnimate = 1,
  opacityExit = 0,
}: IAnimOpc) => {
  // wrap this element and logic state {!state && ()}
  // into <AnimatePresence> from "framer-motion";

  return (
    <motion.div
      className={className}
      initial={{
        opacity: opacityInitial,
      }}
      animate={{
        opacity: opacityAnimate,
      }}
      exit={{
        opacity: opacityExit,
      }}
      transition={{
        duration: duration,
        ease: ease,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimOpc;
