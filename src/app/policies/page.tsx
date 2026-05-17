export default function PolicyPage() {
  return (
    <article className="flex-grow">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: 01 May 2025</p>

        <div className="max-w-none text-muted-foreground space-y-6">
          <p>
            This Privacy Policy describes how Labkita collects, uses, and shares
            your personal information when you visit our website or use our
            services.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
            <p>We collect information that you provide directly to us, such as when you:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Create an account</li>
              <li>Fill out a contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Use our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our products and services</li>
              <li>Personalize your experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share your
              information with third-party service providers who help us operate
              our business and provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. Please contact us if you wish to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
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