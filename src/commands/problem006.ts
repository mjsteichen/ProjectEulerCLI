import {Command, flags} from '@oclif/command'
import * as moment from 'moment'

export default class Problem006 extends Command {
  static description = `
  The sum of the squares of the first ten natural numbers is 385.

  The square of the sum of the first ten natural numbers is 3025.
  
  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
  
  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
  `

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'upperLimit'}]

  async run() {
    const {args} = this.parse(Problem006)
    const upperLimit = Number(args.upperLimit)
    const t0 = moment()
    let sum = 0
    let sumOfSquares = 0
    for (let i = 1; i <= upperLimit; i++) {
      sumOfSquares += i ** 2
      sum += i
    }
    const squareOfSums = sum ** 2
    const difference = squareOfSums - sumOfSquares
    this.log(`The difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is ${difference}`)
    const t1 = moment()
    const executionTimeMilliseconds = moment.duration(t1.diff(t0)).asMilliseconds()
    this.log(`Execution time (ms): ${executionTimeMilliseconds}`)
  }
}
