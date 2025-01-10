import React from "react";
import {IButton} from "@t/ui/button";
import Link from "next/link";
import styles from "@s/ui/button.module.css";
import {cn} from "@ut/shadcn";

const Button = ({
  text,
  is,
  to,
  action,
  className,
}: IButton) => {
  return (
    <>
      {is === "button" &&
                <button className={cn(styles.button, className)} onClick={action}>{text}</button>
      }
      {is === "link" &&
                <Link className={cn(styles.link, className)} href={to}>{text}</Link>
      }
      {is === "comeBack" &&
                <Link className={styles.homeIcon} href={"/"}>
                  <img src="/home.svg" className={styles.svg} />
                </Link>
      }
    </>
  );
};

export default Button;
