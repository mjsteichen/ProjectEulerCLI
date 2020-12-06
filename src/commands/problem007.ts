import Command from '../base'
import MathUtils from '../utils/math'

export default class Problem007 extends Command {
  static description = `
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

  What is the 10 001st prime number?
  `

  static flags = {
    ...Command.flags,
  }

  static args = [{name: 'nthPrimeNumber'}]

  async run() {
    const {args} = this.parse(Problem007)
    const nthPrimeNumber = Number(args.nthPrimeNumber)
    const primeNumbers: number[] = [2]
    let number = 2
    while (primeNumbers.length < nthPrimeNumber) {
      number = MathUtils.findNextPrimeNumber(number)
      primeNumbers.push(number)
    }
    this.log(`The ${nthPrimeNumber} (st/nd/rd/th) prime number is ${primeNumbers[primeNumbers.length - 1]}`)
  }
}
