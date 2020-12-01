import {expect, test} from '@oclif/test'

describe('problem004', () => {
  test
  .stdout()
  .command(['problem004'])
  .it('runs problem004', ctx => {
    expect(ctx.stdout).to.contain('906609')
  })
})
