/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PROBLEM
 * ─────────────────────────────────────────────────────────────────────────────
 * Given an array of numbers, we need to bucket them into predefined ranges
 * (e.g. 1–5, 6–8, 9–10) and report how many values fall into each interval.
 * Values outside all intervals are ignored.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * SOLUTION
 * ─────────────────────────────────────────────────────────────────────────────
 * We pre-build a lookup map from each possible value to its interval key,
 * then run a single reduce over the input to count occurrences. This avoids
 * repeated interval-checks per element.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THESE STRUCTURES
 * ─────────────────────────────────────────────────────────────────────────────
 * • INTERVALS (readonly + satisfies): Single source of truth. Adding or changing
 *   ranges only touches one place. `as const satisfies` keeps type safety while
 *   preserving literal inference for LOOKUP derivation.
 *
 * • Map for LOOKUP: O(1) lookup per element instead of O(k) linear scan over
 *   intervals. Built once via flatMap + Array.from, then reused for all inputs.
 *
 * • reduce for counting: Single pass, mutates accumulator in place. Idiomatic
 *   for aggregation and avoids multiple iterations over the array.
 *
 * • Record<string, number> return type: Clear, JSON-friendly shape for counts
 *   by interval key. Fits downstream consumption without extra conversion.
 * ─────────────────────────────────────────────────────────────────────────────
 */

interface Interval {
  key: string
  min: number
  max: number
}

const INTERVALS = [
  { key: '1-5', min: 1, max: 5 },
  { key: '6-8', min: 6, max: 8 },
  { key: '9-10', min: 9, max: 10 },
] as const satisfies readonly Interval[]

/** O(1) lookup: pre-built map from value → interval key */
const LOOKUP = new Map(
  INTERVALS.flatMap(({ key, min, max }) =>
    Array.from({ length: max - min + 1 }, (_, i) => [min + i, key] as const)
  )
)

const countByIntervals = (numbers: number[]): Record<string, number> =>
  numbers.reduce<Record<string, number>>((acc, n) => {
    const key = LOOKUP.get(n)
    if (key) acc[key] = (acc[key] ?? 0) + 1
    return acc
  }, {})

const numbers = [6, 1, 8, 9, 10, 7, 4, 2, 100]
const numberCount = countByIntervals(numbers)

console.log({ numberCount })

export {}
