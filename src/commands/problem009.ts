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

  static args = [{name: 'sumOfTriplet'}]

  async run() {
    const {args} = this.parse(Problem009)
    const sumOfTriplet = Number(args.sumOfTriplet)
    let triplet: number[] = []
    for (let a = 1; a < sumOfTriplet; a++) {
      const c = ((a ** 2) + 500000 - (1000 * a)) / (1000 - a)
      const b = sumOfTriplet - c - a
      const areIntegers = Number.isInteger(a) && Number.isInteger(b)
      const isPythagorean = ((a ** 2) + (b ** 2)) === (c ** 2)
      const sumIsFine = a + b + c === sumOfTriplet
      if (areIntegers && sumIsFine && isPythagorean) {
        triplet = [a, b, c]
        break
      }
    }
    this.log(`The Pythagorean triplet for ${sumOfTriplet} is ${triplet}`)
  }
}
// 200 * 375 * 425