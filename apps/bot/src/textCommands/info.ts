import { stripIndents } from 'common-tags';
import { CommandContext, DexareClient } from 'dexare';

import TextCommand, { replyOrSend } from '../util';

export default class InfoCommand extends TextCommand {
  constructor(client: DexareClient<any>) {
    super(client, {
      name: 'info'
    });

    this.filePath = __filename;
  }

  async run(ctx: CommandContext) {
    await replyOrSend(ctx, {
      content: stripIndents`
        ${this.emojis.getMarkdown('craig')} **Chronicler** is a multi-track voice channel recorder for tabletop roleplaying sessions.
        This server is on shard ${this.client.shard?.id ?? process.env.SHARD_ID} with ${
        this.client.shard?.latency ?? '<unknown>'
      } milliseconds of latency.
      `
    });
  }
}
