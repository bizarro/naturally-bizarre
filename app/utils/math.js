/**
 * Constrains a value between a minimum and maximum value.
 */
export function constrain (n, low, high) {
  return Math.max(Math.min(n, high), low)
}

/**
 * Calculates the distance between two points.
 */
export function dist (x1, y1, z1, x2, y2, z2) {
  if (arguments.length === 4) {
    return Math.sqrt((z1 - x1) * (z1 - x1) + (x2 - y1) * (x2 - y1))
  } else if (arguments.length === 6) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1))
  }
}

/**
 * Calculates a number between two numbers at a specific increment. The amt
 * parameter is the amount to interpolate between the two values where 0.0
 * equal to the first point, 0.1 is very near the first point, 0.5 is
 * half-way in between, etc. The lerp function is convenient for creating
 * motion along a straight path and for drawing dotted lines.
 */
export function lerp (start, stop, amt) {
  return amt * (stop - start) + start
}

/**
 * Calculates the magnitude (or length) of a vector. A vector is a direction
 * in space commonly used in computer graphics and linear algebra. Because it
 * has no "start" position, the magnitude of a vector can be thought of as
 * the distance from the coordinate 0,0 to its x,y value. Therefore, mag() is
 * a shortcut for writing dist(0, 0, x, y).
 */
export function mag (x, y) {
  return Math.sqrt(x * x + y * y)
}

/**
 * Re-maps a number from one range to another.
 *
 * In the first example above, the number 25 is converted from a value in the
 * range of 0 to 100 into a value that ranges from the left edge of the
 * window (0) to the right edge (width).
 */
export function map (n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2
}

/**
 * Determines the largest value in a sequence of numbers, and then returns
 * that value. max() accepts any number of Number parameters, or an Array
 * of any length.
 */
export function max () {
  if (arguments[0] instanceof Array) {
    return Math.max.apply(null, arguments[0])
  } else {
    return Math.max.apply(null, arguments)
  }
}

/**
 * Determines the smallest value in a sequence of numbers, and then returns
 * that value. min() accepts any number of Number parameters, or an Array
 * of any length.
 */
export function min () {
  if (arguments[0] instanceof Array) {
    return Math.min.apply(null, arguments[0])
  } else {
    return Math.min.apply(null, arguments)
  }
}

/**
 * Normalizes a number from another range into a value between 0 and 1.
 * Identical to map(value, low, high, 0, 1).
 *
 * Numbers outside of the range are not clamped to 0 and 1, because
 * out-of-range values are often intentional and useful. (See the second
 * example above.)
 */
export function norm (n, start, stop) {
  return this.map(n, start, stop, 0, 1)
}
