import {Command} from '@oclif/command'

export default class Problem001 extends Command {
  static description = `
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
    The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000.
  `

  static args = [{name: 'upperLimit'}]

  async run() {
    const {args} = this.parse(Problem001)
    const upperLimit = Number(args.upperLimit)
    const numbers = [...new Array(upperLimit).keys()]
    const sum =
      numbers
      .filter(x => x % 3 === 0 || x % 5 === 0)
      .reduce((accumulated, next) => accumulated + next)
    this.log(`The sum of all the multiples of 3 or 5 below ${upperLimit} is ${sum}`)
  }
}
