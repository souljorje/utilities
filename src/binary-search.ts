/**
 * Comparator contract used by binary-search helpers.
 */
export type Comparator<T> = (a: T, b: T) => number;

const defaultCompare: Comparator<any> = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

/**
 * Core first-true binary search over a sorted array.
 *
 * It returns the smallest index where `predicate(array[index])` is true,
 * or `array.length` if the predicate is never true.
 *
 * @example
 * binarySearchBase([1, 3, 5], (v) => v >= 4) // 2
 * binarySearchBase([1, 3, 5], (v) => v > 10) // 3
 */
export function binarySearchBase<T>(array: readonly T[], predicate: (value: T) => boolean): number {
    let low = 0;
    let high = array.length;

    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);

        if (predicate(array[mid])) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
}

/**
 * Returns first index where `array[index] >= target`.
 *
 * @example
 * lowerBound([1, 2, 2, 4], 2) // 1
 * lowerBound([1, 2, 2, 4], 3) // 3
 */
export function lowerBound<T>(
    array: readonly T[],
    target: T,
    compare: Comparator<T> = defaultCompare as Comparator<T>,
): number {
    return binarySearchBase(array, (element) => compare(element, target) >= 0);
}

/**
 * Returns first index where `array[index] > target`.
 *
 * @example
 * upperBound([1, 2, 2, 4], 2) // 3
 * upperBound([1, 2, 2, 4], 5) // 4
 */
export function upperBound<T>(
    array: readonly T[],
    target: T,
    compare: Comparator<T> = defaultCompare as Comparator<T>,
): number {
    return binarySearchBase(array, (element) => compare(element, target) > 0);
}

/**
 * Returns exact-match index for target, or -1 when absent.
 *
 * @example
 * binarySearch([1, 2, 4], 2) // 1
 * binarySearch([1, 2, 4], 3) // -1
 */
export function binarySearch<T>(
    array: readonly T[],
    target: T,
    compare: Comparator<T> = defaultCompare as Comparator<T>,
): number {
    const index = lowerBound(array, target, compare);

    if (index < array.length && compare(array[index], target) === 0) {
        return index;
    }

    return -1;
}

/**
 * Returns `[firstIndex, pastLastIndex]` range for all equal elements.
 *
 * @example
 * equalRange([1, 2, 2, 2, 4], 2) // [1, 4]
 * equalRange([1, 2, 2, 2, 4], 3) // [4, 4]
 */
export function equalRange<T>(
    array: readonly T[],
    target: T,
    compare: Comparator<T> = defaultCompare as Comparator<T>,
): [number, number] {
    return [
        lowerBound(array, target, compare),
        upperBound(array, target, compare),
    ];
}
