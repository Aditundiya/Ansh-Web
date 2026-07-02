'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.ansh.money';

function JoinInner() {
  const code = (useSearchParams().get('code') || '').toUpperCase();
  const [copied, setCopied] = useState(false);

  return (
    <main className="min-h-screen bg-[#08080D] text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/favicon.png" alt="Ansh" className="mx-auto h-16 w-16 rounded-2xl mb-6" />
        <h1 className="text-2xl font-bold mb-2">You&apos;re invited to a group on Ansh</h1>
        <p className="text-white/60 mb-6">Split bills with friends and settle up — free forever, no ads.</p>

        {code && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 mb-6">
            <p className="text-sm text-white/50 mb-1">Invite code</p>
            <p className="text-3xl font-black tracking-[0.3em]">{code}</p>
            <button
              onClick={() => { try { navigator.clipboard?.writeText(code); setCopied(true); } catch { /* ignore */ } }}
              className="mt-3 text-sm font-medium text-indigo-400 hover:underline"
            >
              {copied ? 'Copied ✓' : 'Copy code'}
            </button>
          </div>
        )}

        <a
          href={PLAY_URL}
          className="block w-full rounded-xl bg-indigo-500 py-3 font-bold text-white hover:bg-indigo-600 transition"
        >
          Get Ansh on Google Play
        </a>
        <p className="text-xs text-white/40 mt-4">
          Already have Ansh? Open the app → Groups → Join{code ? ` and enter ${code}` : ''}.
        </p>
      </div>
    </main>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#08080D]" />}>
      <JoinInner />
    </Suspense>
  );
}
