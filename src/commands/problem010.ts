import Command from '../base'
import MathUtils from '../utils/math'
type Sieve = Map<number, boolean | null>

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
    const sieve: Sieve = new Map()
    this.populateSieve(sieve, upperBound)
    const result = this.sieveCompositeNumbers(sieve, 2)
    // console.log(result)
    const primes: number[] = [...result.entries()].filter(x => x[1]).map(x => x[0])
    // console.log(primes)
    const sum = primes.reduce((accumulated, next) => accumulated + next)
    this.log(`The sum of all the primes below ${upperBound} is ${sum}`)
  }

  // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
  populateSieve(sieve: Sieve, upperBound: number) {
    for (let n = 2; n < upperBound; n++) {
      sieve.set(n, null)
    }
    return sieve
  }

  sieveCompositeNumbers(sieve: Sieve, currentNumber: number): Sieve {
    const areOnlyPrimesLeft = [...sieve.entries()]
    .filter(entry => entry[0] > currentNumber)
    .every(entry => entry[1] === true) // if any one of these is notPrime, keep sievin' buddy
    if (areOnlyPrimesLeft) { // if each number in the sieve that is greater than currentNumber is a prime
      return sieve // return all the prime numbers
    }
    sieve.set(currentNumber, true)// mark currentNumber as prime
    // go through the sieve and get all those where x > currentNumber && x % currentNumber === 0
    // mark those as isPrime = false
    const composites = [...sieve.entries()]
    .filter(entry => entry[0] > currentNumber && entry[0] % currentNumber === 0)
    .forEach(entry => sieve.set(entry[0], false))
    const nextPrime = MathUtils.findNextPrimeNumber(currentNumber)
    return this.sieveCompositeNumbers(sieve, nextPrime)
  }
}
