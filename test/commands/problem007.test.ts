import {expect, test} from '@oclif/test'

describe('problem007', () => {
  test
  .stdout()
  .command(['problem007', '1'])
  .it('runs problem007 1', ctx => {
    expect(ctx.stdout).to.contain('2')
  })

  test
  .stdout()
  .command(['problem007', '2'])
  .it('runs problem007 2', ctx => {
    expect(ctx.stdout).to.contain('3')
  })

  test
  .stdout()
  .command(['problem007', '6'])
  .it('runs problem007 6', ctx => {
    expect(ctx.stdout).to.contain('13')
  })

  test
  .stdout()
  .command(['problem007', '7'])
  .it('runs problem007 7', ctx => {
    expect(ctx.stdout).to.contain('17')
  })

  test
  .stdout()
  .command(['problem007', '8'])
  .it('runs problem007 8', ctx => {
    expect(ctx.stdout).to.contain('19')
  })

  test
  .stdout()
  .command(['problem007', '10001'])
  .it('runs problem007 10001', ctx => {
    expect(ctx.stdout).to.contain('104743')
  })
})
