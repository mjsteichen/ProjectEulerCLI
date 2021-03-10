import Command from '../base'

export default class Problem016 extends Command {
  static description = `
  2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

  What is the sum of the digits of the number 2^1000?
  `

  static flags = {
    ...Command.flags,
  }

  static args = [{ name: 'base' }, { name: 'exponent' }]

  async run() {
    const { args } = this.parse(Problem016)
    const exponent = Number(args.exponent)
    const base = Number(args.base)
    let product = 1
    for (let i = 1; i <= exponent; i++) {
      product *= base
    }
    const sumOfDigits = product
      .toString()
      .split('')
      .map(x => Number(x))
      .reduce((previous, current) => previous + current, 0)
    this.log(`The sum of the digits of the number ${base} to the power of ${exponent} is ${sumOfDigits}`)
  }
}
