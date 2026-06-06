import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy · Chronicler</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="og:site_name" content="Chronicler" />
        <meta name="og:title" content="Privacy Policy · Chronicler" />
        <meta name="og:description" content="Privacy policy for Chronicler, a multi-track recording bot for Discord." />
        <meta name="og:locale" content="en_US" />
        <meta name="og:image" content="/android-chrome-512x512.png" />
        <meta name="msapplication-TileColor" content="#2dd4bf" />
        <meta name="theme-color" content="#2dd4bf" />
      </Head>
      <div className="min-h-screen bg-gradient-to-t from-neutral-800 to-zinc-900 text-white font-body flex items-center justify-center flex-col py-12 sm:px-12">
        <div className="bg-zinc-700 sm:rounded flex justify-center items-center sm:shadow-md w-full flex-col sm:w-4/5 sm:max-w-4xl">
          <h1 className="text-3xl flex justify-center p-3 gap-4 items-center relative bg-black bg-opacity-20 w-full font-body">
            <img crossOrigin="anonymous" src="/android-chrome-512x512.png" className="w-12 h-12 rounded-full" />
            <span>Privacy Policy</span>
          </h1>
          <div className="flex flex-col p-6 gap-4 w-full text-sm sm:text-base leading-relaxed">
            <p className="text-zinc-400 text-xs">Last updated: {new Date().toISOString().slice(0, 10)}</p>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">Overview</h2>
              <p>
                Chronicler ("the service") is a private, self-hosted Discord bot that records voice
                channels at the request of users with permission to do so. This policy explains what
                information the service collects, how it is used, and how it is protected. By using the
                service you agree to the terms below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">Information We Collect</h2>
              <p className="mb-2">When you interact with Chronicler, the following may be stored:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Your Discord user ID, username, and avatar URL, as provided by Discord.</li>
                <li>The Discord server (guild) and voice channel IDs where recordings are started.</li>
                <li>
                  Audio recordings of voice channels you participate in while a Chronicler recording is
                  active.
                </li>
                <li>
                  Optional access and refresh tokens from cloud-storage providers (Google Drive,
                  Microsoft OneDrive, Dropbox) that you have chosen to connect, used solely to upload
                  recordings to your own storage at your direction.
                </li>
                <li>
                  Minimal session metadata used to keep you logged into the dashboard (cookies and a
                  signed token).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">How We Use Information</h2>
              <p className="mb-2">Information is used only for the following purposes:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>To start, manage, and deliver the recordings you request.</li>
                <li>To authenticate you to the dashboard via Discord.</li>
                <li>
                  To upload completed recordings to the cloud-storage account you connected, when that
                  feature is enabled in your dashboard.
                </li>
                <li>To operate, maintain, and troubleshoot the service.</li>
              </ul>
              <p className="mt-2">
                The service does not sell, rent, or share your information or recordings with third
                parties for advertising or analytics purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">Recording Notice</h2>
              <p>
                Chronicler only records voice channels that an authorized user explicitly starts a
                recording in. When a recording is active, the bot changes its server nickname to
                include a "[RECORDING]" tag as a visible indicator. By speaking in a voice channel
                while Chronicler is present and recording, you acknowledge that your audio may be
                captured. If you do not consent to being recorded, you should leave the channel.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">Cloud Storage Integrations</h2>
              <p>
                If you connect a Google Drive, Microsoft OneDrive, or Dropbox account, the service
                stores the OAuth refresh token issued by that provider. This token is used only to
                upload your recordings to a folder inside your own account. The service requests the
                narrowest scope possible for each provider (for Google Drive, the
                <code className="bg-black/30 px-1 mx-1 rounded text-sm">drive.file</code>
                scope, which only allows the service to manage files it has created on your behalf).
                You can disconnect any cloud integration at any time from the dashboard, and you can
                also revoke access directly from the provider's account settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">Data Retention</h2>
              <p>
                Recordings remain available for download for a limited time configured by the
                operator of this instance, after which they are deleted from local storage. You may
                also delete a recording at any time using the delete link in the recording's
                download page or via the dashboard. Cloud-storage uploads remain in your own account
                until you delete them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">Security</h2>
              <p>
                Reasonable measures are taken to protect data, including HTTPS for all dashboard and
                download traffic and isolation of the service's database from the public internet.
                No method of electronic transmission or storage is 100% secure; the service is
                provided on an "as-is" basis without warranty.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">Your Choices</h2>
              <p>
                You can stop using Chronicler at any time by removing it from your Discord server.
                You can request deletion of your data by contacting the operator of this instance.
                You can disconnect cloud-storage integrations from the dashboard at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">Changes to This Policy</h2>
              <p>
                This policy may be updated from time to time. Material changes will be reflected by
                updating the "Last updated" date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">Contact</h2>
              <p>
                For questions about this policy or to request data deletion, contact the operator of
                this instance through the Discord server in which Chronicler is deployed.
              </p>
            </section>

            <div className="pt-4 mt-4 border-t border-zinc-600 flex gap-4 flex-wrap justify-center text-sm">
              <a href="/" className="text-teal-400 hover:underline">Home</a>
              <a href="/terms" className="text-teal-400 hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
