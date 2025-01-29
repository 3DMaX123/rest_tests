import {IMenu} from "@t/root";
import {returnShuffleArray} from "@ut/arrays";

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomColor = () => {
  const lvl = 120;
  return "#" + (Math.floor(Math.random() * lvl) << 16 |
        Math.floor(Math.random() * lvl) << 8 |
        Math.floor(Math.random() * lvl))
      .toString(16).padStart(6, "0");
};

export const getRandomIngredients = (dish: IMenu, menu: IMenu[]): string[] => {
  const dishTypeMenu = menu.filter((item) => item.type === dish.type);
  const allIngredients = dishTypeMenu.flatMap((item) => item.ingByIng);
  const thirtyPercent = Math.ceil(dish.ingByIng.length * 0.3);

  const uniqueIngredients = [...new Set(allIngredients)]
      .filter((ing) => !dish.ingByIng.includes(ing))
      .slice(0, thirtyPercent);

  return returnShuffleArray([...dish.ingByIng, ...uniqueIngredients]);
};
