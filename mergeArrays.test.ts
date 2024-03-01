import merge from './mergeArrays';

describe('mergeArrays', () => {
    it('should merge three sorted arrays', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const collection3 = [6, 4, 2];

        const merged = merge(collection1, collection2, collection3);
        expect(merged).toEqual([1,2,2,3,4,4,5,6,6]);
    });

    // Add more test cases as needed
});