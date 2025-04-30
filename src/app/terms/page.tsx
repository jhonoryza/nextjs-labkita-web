/* eslint-disable react/no-unescaped-entities */
export default function TermsOfServicePage() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-xs">Last updated: 01 May 2025</p>
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service")
            carefully before using the Labkita website or any of our services.
          </p>
          <h2 className="font-bold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access our services.
          </p>
          <h2 className="font-bold">2. Use of Our Services</h2>
          <p>
            You agree to use our services only for purposes that are permitted
            by these Terms and any applicable law, regulation, or generally
            accepted practices or guidelines in the relevant jurisdictions.
          </p>
          <h2 className="font-bold">3. Intellectual Property</h2>
          <p>
            The content, features, and functionality of our services are owned
            by Labkita and are protected by international copyright, trademark,
            patent, trade secret, and other intellectual property laws.
          </p>
          <h2 className="font-bold">4. User Content</h2>
          <p>
            You retain any and all of your rights to any content you submit,
            post, or display on or through our services. By posting content, you
            grant us the right to use, modify, publicly perform, publicly
            display, reproduce, and distribute such content on and through our
            services.
          </p>
          <h2 className="font-bold">5. Termination</h2>
          <p>
            We may terminate or suspend your access to our services immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </p>
          <h2 className="font-bold">6. Limitation of Liability</h2>
          <p>
            In no event shall Labkita, nor its directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from your access to or use of or
            inability to access or use our services.
          </p>
          <h2 className="font-bold">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. We will provide notice of any significant
            changes to these Terms.
          </p>
          <h2 className="font-bold">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:labkita.my.id@gmail.com">labkita.my.id@gmail.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
