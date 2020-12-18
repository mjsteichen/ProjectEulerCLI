import {expect, test} from '@oclif/test'

describe('problem011', () => {
  test
  .stdout()
  .command(['problem011', '10'])
  .it('runs problem011 10', ctx => {
    expect(ctx.stdout).to.contain('23')
  })
})
