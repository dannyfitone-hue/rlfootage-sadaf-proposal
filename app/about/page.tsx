export const metadata = {
  title: "About Us | HELOC CONNECT",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#03111f] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl rounded-[28px] border border-emerald-400/20 bg-[#07192f]/90 p-8 shadow-[0_0_60px_rgba(0,255,120,0.08)]">
        <a href="/" className="text-sm font-bold text-[#6fff27]">← Back to Home</a>
        
        <h1 className="mt-6 text-5xl font-black">About <span className="text-[#6fff27]">HELOC CONNECT</span></h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          HELOC CONNECT is a homeowner inquiry and mortgage marketing platform built to help users connect with participating mortgage professionals and service providers. We focus on fast communication, organized document reminders, secure inquiry handling, and a simple homeowner-friendly experience.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <h2 className="text-2xl font-black text-[#6fff27]">What We Are Good At</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Helping homeowners submit inquiries quickly</li>
              <li>• Connecting users with participating mortgage professionals</li>
              <li>• Keeping communication organized and simple</li>
              <li>• Sending helpful status and document reminders</li>
              <li>• Creating a secure, professional online experience</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <h2 className="text-2xl font-black text-[#6fff27]">Trust & Transparency</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• HELOC CONNECT is not a direct lender</li>
              <li>• We do not make final credit or lending decisions</li>
              <li>• Users voluntarily submit their information</li>
              <li>• SMS updates are used for support and inquiry communication</li>
              <li>• Users may opt out of SMS anytime by replying STOP</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/privacy-policy" className="rounded-xl border border-white/15 px-6 py-3 font-black">Privacy Policy</a>
          <a href="/terms" className="rounded-xl border border-white/15 px-6 py-3 font-black">Terms & Conditions</a>
        </div>

      </div>
    </main>
  );
}
