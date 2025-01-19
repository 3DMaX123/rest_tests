export const FIG_CHECK_LIST = [
    ["burgers", "Бургери"],
    ["desserts", "Десерти"],
    ["italianBread", "Італійський хліб"],
    ["kidsMenu", "Дитяче меню"],
    ["mainDishes", "Основні страви"],
    ["pasta", "Паста"],
    ["pizza", "Піца"],
    ["salads", "Салати"],
    ["snacks", "Закуски"],
    ["soups", "Супи"],
]

export const RESULT_TEXT_COLORS = {
    CORRECT: {
      BG: "var(--bg-correct-ans)",
      TC: "var(--tc-correct-ans)",
    },
    INCORRECT: {
      BG: "var(--bg-incorrect-ans)",
      TC: "var(--tc-incorrect-ans)",
    },
};
  
export const mainTexts = {
  fig: {
    test: {
      header: "Заповни пропуски",
      subHeader: "Зпираючись на опис страви чи напою введи назву у текстовому полі",
    },
    result: {
      header: "І що ж там?",
      subHeader: "Тут буде результат відповіді, також можеш подивитись розгорнуту відповідь",
    },
    hint: {
      header: "А це у нас",
      subHeader: "",
    },
    end: {
      header: "Вітаю! Ось і кінець теста",
      subHeader: "тут можна підбити підсумки та почати знову",
    },
    start: {
      header: "",
      subHeader: "",
    }
  }
}