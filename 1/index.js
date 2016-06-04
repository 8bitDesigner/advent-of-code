'use strict'

const floors = require('fs').readFileSync(`${__dirname}/input`, 'utf8').trim().split('')

const delivery = (cur, f) => f === '(' ? cur + 1 : cur - 1

const firstNegativeIndex = (input) => {
  let floor = 0
  let firstNegative

  input.forEach((f, idx) => {
    if (firstNegative) {
      return
    } else {
      floor = f === '(' ? floor + 1 : floor - 1

      if (floor < 0) {
        firstNegative = idx + 1
      }
    }
  })

  return firstNegative
}

console.log(`Delivery floor is: ${floors.reduce(delivery, 0)}`)
console.log(`First negative index is: ${firstNegativeIndex(floors)}`)
