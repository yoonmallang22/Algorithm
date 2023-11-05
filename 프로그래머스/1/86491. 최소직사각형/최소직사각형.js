    function solution(sizes) {
        let arr = [];
        sizes.forEach(([w, h]) => {
            if (w < h) arr.push([h, w]);
            else arr.push([w, h]);
        });
        
        return Math.max(...arr.map(([w, h]) => w)) * Math.max(...arr.map(([w, h]) => h));
}