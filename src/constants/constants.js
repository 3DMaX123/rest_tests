export const DISH_TYPES = [

  // dishes
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

  // drink types
  ["alcohol", "Алкоголь"],
  ["lemonades", "Лимонади"],
  ["drinks", "Напої"],
  ["cocktails", "Коктейлі"],
  ["coffe", "Кава"],
  ["tea", "Чай"],


  // subTypes
  ['aperol', 'Апероль'],
  ['becherovka', 'Бехеровка'],
  ['beer', 'Пиво'],
  ['brendi', 'Бренді'],
  ['gin', 'Джин'],
  ['grappa', 'Граппа'],
  ['mulled wine', 'Глінтвейн'],
  ['punch', 'Пунш'],
  ['rom', 'Ром'],
  ['tequila', 'Текіла'],
  ['vine', 'Вино'],
  ['vodka', 'Горілка'],
  ['whisky', 'Віскі'],
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

export const HEADERS = {
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
  },
  bestiary: {
    main: {
      "header": "Це довідник",
      "subHeader": "тут ти можеш знайти страву та подивитись детальну інформацію про неї",
    },
    slug: {
      "header": "Це потрібна тобі страва",
      "subHeader": "тут ти можеш вивчити її детальніше",
    }
  }
}