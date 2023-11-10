function solution(name, yearning, photo) {
    return photo.map(v => {
        let score = 0;
        v.forEach(photoVal => {
            name.forEach((nameVal, i) => {
                if (photoVal === nameVal) score += yearning[i];
            })
        })
        return score;
    })
}