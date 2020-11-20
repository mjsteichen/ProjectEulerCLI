import {expect, test} from '@oclif/test'

describe('problem001', () => {
  test
  .stdout()
  .command(['problem001', '1000'])
  .it('runs problem001 1000', ctx => {
    expect(ctx.stdout).to.contain('233168')
  })

  test
  .stdout()
  .command(['problem001', '10'])
  .it('runs problem001 10', ctx => {
    expect(ctx.stdout).to.contain('23')
  })
})
