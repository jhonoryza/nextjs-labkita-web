export default function TermsOfServicePage() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-black mb-8 text-center text-foreground border-b-2 border-foreground pb-4">
          Terms of Service
        </h1>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          <p className="font-bold text-xs text-foreground/60">Last updated: 01 May 2025</p>
          <p className="text-foreground/80 font-medium">
            Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;)
            carefully before using the Labkita website or any of our services.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">1. Acceptance of Terms</h2>
          <p className="text-foreground/80 font-medium">
            By accessing or using our services, you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access our services.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">2. Use of Our Services</h2>
          <p className="text-foreground/80 font-medium">
            You agree to use our services only for purposes that are permitted
            by these Terms and any applicable law, regulation, or generally
            accepted practices or guidelines in the relevant jurisdictions.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">3. Intellectual Property</h2>
          <p className="text-foreground/80 font-medium">
            The content, features, and functionality of our services are owned
            by Labkita and are protected by international copyright, trademark,
            patent, trade secret, and other intellectual property laws.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">4. User Content</h2>
          <p className="text-foreground/80 font-medium">
            You retain any and all of your rights to any content you submit,
            post, or display on or through our services. By posting content, you
            grant us the right to use, modify, publicly perform, publicly
            display, reproduce, and distribute such content on and through our
            services.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">5. Termination</h2>
          <p className="text-foreground/80 font-medium">
            We may terminate or suspend your access to our services immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">6. Limitation of Liability</h2>
          <p className="text-foreground/80 font-medium">
            In no event shall Labkita, nor its directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from your access to or use of or
            inability to access or use our services.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">7. Changes to Terms</h2>
          <p className="text-foreground/80 font-medium">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. We will provide notice of any significant
            changes to these Terms.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">8. Contact Us</h2>
          <p className="text-foreground/80 font-medium">
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:labkita.my.id@gmail.com" className="font-bold text-primary underline">labkita.my.id@gmail.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}