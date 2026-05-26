export const metadata = {
  title: "Terms and Conditions | HELOC CONNECT",
  description: "HELOC CONNECT terms, conditions, and SMS terms",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#03111f] px-5 py-10 text-white">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-emerald-400/20 bg-[#07192f]/90 p-6 shadow-[0_0_60px_rgba(0,255,120,0.08)] md:p-10">
        <a href="/" className="mb-8 inline-block text-sm font-bold text-emerald-300 hover:text-emerald-200">
          ← Back to HELOC CONNECT
        </a>

        <p className="text-xs font-black uppercase tracking-[0.35em] text-emerald-300">HELOC CONNECT</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Terms and Conditions</h1>
        <p className="mt-4 text-sm font-medium leading-relaxed text-blue-100">Last updated: May 2026</p>

        <section className="mt-8 space-y-6 text-blue-100">
          <div>
            <h2 className="text-2xl font-black text-white">1. Use of Website</h2>
            <p className="mt-3 leading-relaxed">
              By using HELOC CONNECT, you agree to these Terms and Conditions. HELOC CONNECT provides an online inquiry platform that helps users
              request information and connect with participating service providers or mortgage professionals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">2. No Direct Lending Services</h2>
            <p className="mt-3 leading-relaxed">
              HELOC CONNECT is a marketing and lead generation platform. HELOC CONNECT does not directly issue loans, make credit decisions,
              guarantee approval, provide legal advice, or provide financial advice. Any available options are subject to review by participating
              service providers and applicable requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">3. User Submissions</h2>
            <p className="mt-3 leading-relaxed">
              Users are responsible for providing accurate information when submitting website forms. Submission of information does not guarantee
              eligibility, approval, contact, pricing, terms, or availability of any product or service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">4. SMS Terms</h2>
            <p className="mt-3 leading-relaxed">
              By submitting your phone number through HELOC CONNECT forms and consenting to receive messages, you agree to receive SMS communications
              related to your inquiry, account updates, document reminders, appointment notifications, and customer support communications.
              Message frequency varies. Message and data rates may apply.
            </p>
            <p className="mt-3 leading-relaxed">
              Reply <strong className="text-white">STOP</strong> to unsubscribe from SMS communications at any time. Reply <strong className="text-white">HELP</strong> for assistance.
              Consent to receive SMS messages is not a condition of purchase.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">5. Privacy</h2>
            <p className="mt-3 leading-relaxed">
              Our Privacy Policy explains how we collect, use, and share information. Please review our Privacy Policy for more information.
            </p>
            <a href="/privacy-policy" className="mt-3 inline-block font-bold text-emerald-300 hover:text-emerald-200">
              View Privacy Policy →
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">6. Limitation of Liability</h2>
            <p className="mt-3 leading-relaxed">
              HELOC CONNECT is not responsible for third-party decisions, service provider actions, delays, denials, unavailable offers, or changes
              in terms. Use of this website is provided on an “as available” basis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">7. Contact and Support</h2>
            <p className="mt-3 leading-relaxed">
              For questions, support, or SMS assistance, contact HELOC CONNECT through the contact options available on our website or reply HELP
              to supported SMS communications.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
