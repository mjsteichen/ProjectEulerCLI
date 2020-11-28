import {expect, test} from '@oclif/test'

describe('problem003', () => {
  test
  .stdout()
  .command(['problem003', '3'])
  .it('runs problem003 3', ctx => {
    expect(ctx.stdout).to.contain('3')
  })

  test
  .stdout()
  .command(['problem003', '16'])
  .it('runs problem003 16', ctx => {
    expect(ctx.stdout).to.contain('2')
  })

  test
  .stdout()
  .command(['problem003', '87'])
  .it('runs problem003 87', ctx => {
    expect(ctx.stdout).to.contain('29')
  })

  test
  .stdout()
  .command(['problem003', '13195'])
  .it('runs problem003 13195', ctx => {
    expect(ctx.stdout).to.contain('29')
  })

  test
  .stdout()
  .command(['problem003', '13734'])
  .it('runs problem003 13734', ctx => {
    expect(ctx.stdout).to.contain('109')
  })

  test
  .stdout()
  .command(['problem003', '999670'])
  .it('runs problem003 999670', ctx => {
    expect(ctx.stdout).to.contain('14281')
  })

  // test
  // .stdout()
  // .command(['problem003', '600851475143'])
  // .it('runs problem003 600851475143', ctx => {
  //   expect(ctx.stdout).to.contain('29')
  // })
})
