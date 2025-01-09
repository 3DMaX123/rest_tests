export const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const randomColor = () => {
    const lvl = 120;
    return "#" + (Math.floor(Math.random() * lvl) << 16 |
        Math.floor(Math.random() * lvl) << 8 |
        Math.floor(Math.random() * lvl))
        .toString(16).padStart(6, "0");
};