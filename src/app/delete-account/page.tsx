import Link from 'next/link';

export const metadata = {
  title: 'Delete your account — Ansh',
  description: 'How to delete your Ansh account and all of your data.',
};

// Google Play requires apps with sign-up to provide a web page where users can
// request account deletion WITHOUT reinstalling the app. This is that page; its
// URL goes in Play Console → App content → Data safety → "Delete account URL".
// Keep it consistent with section 9 of the privacy policy.
const CONTACT_EMAIL = 'd3adshot2112@gmail.com';

const deleted = [
  'Your profile (name, email, preferences)',
  'All expenses, income and recurring entries',
  'Budgets, savings goals, debts and custom categories',
  'Your share entries created from group expenses',
  'Your support messages and error reports',
  'Your sign-in account',
];

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#08080D] text-white">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link href="/" className="mb-8 inline-block text-sm text-[#6366F1] hover:underline">← Back to Ansh</Link>
        <h1 className="mb-2 text-3xl font-bold">Delete your Ansh account</h1>
        <p className="mb-10 text-sm text-white/50">Developer: Aditya Tundiya · App: Ansh (com.ansh.money)</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="mb-2 text-lg font-semibold">Option 1 — in the app (instant)</h2>
            <ol className="list-decimal space-y-1 pl-5 text-white/70">
              <li>Open Ansh and sign in.</li>
              <li>Go to <strong className="text-white">Settings → Data → Delete Account</strong>.</li>
              <li>Confirm. Your account and data are deleted immediately.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold">Option 2 — without the app</h2>
            <p className="text-white/70">
              If you no longer have the app installed or can&apos;t sign in, email{' '}
              <a className="text-[#6366F1] hover:underline" href={`mailto:${CONTACT_EMAIL}?subject=Delete%20my%20Ansh%20account`}>
                {CONTACT_EMAIL}
              </a>{' '}
              from the email address you used for Ansh, with the subject &ldquo;Delete my Ansh account&rdquo;.
              We will delete your account and data within 30 days and confirm by reply.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold">What gets deleted</h2>
            <ul className="list-disc space-y-1 pl-5 text-white/70">
              {deleted.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold">Shared groups</h2>
            <p className="text-white/70">
              If you were the only member of a group, the group is deleted. Otherwise you are removed
              from it and its balances are adjusted so the remaining members are not left with debts
              that can never be settled.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold">What we keep</h2>
            <p className="text-white/70">
              Nothing tied to your account is kept after deletion. An optional Google Drive backup, if you
              made one, lives in your own Google account — remove it from Google Drive → Settings →
              Manage apps → Ansh.
            </p>
          </section>

          <p className="text-white/50">
            See the full <Link href="/privacy" className="text-[#6366F1] hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
