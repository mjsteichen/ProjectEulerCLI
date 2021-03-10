import { expect, test } from '@oclif/test'

describe('problem015', () => {
  test
  .stdout()
  .command(['problem015', '2'])
  .it('runs problem015 2', ctx => {
    expect(ctx.stdout).to.contain('6')
  })

  test
  .stdout()
  .command(['problem015', '3'])
  .it('runs problem015 3', ctx => {
    expect(ctx.stdout).to.contain('20')
  })

  test
  .stdout()
  .command(['problem015', '20'])
  .it('runs problem015 20', ctx => {
    expect(ctx.stdout).to.contain('137846528820')
  })
})
