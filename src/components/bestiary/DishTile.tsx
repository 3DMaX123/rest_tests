"use client";

import React from "react";
import {IDishTileProps} from "@t/components/bestiary/dish-tile";
import styles from "@s/components/bestiary/dish-tile.module.css";
import Button from "@r/src/ui/Button";
import {links} from "@c/links";

const DishTile = ({dish}: IDishTileProps) => {
  return (
    <div className={styles.dishTiles}>
      <img src={dish.photo} />
      <p>{dish.name}</p>
      <Button is="link" to={`${links.LBestiary}/dish/${dish.url}`} text="Дізнатись більше"/>
    </div>
  );
};

export default DishTile;
