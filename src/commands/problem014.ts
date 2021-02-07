import Command from '../base'

export default class Problem014 extends Command {
  static description = `
  The following iterative sequence is defined for the set of positive integers:

  n → n/2 (n is even)
  n → 3n + 1 (n is odd)
  
  Using the rule above and starting with 13, we generate the following sequence:
  
  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
  It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
  
  Which starting number, under one million, produces the longest chain?
  
  NOTE: Once the chain starts the terms are allowed to go above one million.
  `

  static flags = {
    ...Command.flags,
  }

  static args = [{ name: 'upperLimit' }]

  async run() {
    const { args } = this.parse(Problem014)
    const upperLimit = Number(args.upperLimit)
    const numberChains = new Map<number, number[]>()

    for (let num = 1; num < upperLimit; num++) {
      numberChains.set(num, this._getCollatzSequence([num]))
    }

    const chainsSortedDesc = [...numberChains.entries()].sort((a, b) => b[1].length - a[1].length)
    const longestChain = chainsSortedDesc[0]
    const number = longestChain[0]
    this.log(`The starting number under ${upperLimit} that produces the longest chain is ${number}`)
  }

  private _getCollatzSequence(sequence: number []): number[] {
    const lastNumber = sequence[sequence.length - 1]
    if (lastNumber === 1) {
      return sequence
    }
    const isEven = lastNumber % 2 === 0
    const nextNumber = isEven ? lastNumber / 2 : (lastNumber * 3) + 1
    sequence.push(nextNumber)
    return this._getCollatzSequence(sequence)
  }
}
