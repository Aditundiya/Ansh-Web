import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Ansh',
  description: 'How Ansh collects, uses, and protects your data.',
};

const sections = [
  {
    title: '1. Information We Collect',
    body: 'To provide Ansh we collect: (a) Account information — your email address (for sign-in and account recovery) and a display name you choose. You can sign in with an email and password or with your Google account; if you use Google sign-in, Google provides Ansh with your Google account email address and basic profile (your name), subject to Google’s own privacy policy. (b) Financial information you enter yourself — your expenses, income, recurring entries, budgets, savings goals, debts, and any shared-group expenses you record. For debts we store only a label, a type, and the balances you enter — never card numbers or bank account details. (c) Basic technical data — your app version and last-active date, used only to support the app. (d) Error reports — if something goes wrong, the app sends a short error report (the error message and the screen it happened on) linked to your account so we can fix it. Email addresses and money amounts are removed from these reports automatically before they are sent. (e) Support messages — anything you send us through Settings → Support, stored together with your account email so we know which account it relates to. The app works only with the information you choose to enter.',
  },
  {
    title: '2. Information We Do NOT Collect',
    body: 'Ansh does not collect or store: payment card numbers, CVVs, or bank account credentials; government IDs or national identification numbers; your phone number or postal address; your location; your contacts, photos, or files; or any advertising identifiers. If you enable fingerprint, face unlock or screen-lock protection, that is handled entirely by your Android device and is never sent to us. We do not use advertising networks, analytics SDKs, or third-party trackers.',
  },
  {
    title: '3. How We Use Your Information',
    body: 'Your information is used solely to operate Ansh — to show your balances, budgets, goals, and group splits, to keep you signed in, to answer support requests, and to find and fix problems. We never sell, rent, or share your personal data with third parties for marketing, and we never use it for advertising or profiling.',
  },
  {
    title: '4. Sharing With Group Members',
    body: 'If you create or join a shared expense group, the information you add to that group — the group name, the expenses and amounts you log, who-owes-whom settlements, and your display name — is visible to the other members of that group. Your personal (non-group) data is never visible to other users.',
  },
  {
    title: '5. Group Expenses In Your Personal Records',
    body: 'When a group expense includes you, Ansh records YOUR SHARE of it as an expense in your own personal records, so your budgets, totals and category breakdowns reflect what you actually spent. This means another member adding a group expense can create a matching entry in your personal records — your share only, never the full amount, and never anything from a group you are not part of. These entries are labelled with the group they came from, are visible only to you, are deleted if the group expense is deleted or you are removed from the split, and are removed along with everything else if you delete your account.',
  },
  {
    title: '6. Data Storage, Security & Access',
    body: 'Your data is stored on Google Firebase (Firestore), encrypted in transit (HTTPS/TLS) and at rest. Sign-in is handled by Firebase Authentication (email and password, or Google sign-in); your password is never stored in plaintext and is never visible to us. If you turn on reminders, Ansh schedules notifications locally on your device — no notification tokens are sent to or stored by us. Security rules ensure other users can never read your personal data. The operator of Ansh can access account data through a restricted admin tool, and does so only to provide support, investigate abuse, or repair data problems.',
  },
  {
    title: '7. Optional Google Drive Backup',
    body: 'You can optionally back up your personal data to your own Google Drive. The backup is stored in a private, app-specific folder inside your Google account (the “app data” area) — only Ansh, signed in as you, can access it. This copy lives in your Google account, not on our servers, and we cannot read it. You can turn backup on or off at any time, and it never includes shared-group data.',
  },
  {
    title: '8. Receipt Scanning (On-Device)',
    body: 'If you use receipt scanning, Ansh uses your camera to capture the receipt, and the image is read entirely on your device to pull out the amount, date, and merchant. The photo is not uploaded to us, is not stored by Ansh, and is never used for anything else. We do not access your photo library or other files.',
  },
  {
    title: '9. Data Retention & Deletion',
    body: 'You can delete your account and all associated data at any time from Settings → Delete Account. This permanently removes your profile, expenses, income, recurring entries, budgets, goals, debts, custom categories, your support messages and your error reports, and clears Ansh data stored on that device. For shared groups: if you were the only member, the group is deleted; otherwise you are removed from it and its balances are adjusted so the remaining members are not left with debts that can never be settled.',
  },
  {
    title: '10. Children’s Privacy',
    body: 'Ansh is intended for adults and is not directed at children under 13. We do not knowingly collect personal information from children.',
  },
  {
    title: '11. Changes & Contact',
    body: 'We may update this policy from time to time and will revise the date above. For privacy questions or data-deletion requests, reach us through the in-app Support page (Settings → Support).',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#08080D] text-white">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link href="/" className="mb-8 inline-block text-sm text-[#6366F1] hover:underline">← Back to Ansh</Link>
        <h1 className="mb-2 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-10 text-sm text-white/50">Last updated: October 2026</p>
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
