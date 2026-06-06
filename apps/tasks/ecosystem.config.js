// process.env here is evaluated by Node when PM2 reads this file (i.e. the
// PM2 daemon's own env). Whatever values are present then get baked into
// the env passed to the spawned process. Without explicitly passing these
// through, PM2 children only saw NODE_ENV and missed the cloud-upload
// credentials, which silently broke every Drive upload.
const passthrough = (...names) =>
  names.reduce((acc, name) => {
    if (process.env[name] !== undefined) acc[name] = process.env[name];
    return acc;
  }, {});

const sharedEnv = passthrough(
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'MICROSOFT_CLIENT_ID',
  'MICROSOFT_CLIENT_SECRET',
  'DROPBOX_CLIENT_ID',
  'DROPBOX_CLIENT_SECRET',
  'PATREON_CLIENT_ID',
  'PATREON_CLIENT_SECRET',
  'PATREON_WEBHOOK_SECRET',
  'PATRON_TIER_MAP'
);

module.exports = {
  apps: [
    {
      name: 'Craig Tasks',
      script: 'dist/index.js',
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
