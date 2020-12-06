import Command from '../base'
import MathUtils from '../utils/math'

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
    ...Command.flags,
  }

  static args = [{name: 'number'}]

  async run() {
    const {args} = this.parse(Problem003)
    let number = Number(args.number)
    let largestPrimeFactor: number
    if (number === 0 || number === 1) {
      this.log(`${number} is complicated; best consult a mathematician.`)
      return
    }
    if (Math.sign(number) === -1) {
      number *= -1
    }
    if (MathUtils.isPrime(number)) {
      largestPrimeFactor = number
    } else {
      let divisor = 2
      while (number % divisor !== 0) {
        divisor = MathUtils.findNextPrimeNumber(divisor)
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
  }

  findLargestPrimeFactor(tree: Tree<number>): number {
    const rightLeaf = tree.right!.value
    if (MathUtils.isPrime(rightLeaf)) {
      return rightLeaf
    }
    let divisor = tree.left!
    while (rightLeaf % divisor !== 0) {
      divisor = MathUtils.findNextPrimeNumber(divisor)
    }
    const newTree: Tree<number> = {
      value: rightLeaf,
      left: divisor,
      right: {
        value: rightLeaf / divisor,
      },
    }
    return this.findLargestPrimeFactor(newTree)
  }
}
