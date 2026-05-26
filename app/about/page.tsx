export const metadata = {
  title: "About Us | HELOC CONNECT",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#03111f] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl rounded-[28px] border border-emerald-400/20 bg-[#07192f]/90 p-8 shadow-[0_0_60px_rgba(0,255,120,0.08)]">
        <h1 className="text-5xl font-black">
          About <span className="text-[#6fff27]">HELOC CONNECT</span>
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-300">
          HELOC CONNECT is a homeowner lead generation and mortgage marketing platform
          focused on helping users connect with participating service providers and explore
          home equity related opportunities.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <h2 className="text-2xl font-black text-[#6fff27]">Why Users Trust Us</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Secure inquiry submission process</li>
              <li>• Fast response times</li>
              <li>• Transparent communication</li>
              <li>• Customer support assistance</li>
              <li>• Professional homeowner-focused experience</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <h2 className="text-2xl font-black text-[#6fff27]">Our Focus</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Homeowner inquiry support</li>
              <li>• Mortgage marketing solutions</li>
              <li>• Lead generation technology</li>
              <li>• Customer communication systems</li>
              <li>• Secure online experience</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/" className="rounded-xl bg-[#6fff27] px-6 py-3 font-black text-black">
            Return Home
          </a>

          <a href="/privacy-policy" className="rounded-xl border border-white/15 px-6 py-3 font-black">
            Privacy Policy
          </a>

          <a href="/terms" className="rounded-xl border border-white/15 px-6 py-3 font-black">
            Terms & Conditions
          </a>
        </div>
      </div>
    </main>
  );
}
