import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service · Chronicler</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="og:site_name" content="Chronicler" />
        <meta name="og:title" content="Terms of Service · Chronicler" />
        <meta name="og:description" content="Terms of service for Chronicler, a multi-track recording bot for Discord." />
        <meta name="og:locale" content="en_US" />
        <meta name="og:image" content="/android-chrome-512x512.png" />
        <meta name="msapplication-TileColor" content="#2dd4bf" />
        <meta name="theme-color" content="#2dd4bf" />
      </Head>
      <div className="min-h-screen bg-gradient-to-t from-neutral-800 to-zinc-900 text-white font-body flex items-center justify-center flex-col py-12 sm:px-12">
        <div className="bg-zinc-700 sm:rounded flex justify-center items-center sm:shadow-md w-full flex-col sm:w-4/5 sm:max-w-4xl">
          <h1 className="text-3xl flex justify-center p-3 gap-4 items-center relative bg-black bg-opacity-20 w-full font-body">
            <img crossOrigin="anonymous" src="/android-chrome-512x512.png" className="w-12 h-12 rounded-full" />
            <span>Terms of Service</span>
          </h1>
          <div className="flex flex-col p-6 gap-4 w-full text-sm sm:text-base leading-relaxed">
            <p className="text-zinc-400 text-xs">Last updated: {new Date().toISOString().slice(0, 10)}</p>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">1. Acceptance of Terms</h2>
              <p>
                By inviting the Chronicler bot to a Discord server, by using the Chronicler dashboard
                at this address, or by participating in a voice channel while Chronicler is recording,
                you agree to these Terms of Service. If you do not agree, you must not use the
                service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">2. Description of Service</h2>
              <p>
                Chronicler is a self-hosted Discord bot that records multi-track audio from voice
                channels at the request of users with appropriate permissions in their server. The
                service is intended for private, non-commercial use. The service is provided free of
                charge on an "as-is" basis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">3. Acceptable Use</h2>
              <p className="mb-2">You agree that you will not use the service to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Record any individual without their knowledge or consent where consent is required by applicable law.</li>
                <li>Record any audio that would be illegal to record in the relevant jurisdiction.</li>
                <li>Violate any local, state, national, or international law.</li>
                <li>
                  Infringe on the intellectual property or privacy rights of any person or
                  organization.
                </li>
                <li>Distribute recorded audio for purposes that the recorded parties did not consent to.</li>
                <li>Abuse, harass, or harm any other user.</li>
                <li>Attempt to gain unauthorized access to the service, its hosting environment, or other users' data.</li>
                <li>
                  Use the service to record content protected by digital rights management or copyright
                  in a manner that would constitute infringement.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">4. Recording Consent</h2>
              <p>
                You are solely responsible for obtaining any consent required from other voice channel
                participants before recording them. Recording laws vary by jurisdiction; the operator
                of this instance is not responsible for ensuring your use of the service complies with
                any specific recording-consent law. The bot visibly indicates an active recording by
                changing its server nickname to include a "[RECORDING]" tag.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">5. Discord Terms</h2>
              <p>
                Your use of the service is also subject to{' '}
                <a className="text-teal-400 hover:underline" href="https://discord.com/terms" target="_blank" rel="noopener noreferrer">
                  Discord's Terms of Service
                </a>{' '}
                and{' '}
                <a className="text-teal-400 hover:underline" href="https://discord.com/guidelines" target="_blank" rel="noopener noreferrer">
                  Community Guidelines
                </a>
                . If your use of Chronicler would violate Discord's policies, it also violates these
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">6. Third-Party Integrations</h2>
              <p>
                If you connect a Google Drive, Microsoft OneDrive, or Dropbox account, your use of
                those services remains subject to those providers' own terms. You authorize Chronicler
                to upload your recordings to the connected account on your behalf. You may revoke
                that authorization at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">7. Data and Recordings</h2>
              <p>
                Recordings are stored on the operator's server for a limited time before automatic
                deletion. You may delete your own recordings at any time through the recording's
                download page. Cloud-uploaded copies remain in your own cloud account until you
                delete them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">8. Disclaimer of Warranties</h2>
              <p>
                The service is provided "as is" and "as available", without warranties of any kind,
                whether express or implied, including warranties of merchantability, fitness for a
                particular purpose, non-infringement, or that the service will be uninterrupted,
                timely, secure, or error-free. The operator does not warrant that any recording will
                succeed, complete, persist, or be of any particular quality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, the operator of this instance is not liable
                for any indirect, incidental, special, consequential, or punitive damages, or any
                loss of data, recordings, profits, or goodwill, arising from your use of or
                inability to use the service. Your sole remedy for dissatisfaction with the service
                is to stop using it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">10. Termination</h2>
              <p>
                The operator reserves the right to suspend or terminate your access to the service at
                any time, with or without notice, for any reason, including violation of these terms.
                You may stop using the service at any time by removing the bot from your servers and
                disconnecting any cloud integrations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">11. Changes to Terms</h2>
              <p>
                These terms may be updated from time to time. Material changes will be reflected by
                updating the "Last updated" date at the top of this page. Continued use of the
                service after a change constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-medium mb-2">12. Contact</h2>
              <p>
                For questions about these terms, contact the operator of this instance through the
                Discord server in which Chronicler is deployed.
              </p>
            </section>

            <div className="pt-4 mt-4 border-t border-zinc-600 flex gap-4 flex-wrap justify-center text-sm">
              <a href="/" className="text-teal-400 hover:underline">Home</a>
              <a href="/privacy" className="text-teal-400 hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
