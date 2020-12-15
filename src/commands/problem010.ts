import Command from '../base'
import MathUtils from '../utils/math'

export default class Problem010 extends Command {
  static description = `
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
  `

  static flags = {
    ...Command.flags,
  }

  static args = [{name: 'upperBound'}]

  async run() {
    const {args} = this.parse(Problem010)
    const upperBound = Number(args.upperBound)
    let sum = 0
    let num = 2
    while (num < upperBound) {
      if (MathUtils.isPrime(num)) {
        sum += num
      }
      num++
    }
    this.log(`The sum of all the primes below ${upperBound} is ${sum}`)
  }
}
