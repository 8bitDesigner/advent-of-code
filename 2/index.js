'use strict'

const input = require('fs').readFileSync(`${__dirname}/input`, 'utf8').trim().split('\n')

const asc = (a, b) => a < b ? -1 : a > b ? 1 : 0
const sum = (a, b) => a ? a + b : b
const dbl = (a) => a * 2

const toFeet = (cur, input) => {
  const [l, w, h] = input.split('x').map(i => parseInt(i, 0))
  const sides = [l * w, w * h, h * l]

  return cur + sides.map(dbl).reduce(sum) + Math.min(...sides)
}

/*
 *
The ribbon required to wrap a present is the shortest distance around its sides,
or the smallest perimeter of any one face. Each present also requires a bow made
out of ribbon as well; the feet of ribbon required for the perfect bow is equal
to the cubic feet of volume of the present. Don't ask how they tie the bow,
though; they'll never tell.
*/

const toRibbon = (cur, input) => {
  const [l, w, h] = input.split('x').map(i => parseInt(i, 0))

  return cur + [l, w, h].sort(asc).slice(0, 2).map(dbl).reduce(sum) + (l * w * h)
}

console.log(`We need ${input.reduce(toFeet, 0)} feet of wrapping paper`)
console.log(`We need ${input.reduce(toRibbon, 0)} feet of ribbon`)
