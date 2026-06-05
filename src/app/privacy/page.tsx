import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Ansh',
  description: 'How Ansh collects, uses, and protects your data.',
};

const sections = [
  {
    title: '1. Information We Collect',
    body: 'To provide Ansh we collect: (a) Account information — your email address (for sign-in and account recovery) and a display name you choose. (b) Financial information you enter yourself — your expenses, income, budgets, savings goals, debts, and any shared-group expenses you record. For debts we store only a label, a type, and the balances you enter — never card numbers or bank account details. (c) Basic technical data — your app version and last-active date, used only to support the app. The app works only with the information you choose to enter.',
  },
  {
    title: '2. Information We Do NOT Collect',
    body: 'Ansh does not collect or store: payment card numbers, CVVs, or bank account credentials; government IDs or national identification numbers; your phone number or postal address; your location; your contacts, photos, or files; or any advertising identifiers. If you enable fingerprint or face unlock, that is handled entirely by your Android device and is never sent to us. We do not use advertising networks, analytics SDKs, or third-party trackers.',
  },
  {
    title: '3. How We Use Your Information',
    body: 'Your information is used solely to operate Ansh — to show your balances, budgets, goals, and group splits, and to keep you signed in. We never sell, rent, or share your personal data with third parties for marketing, and we never use it for advertising or profiling.',
  },
  {
    title: '4. Sharing With Group Members',
    body: 'If you create or join a shared expense group, the information you add to that group — the group name, the expenses and amounts you log, who-owes-whom settlements, and your display name — is visible to the other members of that group. Your personal (non-group) data is never visible to anyone but you.',
  },
  {
    title: '5. Data Storage & Security',
    body: 'Your data is stored on Google Firebase (Firestore), encrypted in transit (HTTPS/TLS) and at rest. Sign-in is handled by Firebase Authentication; your password is never stored in plaintext and is never visible to us. Security rules restrict access so that only you can read your own data.',
  },
  {
    title: '6. Data Retention & Deletion',
    body: 'You can delete your account and all associated data at any time from Settings → Delete Account. This permanently removes your profile, expenses, income, budgets, goals, debts, custom categories, and removes you from shared groups.',
  },
  {
    title: '7. Children’s Privacy',
    body: 'Ansh is intended for adults and is not directed at children under 13. We do not knowingly collect personal information from children.',
  },
  {
    title: '8. Changes & Contact',
    body: 'We may update this policy from time to time and will revise the date above. For privacy questions or data-deletion requests, reach us through the in-app Support page (Settings → Support).',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#08080D] text-white">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link href="/" className="mb-8 inline-block text-sm text-[#6366F1] hover:underline">← Back to Ansh</Link>
        <h1 className="mb-2 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-10 text-sm text-white/50">Last updated: June 2026</p>
        <div className="space-y-8 text-sm leading-relaxed">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="mb-2 text-lg font-semibold">{s.title}</h2>
              <p className="text-white/70">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
