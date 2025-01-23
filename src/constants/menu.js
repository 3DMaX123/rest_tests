import mainMenu from "@p/menu/menu_structure.json";
import pizzaMenu from "@p/menu/pizza_structure.json";

const menuMain = mainMenu;
const menuPizza = pizzaMenu;

export const menu = [...menuMain, ...menuPizza];