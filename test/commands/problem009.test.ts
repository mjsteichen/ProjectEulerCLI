import {expect, test} from '@oclif/test'

describe('problem009', () => {
  test
  .stdout()
  .command(['problem009'])
  .it('runs problem009', ctx => {
    expect(ctx.stdout).to.contain('200,375,425')
  })
})
