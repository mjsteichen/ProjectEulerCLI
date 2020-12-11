import Command from '../base'
import MathUtils from '../utils/math'

export default class Problem009 extends Command {
  static description = `
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

  a2 + b2 = c2
  For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
  
  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.
  `

  static flags = {
    ...Command.flags,
  }

  async run() {
    this.parse(Problem009)
    let triplet: number[] = []
    for (let a = 1; a < 1000; a++) {
      const c = ((a ** 2) + 500000 - (1000 * a)) / (1000 - a)
      const b = 1000 - c - a
      if (Number.isInteger(b) && Number.isInteger(c)) {
        triplet = [a, b, c]
        break
      }
    }
    this.log(`The Pythagorean triplet for 1000 is ${triplet}`)
  }
}
