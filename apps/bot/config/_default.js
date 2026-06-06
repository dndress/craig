const Eris = require('eris');
module.exports = {
  // Redis, leave blank to connect to localhost:6379 with "craig:" as the prefix
  redis: {
    host: 'redis',
    port: 6379,
    keyPrefix: 'craig:'
  },
  sharding: {
    file: './index.js',
    // The amount of shards to spawn in sharding mode
    shardCount: 2,
    // The amount of time to wait for a ready
    readyTimeout: 60000
  },
  // InfluxDB options
  influx: false,
  // influx: {
  //   url: 'https://influx.example.com',
  //   token: '',
  //   org: 'discord',
  //   bucket: 'craig',
  //   server: 'dev',
  //   bot: 'craig'
  // },
  // Sentry options
  sentry: false,
  // sentry: {
  //   dsn: 'https://xxxxxxxxxxxxxx@sentry.io/1',
  //   env: 'development',
  //   sampleRate: 1.0
  // },
  dexare: {
    // Bot token
    token: '',
    // Application ID
    applicationID: '',
    /** @type {Eris.ClientOptions} */
    erisOptions: {
      autoreconnect: true,
      allowedMentions: {
        everyone: false,
        roles: false,
        users: true
      },
      defaultImageFormat: 'png',
      defaultImageSize: 256,
      messageLimit: 0,
      gateway: {
        maxShards: 1,
        intents: ['guilds', 'guildMessages', 'guildVoiceStates'],
        requestTimeout: 15000
      }
    },
    // Users who can eval
    elevated: ['158049329150427136'],
    prefix: ['craig', ':craig:', 'craig,', ':craig:,'],
    mentionPrefix: true,
    craig: {
      // The craig emoji ID
      emoji: '297187944295301122',
      // The protocol to get downloads from
      downloadProtocol: 'https',
      // The domain to get downloads from
      downloadDomain: 'localhost:5029',
      // The homepage of the bot
      homepage: 'https://chronicler.andres-invents.cloud',
      // The dashboard URL
      dashboardURL: 'https://chronicler.andres-invents.cloud',
      // Record disk size limit, in bytes
      sizeLimit: 536870912,
      // Record disk size limit for Opus web users, in bytes
      sizeLimitWebOpus: 1073741824,
      // Record disk size limit for FLAC web users, in bytes
      hardLimitWeb: 4294967296,
      // Whether to remove the nickname after finishing the recording
      removeNickname: true,
      // Whether to recognize alistair emojis instead of craig emojis
      alistair: false,
      // The folder to put recordings in
      recordingFolder: '../../rec',
      // Self-host: list of format values (matching dashboard dropdown) to
      // upload per recording. When set, the requester's saved dashboard
      // format preference is ignored and the recording is uploaded once per
      // entry in this list. Leave null/empty for upstream behavior (one
      // upload using the user's saved format).
      driveFormats: ['flac-zip', 'mp3'],
      // Webapp settings
      webapp: {
        on: true,
        url: 'ws://localhost:9001/shard',
        token: '1234',
        // connectUrl: 'https://web.craig.chat?id={id}&key={key}',
        connectUrl: 'http://localhost:5000?id={id}&key={key}'
      },
      rewardTiers: {
        [0]: {
          recordHours: 24,
          downloadExpiryHours: 720,
          features: ['mix', 'auto', 'drive', 'glowers', 'eccontinuous', 'ecflac', 'mp3'],
          sizeLimitMult: 5
        }
      }
    },
    status: {
      type: 4, // [custom status]
      name: 'chronicler',
      state: 'Recording your sessions'
    },
    logger: {
      level: 'debug'
    },
    slash: {
      creator: {
        allowedMentions: {
          everyone: false,
          roles: false,
          users: true
        },
        defaultImageFormat: 'png',
        defaultImageSize: 256
      }
    }
  },
  commandsPath: './textCommands'
};
