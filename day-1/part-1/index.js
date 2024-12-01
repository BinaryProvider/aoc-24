const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf8').split('\r\n')

const left = []
const right = []
const diff = []

input.map((row) => {
  const values = row.split('   ')
  left.push(values[0])
  right.push(values[1])
})

left.sort()
right.sort()

for (let i = 0; i < left.length; i++) {
  diff.push(Math.abs(right[i] - left[i]))
}

const sum = diff.reduce((acc, curr) => acc + curr, 0)

console.log(sum)
