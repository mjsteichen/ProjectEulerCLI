import Command from '../base'

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
      At each point I can ask myself whether I can go "right" or "down".
      If my current vertical position - 1 is on the grid, I can go "right"
      If my current horizontal position + 1 is on the grid, I can go "down"
      If there isn't something to my "right" or something to my "down", I know that I have arrived at the bottom-right terminus.
      Need to know which routes we have already gone down.
     */
    const square = Array.from({ length: squareSideLength + 1 }, () => [...new Array(squareSideLength + 1).keys()])
    console.log(square[0])
    console.log(square[1])
    console.log(square[2])
    const total = 1
    this.log(`The total number of routes to the bottom right corner of a ${squareSideLength} x ${squareSideLength} grid is ${total}`)
  }
}
