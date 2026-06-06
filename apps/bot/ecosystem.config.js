// process.env here is evaluated by Node when PM2 reads this file (the PM2
// daemon's own env). Whatever values are present at that point get baked
// into the env passed to the spawned bot process. The Barkeep webhook
// reads these via process.env at runtime; without explicit passthrough,
// PM2 children don't see them and the webhook silently no-ops.
const passthrough = (...names) =>
  names.reduce((acc, name) => {
    if (process.env[name] !== undefined) acc[name] = process.env[name];
    return acc;
  }, {});

const sharedEnv = passthrough('BARKEEP_WEBHOOK_URL', 'BARKEEP_WEBHOOK_SECRET');

module.exports = {
  apps: [
    {
      name: 'Craig',
      script: 'dist/sharding/index.js',
      wait_ready: true,
      kill_timeout: 3000,
      env: {
        NODE_ENV: 'development',
        ...sharedEnv
      },
      env_production: {
        NODE_ENV: 'production',
        ...sharedEnv
      }
    }
  ]
};
