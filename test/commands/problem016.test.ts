import { expect, test } from '@oclif/test'

describe('problem016', () => {
  test
    .stdout()
    .command(['problem016', '2', '3'])
    .it('runs problem016 2 3', ctx => {
      expect(ctx.stdout).to.contain('8')
    })

  test
    .stdout()
    .command(['problem016', '3', '3'])
    .it('runs problem016 3 3', ctx => {
      expect(ctx.stdout).to.contain('9')
    })

  test
    .stdout()
    .command(['problem016', '4', '4'])
    .it('runs problem016 4 4', ctx => {
      expect(ctx.stdout).to.contain('13')
    })

  test
    .stdout()
    .command(['problem016', '2', '1000'])
    .it('runs problem016 2 1000', ctx => {
      expect(ctx.stdout).to.contain('1366')
    })
})
