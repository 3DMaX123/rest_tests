"use client";

import React from "react";
import {IDishTileProps} from "@t/components/bestiary/dish-tile";
import styles from "@s/components/bestiary/dish-tile.module.css";
import Button from "@r/src/ui/Button";
import {links} from "@c/links";
import Link from "next/link";

const DishTile = ({dish}: IDishTileProps) => {
  const link = `${links.LBestiary}/dish/${dish.url}`;

  return (
    <div className={styles.dishTiles}>
      <Link href={link} className={styles.name}>
        {dish.name}
      </Link>
      <Link href={link} className={styles.image}>
        {dish.photo !== "" && dish.type !== "" &&
          <img
            src={`/dishPhoto/${dish.type}/${dish.photo}`}
            alt={dish.name}
          />
        }
      </Link>
      <Button is="link" to={link} text="Дізнатись більше"/>
    </div>
  );
};

export default DishTile;
