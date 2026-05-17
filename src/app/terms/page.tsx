export default function TermsOfServicePage() {
  return (
    <article className="flex-grow">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: 01 May 2025</p>

        <div className="max-w-none text-muted-foreground space-y-6">
          <p>
            Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;)
            carefully before using the Labkita website or any of our services.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may not
              access our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Use of Our Services</h2>
            <p>
              You agree to use our services only for purposes that are permitted
              by these Terms and any applicable law, regulation, or generally
              accepted practices or guidelines in the relevant jurisdictions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Intellectual Property</h2>
            <p>
              The content, features, and functionality of our services are owned
              by Labkita and are protected by international copyright, trademark,
              patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. User Content</h2>
            <p>
              You retain any and all of your rights to any content you submit,
              post, or display on or through our services. By posting content, you
              grant us the right to use, modify, publicly perform, publicly
              display, reproduce, and distribute such content on and through our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
            <p>
              In no event shall Labkita, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. We will provide notice of any significant
              changes to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:labkita.my.id@gmail.com" className="text-primary hover:underline font-medium">
                labkita.my.id@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}