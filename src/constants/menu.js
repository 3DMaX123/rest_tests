import mainMenu from "@p/menu/menu_structure.json";
import pizzaMenu from "@p/menu/pizza_structure.json";
import drinksMenu from "@p/menu/drinks_structure.json";

const menuMain = mainMenu;
const menuPizza = pizzaMenu;
const menuDrinks = drinksMenu;

export const menu = [...menuMain, ...menuPizza, ...menuDrinks];