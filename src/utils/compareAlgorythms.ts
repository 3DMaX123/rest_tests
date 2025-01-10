export const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));

    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= str2.length; j++) {
        for (let i = 1; i <= str1.length; i++) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            matrix[j][i] = Math.min(
                matrix[j][i - 1] + 1,
                matrix[j - 1][i] + 1,
                matrix[j - 1][i - 1] + indicator
            );
        }
    }
    return matrix[str2.length][str1.length];
};

export const normalizeAndCompare = (str1: string, str2: string): boolean => {
    const normalize = (s: string) => s.toLowerCase().trim().replace(/\s+/g, ' ');
    const s1 = normalize(str1);
    const s2 = normalize(str2);

    // Exact match
    if (s1 === s2) return true;

    // Fuzzy match
    const maxLength = Math.max(s1.length, s2.length);
    const distance = levenshteinDistance(s1, s2);
    const similarity = (maxLength - distance) / maxLength;

    console.log(s1, s2, similarity);

    return similarity > 0.85; // 85% similarity threshold
};