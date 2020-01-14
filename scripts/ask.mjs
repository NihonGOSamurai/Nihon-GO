import { createInterface } from 'readline'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
})

export const ask = (label) => {
  return new Promise((resolve) => {
    readline.question(label, (line) => resolve(line))
  })
}
