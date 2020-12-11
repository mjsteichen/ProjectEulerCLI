import {expect, test} from '@oclif/test'

describe('problem010', () => {
  test
  .stdout()
  .command(['problem010', '10'])
  .it('runs problem010 10', ctx => {
    expect(ctx.stdout).to.contain('17')
  })

  test
  .stdout()
  .command(['problem010', '97'])
  .it('runs problem010 97', ctx => {
    expect(ctx.stdout).to.contain('963')
  })

  test
  .stdout()
  .command(['problem010', '100'])
  .it('runs problem010 100', ctx => {
    expect(ctx.stdout).to.contain('1060')
  })
})
