import {expect, test} from '@oclif/test'

describe('problem006', () => {
  test
  .stdout()
  .command(['problem006', '10'])
  .it('runs problem006', ctx => {
    expect(ctx.stdout).to.contain('2640')
  })

  test
  .stdout()
  .command(['problem006', '100'])
  .it('runs problem006', ctx => {
    expect(ctx.stdout).to.contain('25164150')
  })
})
