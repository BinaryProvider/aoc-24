const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf8').split('\r\n')

const left = []
const right = []

input.map((row) => {
  const values = row.split('   ')
  left.push(values[0])
  right.push(values[1])
})

left.sort()
right.sort()

let similarityScore = 0

for (let i = 0; i < left.length; i++) {
  const count = right.filter((value) => value === left[i]).length
  if (count > 0) {
    similarityScore += left[i] * count
  }
}

console.log(similarityScore)
