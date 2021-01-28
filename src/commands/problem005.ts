import Command from '../base'

export default class Problem005 extends Command {
  static description = `
  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
  `

  static flags = {
    ...Command.flags,
  }

  async run() {
    this.parse(Problem005)
    // NOTE: is there any way to not just loop from 1 to infinity?
    // It takes about a second as is to run.
    // I'm sure there is a more clever way to go about this since so many
    // numbers share divisors: e.g., 20 is evenly divisible by 1, 2, 5, 10 and 20.
    // So perhaps we can eliminate some repetition there.
    const divisors = Array.from({ length: 20 }, (_, i) => i + 1).reverse()
    let number = 20
    while (!divisors.every(x => number % x === 0)) {
      number += 2
    }
    this.log(`Smallest number evenly divisble by 1..20 is ${number}`)
  }
}
