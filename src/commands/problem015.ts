import Command from '../base'
import math from '../utils/math'

type Tree = {
  x: number;
  y: number;
  left: Tree | null;
  right: Tree | null;
};

export default class Problem015 extends Command {
  static description = `
  Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

  How many such routes are there through a 20×20 grid?
  `

  static flags = {
    ...Command.flags,
  }

  static args = [{ name: 'squareSideLength' }]

  async run() {
    const { args } = this.parse(Problem015)
    const squareSideLength = Number(args.squareSideLength)

    /*
      NOTE (steichen) This one I had to wave the white flag on. On the bright side I learned some new stuff about math, including
      Pascal's triangle and Binomial coefficients.
      This problem can be boiled down to:
      n! / (r! * (n -r)!) where
      n = 2 * squareSideLength
      r = squareSideLength
     */
    const rowIndexOfPascalsTriangle = 2 * squareSideLength
    const columnIndexOfPascalsTriangle = squareSideLength
    const total = math.factorial(rowIndexOfPascalsTriangle) / (math.factorial(columnIndexOfPascalsTriangle) * math.factorial(rowIndexOfPascalsTriangle - columnIndexOfPascalsTriangle))
    this.log(`The total number of routes to the bottom right corner of a ${squareSideLength} x ${squareSideLength} grid is ${total}`)
  }
}
