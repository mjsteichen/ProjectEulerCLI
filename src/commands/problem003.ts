import {Command, flags} from '@oclif/command'
import * as moment from 'moment'

export default class Problem003 extends Command {
  static description = `
  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?
  `

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'number'}]

  async run() {
    const {args} = this.parse(Problem003)
    const number = Number(args.number)
    if (number === 0 || number === 1) {
      this.log(`${number} is a special butterfly and is not prime.`)
      return
    }
    if (Math.sign(number) === -1) {
      number * -1
    }
    const t0 = moment()
    const factors = this.getNonTrivialDivisors(number)
    const primeFactors = factors.filter(x => this.isPrime(x))
    // console.log(number, primeFactors)
    let largestPrimeFactor: number
    if (primeFactors.length === 0 && this.isPrime(number)) {
      largestPrimeFactor = number
    } else if (primeFactors.length > 0) {
      largestPrimeFactor = primeFactors[0]
    } else {
      return this.error(`Could not find largest prime factor for ${number}`)
    }
    this.log(`The largest prime factor of ${number} is ${largestPrimeFactor}`)
    const t1 = moment()
    const executionTimeMinutes = moment.duration(t1.diff(t0)).asMinutes()
    this.log(`Execution time (mins): ${executionTimeMinutes}`)
  }

  // TIL that non-trivial divisors is the term for the interesting divisors
  // i.e. divisors that are not: 1, -1, n, and -n
  getNonTrivialDivisors(number: number, isShortCircuitEnabled = false): number[] {
    const factors = []
    const largestPossibleDivisor = Math.floor(number / 2)
    let x = largestPossibleDivisor
    while (x > 1) {
      if (number % x === 0) {
        factors.push(x)
        this.log(`pushing ${x}`)
        if (isShortCircuitEnabled) {
          break
        }
      }
      x--
    }
    return factors
  }

  // How to tell if a number is prime?
  // prime means it is only divisible by 1 and itself
  // so all even numbers are by nature not prime
  isPrime(number: number): boolean {
    if (number <= 1) {
      this.warn(`${number} is a special case when it comes to prime numbers. Best consult a mathematician.`)
      return false
    }
    if (number === 2) {
      return true
    }
    const divisors = this.getNonTrivialDivisors(number, true)
    const isPrime = divisors.length === 0
    return number % 2 !== 0 && isPrime
  }
}
