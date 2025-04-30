 

export default function Policy() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-xs">Last updated: 01 May 2025</p>
          <p>
            This Privacy Policy describes how Labkita collects, uses, and shares
            your personal information when you visit our website or use our
            services.
          </p>
          <h2 className="font-bold">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when
            you:
          </p>
          <ul className="list-inside list-disc">
            <li>Create an account</li>
            <li>Fill out a contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Use our services</li>
          </ul>
          <h2 className="font-bold">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-inside list-disc">
            <li>Provide and improve our services</li>
            <li>Communicate with you about our products and services</li>
            <li>Personalize your experience</li>
            <li>Comply with legal obligations</li>
          </ul>
          <h2 className="font-bold">Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share your
            information with third-party service providers who help us operate
            our business and provide our services.
          </p>
          <h2 className="font-bold">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. Please contact us if you wish to exercise these rights.
          </p>
          <h2 className="font-bold">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <h2 className="font-bold">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
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
