import Command, { flags } from '@oclif/command'
import * as moment from 'moment'

export default abstract class extends Command {
  static flags = {
    help: flags.help({char: 'h'}),
  }

  public startTime: moment.Moment = moment()

  async finally(err: Error) {
    const executionTimeMilliseconds = moment.duration(moment().diff(this.startTime)).asMilliseconds()
    this.log(`Execution time (ms): ${executionTimeMilliseconds}`)
    return super.finally(err)
  }
}
