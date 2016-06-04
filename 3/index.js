'use strict'

const input = require('fs').readFileSync(`${__dirname}/input`, 'utf8').trim().split('')

const inc = (map, key) => map.set(key, map.has(key) ? map.get(key) + 1 : 1)

const update = (cursor, key) => {
  let [x, y] = cursor.split('x').map(i => parseInt(i, 10))

  if (key === '^') {
    y += 1
  } else if (key === '>') {
    x += 1
  } else if (key === 'v') {
    y -= 1
  } else if (key === '<') {
    x -= 1
  }

  return [x, y].join('x')
}

const walk = (map, input) => {
  let cursor = '0x0'
  inc(map, cursor)

  input.forEach(key => {
    cursor = update(cursor, key)
    inc(map, cursor)
  })
}

/*
> delivers presents to 2 houses: one at the starting location, and one to the east.
^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.
*/

const moreThanOne = (input) => {
  const houses = new Map()
  walk(houses, input)
  return [...houses.values()].length
}

const roboSanta = (input) => {
  const houses = new Map()
  walk(houses, input.filter((i, idx) => idx % 2 === 0))
  walk(houses, input.filter((i, idx) => idx % 2 !== 0))
  return [...houses.values()].length
}

console.log(`How many houses receive at least one present? ${moreThanOne(input)}`)
console.log(`How many houses receive at least one present with RoboSanta? ${roboSanta(input)}`)
