function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0, k = collection3.length - 1;

    // Merge the three arrays collection1, collection2, and collection3 into a single array
    // The result array should be sorted in descending order
    // You should not use the sort method
    while (i < collection1.length || j < collection2.length || k >= 0) {
        const value1 = i < collection1.length ? collection1[i] : Number.POSITIVE_INFINITY;
        const value2 = j < collection2.length ? collection2[j] : Number.POSITIVE_INFINITY;
        const value3 = k >= 0? collection3[k] : Number.POSITIVE_INFINITY;

        const minValue = Math.min(value1, value2, value3);

        if (minValue === value1) {
            result.push(value1);
            i++;
        } else if (minValue === value2) {
            result.push(value2);
            j++;
        } else {
            result.push(value3);
            k--;
        }
    }

    console.log(result);
    return result;
}

export default merge;