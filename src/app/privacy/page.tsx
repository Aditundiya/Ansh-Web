import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Ansh',
  description: 'How Ansh collects, uses, and protects your data.',
};

const sections = [
  {
    title: '1. Information We Collect',
    body: 'Ansh collects only the information you voluntarily provide: your email address for authentication, your display name, and the financial data you enter (expenses, income, group splits). We do not sell or share your personal data with third parties.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'Your data is used solely to provide the Ansh service — tracking your expenses, income, and shared group costs. Financial data is stored securely in Google Firebase Firestore and is only accessible by you.',
  },
  {
    title: '3. Data Storage & Security',
    body: 'All data is stored on Google Firebase infrastructure with industry-standard encryption in transit and at rest. Authentication is handled by Firebase Auth with email/password. We do not store passwords in plaintext.',
  },
  {
    title: '4. Data Deletion',
    body: 'You can delete your account and all associated data at any time from the Settings page in the app. Upon deletion, all your financial records are permanently removed from our servers within 30 days.',
  },
  {
    title: '5. Third-Party Services',
    body: 'Ansh uses Google Firebase for authentication and database storage. Google’s privacy policy applies to data processed through their services. We do not use advertising networks or analytics trackers.',
  },
  {
    title: '6. Contact',
    body: 'For privacy concerns or data requests, reach us through the in-app Support page (Settings → Support).',
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
