import {expect, test} from '@oclif/test'

describe('problem002', () => {
  test
  .stdout()
  .command(['problem002', '25'])
  .it('runs problem002 25', ctx => {
    expect(ctx.stdout).to.contain('10')
  })

  test
  .stdout()
  .command(['problem002', '100'])
  .it('runs problem002 100', ctx => {
    expect(ctx.stdout).to.contain('44')
  })

  test
  .stdout()
  .command(['problem002', '4000000'])
  .it('runs problem002 4000000', ctx => {
    expect(ctx.stdout).to.contain('4613732')
  })
})
