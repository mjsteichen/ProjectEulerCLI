import {expect, test} from '@oclif/test'

describe('problem009', () => {
  test
  .stdout()
  .command(['problem009', '25'])
  .it('runs problem009 25', ctx => {
    expect(ctx.stdout).to.contain('3, 4, 5')
  })
})
