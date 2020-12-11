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
    const primes: number[] = [2]
    let number = 2
    while (number < upperBound) {
      const nextPrime = MathUtils.findNextPrimeNumber(number)
      if (nextPrime >= upperBound) {
        break
      } else {
        primes.push(nextPrime)
        number = nextPrime
      }
    }
    const sum = primes.reduce((accumulated, next) => accumulated + next)
    this.log(`The sum of all the primes below ${upperBound} is ${sum}`)
  }
}
