import Command from '../base'
import * as moment from 'moment'
type Answer = {
  multiplicand: number;
  multiplier: number;
}
export default class Problem004 extends Command {
  static description = `
  A palindromic number reads the same both ways.
  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two 3-digit numbers.
  `

  static flags = {
    ...Command.flags,
  }

  async run() {
    this.parse(Problem004)
    const t0 = moment()
    const upperBound = 999 * 999
    const palindromicNumbers = []
    for (let i = upperBound; i > 0; i--) {
      const stringified = i.toString()
      if (stringified === this.reverseString(stringified)) {
        palindromicNumbers.push(i)
      }
    }
    let answer: Answer | null = null
    for (const n of palindromicNumbers) {
      answer = this.findThreeDigitDivisors(n)
      if (answer !== null) {
        break
      }
    }
    if (answer) {
      this.log(`Largest palindrome made from product of two 3 digit numbers is ${answer.multiplicand * answer.multiplier} = ${answer.multiplicand} * ${answer.multiplier}`)
    } else {
      this.error('Could not find palindrome')
    }
    const t1 = moment()
    const executionTimeMilliseconds = moment.duration(t1.diff(t0)).asMilliseconds()
    this.log(`Execution time (ms): ${executionTimeMilliseconds}`)
  }

  private findThreeDigitDivisors(n: number): Answer | null {
    let answer = null
    for (let i = 999; i >= 100; i--) {
      const isEvenlyDivisible = n % i === 0
      const multiplicandIsThreeDigits = i.toString().length === 3
      const multiplierIsThreeDigits = (n / i).toString().length === 3
      if (isEvenlyDivisible && multiplicandIsThreeDigits && multiplierIsThreeDigits) {
        answer = {
          multiplier: (n / i),
          multiplicand: i,
        }
        break
      }
    }
    return answer
  }

  private reverseString(str: string) {
    return str
    .split('')
    .reverse()
    .join('')
  }
}
