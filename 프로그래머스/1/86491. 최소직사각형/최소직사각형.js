    function solution(sizes) {
        const arr = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

        let maxSize = [0, 0];
        arr.forEach(([w, h]) => {
            if (w > maxSize[0]) maxSize[0] = w;
            if (h > maxSize[1]) maxSize[1] = h;
        });
        
        return maxSize[0] * maxSize[1];
}