export default function Policy() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-black mb-8 text-center text-foreground border-b-2 border-foreground pb-4">
          Privacy Policy
        </h1>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          <p className="font-bold text-xs text-foreground/60">Last updated: 01 May 2025</p>
          <p className="text-foreground/80 font-medium">
            This Privacy Policy describes how Labkita collects, uses, and shares
            your personal information when you visit our website or use our
            services.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">Information We Collect</h2>
          <p className="text-foreground/80 font-medium">
            We collect information that you provide directly to us, such as when
            you:
          </p>
          <ul className="list-inside list-disc text-foreground/80 font-medium space-y-1">
            <li>Create an account</li>
            <li>Fill out a contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Use our services</li>
          </ul>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">How We Use Your Information</h2>
          <p className="text-foreground/80 font-medium">We use the information we collect to:</p>
          <ul className="list-inside list-disc text-foreground/80 font-medium space-y-1">
            <li>Provide and improve our services</li>
            <li>Communicate with you about our products and services</li>
            <li>Personalize your experience</li>
            <li>Comply with legal obligations</li>
          </ul>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">Sharing Your Information</h2>
          <p className="text-foreground/80 font-medium">
            We do not sell your personal information. We may share your
            information with third-party service providers who help us operate
            our business and provide our services.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">Your Rights</h2>
          <p className="text-foreground/80 font-medium">
            You have the right to access, correct, or delete your personal
            information. Please contact us if you wish to exercise these rights.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">Changes to This Policy</h2>
          <p className="text-foreground/80 font-medium">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <h2 className="font-black text-lg mt-4 border-b-2 border-foreground pb-2">Contact Us</h2>
          <p className="text-foreground/80 font-medium">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:labkita.my.id@gmail.com" className="font-bold text-primary underline">
              labkita.my.id@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}