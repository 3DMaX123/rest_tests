export function shuffle<T>(array: Array<T>) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

export const jsonToArray = (json: object, whichOne: "values" | "keys") => {
  if (whichOne === "values") {
    return Object.values(json);
  } else if (whichOne === "keys") {
    return Object.keys(json);
  } else {
    return ["/"];
  }
};
