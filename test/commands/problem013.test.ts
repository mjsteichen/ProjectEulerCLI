import { expect, test } from '@oclif/test'
describe('problem013', () => {
  test
  .stdout()
  .command(['problem013'])
  .it('runs problem013', ctx => {
    expect(ctx.stdout).to.contain('5537376230')
  })
})
