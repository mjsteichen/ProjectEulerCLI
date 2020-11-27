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
    const t0 = moment()
    const factors = this.getDivisors(number)
    const primeFactors = factors.filter(x => this.isPrime(x))
    const largestPrimeFactor = primeFactors[primeFactors.length - 1]
    this.log(`The largest prime factor of ${number} is ${largestPrimeFactor}`)
    const t1 = moment()
    const executionTimeMinutes = moment.duration(t1.diff(t0)).asMinutes()
    this.log(`Execution time (mins): ${executionTimeMinutes}`)
  }

  // how to get multiples of a number.
  // 1 and itself are always multiples
  // other than that, starting at 1, go up to number/2,
  // testing to see if that number has a remainder using modulus
  getDivisors(number: number): number[] {
    if (number === 0) {
      return []
    }
    const factors = []
    let x = 1
    while (x <= (number / 2)) {
      if (number % x === 0) {
        factors.push(x)
      }
      x++
    }
    factors.push(number) // a number is always divisble by itself
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
    const divisors = this.getDivisors(number)
    const primeCandidates = divisors.filter(x => x !== 1 && x !== number)
    const isPrime = primeCandidates.length === 0
    return number % 2 !== 0 && isPrime
  }
}
