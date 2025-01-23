"use client";

import React, {useCallback} from "react";
import {menu} from "@c/menu";
import {IMenu} from "@t/pages/fill-in-gap";
import {useSearchParams} from "next/navigation";
import DishTile from "@comp/bestiary/DishTile";
import styles from "@s/components/bestiary/bestiary-grid.module.css";
import {levenshteinDistance} from "@ut/compareAlgorythms";

const BestiaryGrid = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search")?.toLowerCase();

  const filteredMenu = useCallback(() => {
    if (!searchQuery) return menu;

    const normalizedQuery = searchQuery.toLowerCase().trim();
    const searchTerms = normalizedQuery.split(/[\s,]+/);

    return menu
        .map((dish) => {
          let score = 0;

          for (const term of searchTerms) {
            // Exact name match (highest priority)
            if (dish.name.toLowerCase() === term) {
              score += 100;
            } else if (levenshteinDistance(dish.name.toLowerCase(), term) <= 2) {
              // Fuzzy name match
              score += 75;
            } else if (dish.name.toLowerCase().includes(term)) {
              // Partial name match
              score += 50;
            }

            // Ingredients match
            if (dish.ingredients.toLowerCase().includes(term) ||
            dish.ingByIng.some((ing) => ing.toLowerCase().includes(term))) {
              score += 25;
            }

            // Description match
            if (dish.description?.toLowerCase().includes(term)) {
              score += 10;
            }
          }

          return {dish, score};
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({dish}) => dish);
  }, [menu, searchQuery]);


  return (
    <div className={styles.grid}>
      {filteredMenu().map((dish: IMenu) => (
        <DishTile key={dish.url} dish={dish} />
      ))}
    </div>
  );
};

export default BestiaryGrid;
