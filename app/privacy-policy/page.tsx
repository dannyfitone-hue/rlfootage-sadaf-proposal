export const metadata = {
  title: "Privacy Policy | HELOC CONNECT",
  description: "HELOC CONNECT Privacy Policy and SMS disclosure",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#03111f] px-5 py-10 text-white">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-emerald-400/20 bg-[#07192f]/90 p-6 shadow-[0_0_60px_rgba(0,255,120,0.08)] md:p-10">
        <a href="/" className="mb-8 inline-block text-sm font-bold text-emerald-300 hover:text-emerald-200">
          ← Back to HELOC CONNECT
        </a>

        <p className="text-xs font-black uppercase tracking-[0.35em] text-emerald-300">HELOC CONNECT</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm font-medium leading-relaxed text-blue-100">Last updated: May 2026</p>

        <section className="mt-8 space-y-6 text-blue-100">
          <div>
            <h2 className="text-2xl font-black text-white">1. Information We Collect</h2>
            <p className="mt-3 leading-relaxed">
              HELOC CONNECT collects information voluntarily submitted through our website forms, including name, phone number,
              email address, property address, estimated property details, inquiry details, and other information needed to respond
              to a homeowner inquiry or connect the user with participating mortgage professionals or service providers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">2. How We Use Information</h2>
            <p className="mt-3 leading-relaxed">
              We use submitted information to respond to user inquiries, provide account-related notifications, send requested updates,
              coordinate document reminders, support communication, and connect users with participating service providers who may be able
              to assist with the user’s request.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">3. SMS Communications</h2>
            <p className="mt-3 leading-relaxed">
              By submitting a form on HELOC CONNECT and providing a phone number, users may consent to receive SMS communications from
              HELOC CONNECT regarding their inquiry, account updates, document reminders, appointment notifications, and customer support
              communications. Message frequency varies. Message and data rates may apply. Users may reply STOP to unsubscribe or HELP for assistance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">4. No Sale of SMS Consent</h2>
            <p className="mt-3 leading-relaxed">
              HELOC CONNECT does not sell, rent, or share SMS opt-in consent or mobile phone numbers with third parties for their own marketing purposes.
              Information may be shared only as needed to respond to a user’s submitted inquiry, provide requested services, comply with law, or support
              our business operations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">5. Service Provider Sharing</h2>
            <p className="mt-3 leading-relaxed">
              HELOC CONNECT is a marketing and lead generation platform. We may share inquiry information with participating mortgage professionals,
              service providers, or business partners when a user submits information requesting contact or assistance. HELOC CONNECT does not directly
              issue loans or make credit decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">6. Data Security</h2>
            <p className="mt-3 leading-relaxed">
              We use reasonable administrative, technical, and organizational safeguards designed to protect submitted information. However, no online
              transmission or storage method is guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">7. Contact</h2>
            <p className="mt-3 leading-relaxed">
              For privacy questions or SMS support, contact HELOC CONNECT through the contact options available on our website.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
