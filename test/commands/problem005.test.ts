import {expect, test} from '@oclif/test'

describe('problem005', () => {
  test
  .stdout()
  .command(['problem005'])
  .it('runs problem005', ctx => {
    expect(ctx.stdout).to.contain('232792560')
  })
})
