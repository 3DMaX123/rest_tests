export const JSONToArray = (json: object, whichOne: "values" | "keys") => {
    if (whichOne === "values") {
        return Object.values(json);
    }
    else if (whichOne === "keys") {
        return Object.keys(json);
    }
    else {
        return ["/"];
    }
}