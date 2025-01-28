"use client";

import React, {useCallback} from "react";
import {menu} from "@c/menu";
import {IMenu} from "@t/root";
import {useSearchParams} from "next/navigation";
import DishTile from "@comp/bestiary/DishTile";
import styles from "@s/components/bestiary/bestiary-grid.module.css";
import {levenshteinDistance} from "@ut/compareAlgorythms";
import {DISH_TYPES} from "@c/constants";

const findMatchingDishType = (searchTerms: string[]) => {
  for (const term of searchTerms) {
    const normalizedTerm = term.toLowerCase();

    // Early return for exact matches using O(1) lookup
    const exactMatch = DISH_TYPES.find(([id, label]) => {
      return label.toLowerCase() === normalizedTerm ||
             id.toLowerCase() === normalizedTerm;
    });
    if (exactMatch) return exactMatch;

    // Only check fuzzy matches if no exact match found
    for (const [id, label] of DISH_TYPES) {
      if (levenshteinDistance(label.toLowerCase(), normalizedTerm) <= 2 ||
          levenshteinDistance(id.toLowerCase(), normalizedTerm) <= 2) {
        return DISH_TYPES.find(([typeId]) => typeId === id.toLowerCase());
      }
    }
  }
  return null;
};

const BestiaryGrid = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search")?.toLowerCase();

  const filteredMenu = useCallback(() => {
    if (!searchQuery) return menu;

    const normalizedQuery = searchQuery.toLowerCase().trim();
    const searchTerms = normalizedQuery.split(/[\s,]+/);

    // Check if search matches dish type
    const matchedType = findMatchingDishType(searchTerms);

    if (matchedType) {
      return menu.filter((dish: IMenu) =>
        dish.type === matchedType[0] || dish.subType === matchedType[0],
      );
    }

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
              score += 55;
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
      {filteredMenu().map((dish: IMenu, index: number) => (
        <DishTile key={dish.url + index} dish={dish} />
      ))}
    </div>
  );
};

export default BestiaryGrid;
