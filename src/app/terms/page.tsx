import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — Ansh',
  description: 'The terms governing your use of Ansh.',
};

const sections = [
  { title: '1. Acceptance of Terms', body: 'By downloading, installing, or using Ansh ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App. We reserve the right to update these terms at any time, and continued use of the App constitutes acceptance of any changes.' },
  { title: '2. Description of Service', body: 'Ansh is a personal finance tracking application that allows users to record expenses and income, set budgets, track savings goals, and split group expenses. The App is provided "as is" and is intended for personal, non-commercial use only. We do not provide financial advice.' },
  { title: '3. User Accounts', body: 'You must create an account to use Ansh. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must provide accurate information when registering. You may not share your account with others or use another person’s account without permission.' },
  { title: '4. Data & Privacy', body: 'Ansh stores the account and financial information you enter (expenses, income, budgets, savings goals, debts, and shared-group expenses) securely on Google Firebase. We do not collect payment card numbers or bank account credentials, and we do not sell or share your personal data with third parties for marketing. By using the App you consent to the collection and use of data as described in our Privacy Policy. You may delete your account and all associated data at any time from Settings → Delete Account.' },
  { title: '5. Acceptable Use', body: 'You agree not to: (a) use the App for any unlawful purpose; (b) attempt to gain unauthorised access to any part of the App; (c) reverse engineer, decompile, or disassemble the App; (d) upload any malicious code or interfere with the App’s infrastructure; (e) use the App to harass, abuse, or harm others.' },
  { title: '6. Intellectual Property', body: 'All content, trademarks, logos, and intellectual property within the App are owned by Ansh. You are granted a limited, non-exclusive, non-transferable licence to use the App for personal purposes. No rights are transferred to you beyond what is expressly stated in these Terms.' },
  { title: '7. Limitation of Liability', body: 'To the fullest extent permitted by law, Ansh shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use the App. Ansh is a tool to help you organise your finances — accuracy of financial records is your responsibility. We are not liable for any financial decisions you make based on data in the App.' },
  { title: '8. Termination', body: 'We reserve the right to suspend or terminate your account if you violate these Terms, at our sole discretion and without notice. You may terminate your account at any time from Settings → Delete Account.' },
  { title: '9. Changes to These Terms', body: 'We may update these Terms of Service from time to time. When we do, we will update the effective date above. Significant changes will be communicated via an in-app announcement banner. Continued use of the App after changes constitutes your acceptance of the revised Terms.' },
  { title: '10. Contact Us', body: 'If you have questions or concerns about these Terms, please reach us through the in-app Support page (Settings → Support). We aim to respond within 5 business days.' },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#08080D] text-white">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link href="/" className="mb-8 inline-block text-sm text-[#6366F1] hover:underline">← Back to Ansh</Link>
        <h1 className="mb-2 text-3xl font-bold">Terms of Service</h1>
        <p className="mb-10 text-sm text-white/50">Effective Date: June 2026</p>
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
