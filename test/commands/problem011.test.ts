import { expect, test }  from '@oclif/test'

describe('problem011', () => {
  test
  .stdout()
  .command(['problem011'])
  .it('runs problem011', ctx => {
    expect(ctx.stdout).to.contain('70600674')
  })
})
