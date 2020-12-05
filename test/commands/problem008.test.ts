import {expect, test} from '@oclif/test'

describe('problem008', () => {
  test
  .stdout()
  .command(['problem008', '4'])
  .it('runs problem008 4', ctx => {
    expect(ctx.stdout).to.contain('5832')
  })

  test
  .stdout()
  .command(['problem008', '13'])
  .it('runs problem008 13', ctx => {
    expect(ctx.stdout).to.contain('23514624000')
  })
})
