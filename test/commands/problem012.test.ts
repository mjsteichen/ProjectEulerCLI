import { expect, test } from '@oclif/test'

describe('problem012', () => {
  test
  .stdout()
  .command(['problem012', '5'])
  .it('runs problem012 5', ctx => {
    expect(ctx.stdout).to.contain('28')
  })

  test
  .stdout()
  .command(['problem012', '10'])
  .it('runs problem012 10', ctx => {
    expect(ctx.stdout).to.contain('120')
  })

  test
  .stdout()
  .command(['problem012', '500'])
  .it('runs problem012 500', ctx => {
    expect(ctx.stdout).to.contain('76576500')
  })
})
