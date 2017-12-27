export function randomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

export function randomInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomNormalized () {
  let x1, x2, rad

  do {
    x1 = 2 * Math.random() - 1
    x2 = 2 * Math.random() - 1

    rad = (x1 * x1) + (x2 * x2)
  } while (rad >= 1 || rad === 0)

  const c = Math.sqrt(-2 * Math.log(rad) / rad)

  return x1 * c
}
