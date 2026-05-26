export const metadata = {
  title: "Terms & Conditions | HELOC CONNECT",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#03111f] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl rounded-[28px] border border-emerald-400/20 bg-[#07192f]/90 p-8 shadow-[0_0_60px_rgba(0,255,120,0.08)]">
        <a href="/" className="text-sm font-bold text-[#6fff27]">← Back to Home</a>
        
        <h1 className="mt-6 text-5xl font-black">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: May 2026</p>
        <div className="mt-8 space-y-6 text-slate-300 leading-8">
          <p>These Terms & Conditions govern use of the HELOC CONNECT website and related communication services.</p>
          <section><h2 className="text-2xl font-black text-white">Service Description</h2><p>HELOC CONNECT is a homeowner inquiry and mortgage marketing platform that helps users request contact from participating service providers and mortgage professionals. HELOC CONNECT is not a direct lender and does not make final lending, credit, or approval decisions.</p></section>
          <section><h2 className="text-2xl font-black text-white">User Submissions</h2><p>By submitting information through our website, you confirm that the information provided is accurate to the best of your knowledge and that you are requesting follow-up communication regarding your inquiry.</p></section>
          <section><h2 className="text-2xl font-black text-white">SMS Terms</h2><p>By providing your phone number and submitting a form with SMS consent, you agree to receive SMS communications from HELOC CONNECT related to your inquiry, appointment reminders, account updates, document request reminders, and customer support communications. Message frequency varies. Message and data rates may apply.</p><p><strong>HELP:</strong> Reply HELP for assistance. <strong>STOP:</strong> Reply STOP to unsubscribe from SMS messages at any time.</p></section>
          <section><h2 className="text-2xl font-black text-white">No Guarantee</h2><p>Submitting an inquiry does not guarantee contact, qualification, approval, or availability of any product or service. Any final terms, eligibility, or decisions are determined by participating professionals or providers, not HELOC CONNECT.</p></section>
          <section><h2 className="text-2xl font-black text-white">Privacy</h2><p>Please review our Privacy Policy to understand how information is collected and used.</p></section>
        </div>

      </div>
    </main>
  );
}
