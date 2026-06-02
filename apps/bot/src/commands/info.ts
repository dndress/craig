import { stripIndents } from 'common-tags';
import { CommandContext, SlashCreator } from 'slash-create';

import { processCooldown } from '../redis';
import GeneralCommand from '../slashCommand';
import { checkBan } from '../util';

export default class Info extends GeneralCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'info',
      description: 'Get information and statistics about this bot.',
      deferEphemeral: true
    });

    this.filePath = __filename;
  }

  async run(ctx: CommandContext) {
    if (await checkBan(ctx.user.id))
      return {
        content: 'You are not allowed to use the bot at this time.',
        ephemeral: true
      };

    const userCooldown = await processCooldown(`command:${ctx.user.id}:${this.client?.bot?.user?.id}`, 5, 3);
    if (userCooldown !== true) {
      this.client.commands.logger.warn(
        `${ctx.user.username}#${ctx.user.discriminator} (${ctx.user.id}) tried to use the info command, but was ratelimited.`
      );
      return {
        content: 'You are running commands too often! Try again in a few seconds.',
        ephemeral: true
      };
    }

    const [guildCount, recordings] = await this.sharding.getCounts();

    return {
      content: stripIndents`
        ${this.emojis.getMarkdown('craig')} **Chronicler** is a multi-track voice channel recorder for tabletop roleplaying sessions.
        I am currently recording **${recordings.toLocaleString()}** conversations across **${guildCount.toLocaleString()}** guilds.

        This server is on shard ${this.client.shard?.id ?? process.env.SHARD_ID} with ${
        this.client.shard?.latency ?? '<unknown>'
      } milliseconds of latency.
      `,
      ephemeral: true
    };
  }
}
