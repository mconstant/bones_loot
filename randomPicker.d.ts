import { Options, WeightedItem } from "./types";
declare class RandomPicker<T> {
    private options?;
    private totalWeight;
    private items;
    constructor(items: WeightedItem<T>[], options?: Options | undefined);
    pick(): T;
    pickMany(amount: number): T[];
    /**
     * picks distinct elements from the weighted array.
     * If the number of items required is more or equal to the length of weighted array, it will return all elements in array
     * @param amount - positive number of items to be picked, if more or equal to the length of the array, returns all items
     * @returns array of picked items
     * @example
     * const items = [
     * { original: "Bronze", weight: 20 },
     * { original: "Silver", weight: 10 },
     * { original: "Gold", weight: 3 },
     * { original: "Platinum", weight: 1 },
     * ];
     * const pickerAlwaysLast = new RandomPicker(items);
     * const picked1 = pickerAlwaysLast.pickManyDistinct(1);
     * console.log(picked1.length) // 1
     * const picked3 = pickerAlwaysLast.pickManyDistinct(3);
     * console.log(picked3.length) // 3
     * const picked4 = pickerAlwaysLast.pickManyDistinct(4);
     * console.log(picked4.length) // 4
     * console.log(picked4) // ["Bronze", "Silver", "Gold", "Platinum"]
     * const picked8 = pickerAlwaysLast.pickManyDistinct(8);
     * console.log(picked8) // throws error number of items cannot be more than length of the array
     */
    pickManyDistinct(amount: number): T[];
    set(items: WeightedItem<T>[]): void;
    getItems(): T[];
    getWeights(): number[];
    getTotalWeight(): number;
    getCount(): number;
    private validate;
    private updateTotalWeight;
    private safeNext;
    private internalSet;
}
