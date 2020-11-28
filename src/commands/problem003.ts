import {Command, flags} from '@oclif/command'
import * as moment from 'moment'

type Tree<T> = {
  value: T;
  left?: T;
  right?: Tree<T>;
};

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
    let largestPrimeFactor
    if (number === 0 || number === 1) {
      this.log(`${number} is a special butterfly and is not prime.`)
      return
    }
    if (Math.sign(number) === -1) {
      number * -1
    }
    const t0 = moment()
    if (this.isPrime(number)) {
      largestPrimeFactor = number
    } else {
      let divisor = 2
      while (number % divisor !== 0) {
        divisor = this.findNextPrimeNumber(divisor)
      }
      const primeFactorialTree: Tree<number> = {
        value: number,
        left: divisor,
        right: {
          value: number / divisor,
        },
      }
      largestPrimeFactor = this.findLargestPrimeFactor(primeFactorialTree)
    }
    this.log(`The largest prime factor of ${number} is ${largestPrimeFactor}`)
    const t1 = moment()
    const executionTimeMinutes = moment.duration(t1.diff(t0)).asSeconds()
    this.log(`Execution time (mins): ${executionTimeMinutes}`)
  }

  findLargestPrimeFactor(tree: Tree<number>): number {
    if (this.isPrime(tree.right!.value)) {
      return tree.right!.value
    }
    this.log(`Looking at ${tree.right!.value}`)
    let divisor = tree.left!
    while (tree.right!.value % divisor !== 0) {
      divisor = this.findNextPrimeNumber(divisor)
    }
    const newTree: Tree<number> = {
      value: tree.right!.value,
      left: divisor,
      right: {
        value: tree.right!.value / divisor,
      },
    }
    return this.findLargestPrimeFactor(newTree)
  }

  findNextPrimeNumber(num: number) {
    let x = num + 1
    while (!this.isPrime(x)) {
      x++
    }
    return x
  }

  // TIL that non-trivial divisors is the term for the "interesting" divisors
  // i.e. divisors that are not: 1, -1, n, and -n
  getDivisors(number: number): number[] {
    const factors: number[] = []
    if (number === 0) {
      return factors
    }
    let x = 1
    while (x <= (number / 2)) {
      if (number % x === 0) {
        factors.push(x)
      }
      x++
    }
    factors.push(number)
    return factors
  }

  // How to tell if a number is prime?
  // prime means it is only divisible by 1 and itself
  // so all even numbers are by nature not prime
  isPrime(number: number): boolean {
    if (number <= 1) {
      this.warn(`${number} is a special case when it comes to prime numbers (hint: it's not). Best consult a mathematician.`)
      return false
    }
    if (number % 2 === 0 && number !== 2) {
      return false
    }
    return this.getDivisors(number).length === 2
  }
}
