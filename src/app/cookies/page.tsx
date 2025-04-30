/* eslint-disable react/no-unescaped-entities */

export default function CookiePolicyPage() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-xs">Last updated: 01 May 2025</p>
          <p>
            This Cookie Policy explains how Labkita ("we", "us", or "our") uses
            cookies and similar technologies to recognize you when you visit our
            website. It explains what these technologies are and why we use
            them, as well as your rights to control our use of them.
          </p>
          <h2 className="font-bold">What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners in order to make their websites work, or to work more
            efficiently, as well as to provide reporting information.
          </p>
          <h2 className="font-bold">Why do we use cookies?</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-inside list-disc">
            <li>To enable certain functions of the website</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>
              To enable advertisements delivery, including behavioral
              advertising
            </li>
          </ul>
          <h2 className="font-bold">Types of cookies we use</h2>
          <p>
            We use both session and persistent cookies on our website. The types
            of cookies we use are:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Essential cookies: These are cookies that are required for the
              operation of our website.
            </li>
            <li>
              Analytical/performance cookies: These allow us to recognize and
              count the number of visitors and to see how visitors move around
              our website when they are using it.
            </li>
            <li>
              Functionality cookies: These are used to recognize you when you
              return to our website.
            </li>
            <li>
              Targeting cookies: These cookies record your visit to our website,
              the pages you have visited and the links you have followed.
            </li>
          </ul>
          <h2 className="font-bold">How to control cookies</h2>
          <p>
            You can set your browser to refuse all or some browser cookies, or
            to alert you when websites set or access cookies. If you disable or
            refuse cookies, please note that some parts of this website may
            become inaccessible or not function properly.
          </p>
          <h2 className="font-bold">Changes to this Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to
            reflect, for example, changes to the cookies we use or for other
            operational, legal or regulatory reasons. Please therefore re-visit
            this Cookie Policy regularly to stay informed about our use of
            cookies and related technologies.
          </p>
          <h2 className="font-bold">Contact us</h2>
          <p>
            If you have any questions about our use of cookies or other
            technologies, please email us at{" "}
            <a href="mailto:labkita.my.id@gmail.com" className="text-blue-600">
              labkita.my.id@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
