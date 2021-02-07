import { expect, test } from '@oclif/test'

describe('problem014', () => {
  test
  .stdout()
  .command(['problem014', '10'])
  .it('runs problem014 10', ctx => {
    expect(ctx.stdout).to.contain('9')
  })

  test
  .stdout()
  .command(['problem014', '1000'])
  .it('runs problem014 1000', ctx => {
    expect(ctx.stdout).to.contain('871')
  })
})
