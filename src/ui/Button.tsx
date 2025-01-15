import React from "react";
import {ButtonProps} from "@t/ui/button";
import styles from "@s/ui/button.module.css";
import {cn} from "@ut/shadcn";
import Link from "next/link";

const Button = ({
  text,
  is,
  to,
  action,
  className,
}: ButtonProps) => {
  const renderButtons = {
    button: (
      <button className={cn(styles.button, className)} onClick={action}>{text}</button>
    ),
    link: (
      <Link className={cn(styles.link, className)} href={to ? to : ""}>{text}</Link>
    ),
    comeBack: (
      <Link className={styles.homeIcon} href={"/"}>
        <img src="/arrow.svg" className={styles.svg} />
      </Link>
    ),
  };

  return (
    <>
      {renderButtons[is]}
    </>
  );
};

export default Button;
