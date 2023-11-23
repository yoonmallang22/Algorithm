function solution(survey, choices) {
    const typesScore = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) => type.split('').forEach((char) => typesScore[char] = 0));

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        typesScore[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => typesScore[b] > typesScore[a] ? b : a).join("");
}