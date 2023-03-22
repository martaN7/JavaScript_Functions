function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter((x) => set2.has(x));
}

console.log(arrayIntersection([1,2,3,5], [9,4,7,3,1,8]))