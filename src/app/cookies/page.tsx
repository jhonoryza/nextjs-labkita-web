export default function CookiePolicyPage() {
  return (
    <article className="flex-grow">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: 01 May 2025</p>

        <div className="max-w-none text-muted-foreground space-y-6">
          <p>
            This Cookie Policy explains how Labkita (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses
            cookies and similar technologies to recognize you when you visit our
            website. It explains what these technologies are and why we use
            them, as well as your rights to control our use of them.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-foreground">What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners in order to make their websites work, or to work more
              efficiently, as well as to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Why do we use cookies?</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable advertisements delivery, including behavioral advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Types of cookies we use</h2>
            <p>We use both session and persistent cookies on our website. The types of cookies we use are:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Essential cookies: These are cookies that are required for the operation of our website.</li>
              <li>Analytical/performance cookies: These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
              <li>Functionality cookies: These are used to recognize you when you return to our website.</li>
              <li>Targeting cookies: These cookies record your visit to our website, the pages you have visited and the links you have followed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">How to control cookies</h2>
            <p>
              You can set your browser to refuse all or some browser cookies, or
              to alert you when websites set or access cookies. If you disable or
              refuse cookies, please note that some parts of this website may
              become inaccessible or not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Changes to this Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to
              reflect, for example, changes to the cookies we use or for other
              operational, legal or regulatory reasons. Please therefore re-visit
              this Cookie Policy regularly to stay informed about our use of
              cookies and related technologies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact us</h2>
            <p>
              If you have any questions about our use of cookies or other
              technologies, please email us at{" "}
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