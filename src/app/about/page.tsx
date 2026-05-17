import Image from "next/image";

export default function AboutPage() {
  const logo = "https://webassets.labkita.my.id/blog/image/quran.png";
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <div className="border-2 border-foreground shadow-neo overflow-hidden mb-8 bg-background">
          <Image
            src={logo}
            width={800}
            height={600}
            alt="Labkita Office"
            className="mix-blend-multiply object-contain h-full mx-auto"
          />
        </div>
        <h1 className="text-4xl font-black mb-8 text-foreground border-b-2 border-foreground pb-4 inline-block">
          Work with us
        </h1>
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground/80 font-medium mb-6">
              We available to help you choose your tech stack, develop your
              application, or review your code.
            </p>
            <p className="text-lg text-foreground/80 font-medium mb-6">
              We have over 6 years experience building web applications, APIs
              services using different languages and technologies. We value
              friendliness and kindness in interactions, and simplicity and
              clarity in code, architecture and workflows.
            </p>
            <p className="text-lg text-foreground/80 font-medium">
              We like both technology and business. We just as happy to talk
              with you about return on investment as relational databases. In
              fact, where the two areas meet is where We like to work most.
            </p>
          </div>
        </div>
        <h1 className="text-4xl font-black mb-8 text-foreground border-b-2 border-foreground pb-4 inline-block mt-12">
          What we can help you with
        </h1>
        <div className="grid grid-cols-1 gap-12 items-center">
          <ul className="text-lg text-foreground/80 font-medium space-y-6">
            <li className="border-2 border-foreground p-4 shadow-neo-sm bg-background">
              <strong className="text-primary">Planning for your project or startup</strong> — You can
              hire us to help you define the requirements for your project, pick
              the right technology stack, and architect the infrastructure. We
              can help create both high-level roadmaps and detailed technical
              specifications to turn your vision into reality.
            </li>
            <li className="border-2 border-foreground p-4 shadow-neo-sm bg-background">
              <strong className="text-primary">Software development</strong> — We can work with you to
              write the code for your web applications, APIs and RPC services.
              We proficient with Laravel, Nestjs or Go.
            </li>
            <li className="border-2 border-foreground p-4 shadow-neo-sm bg-background">
              <strong className="text-primary">Code review</strong> — If you&apos;d like an experienced
              second set of eyes to go over your code then We are happy to help.
            </li>
          </ul>
        </div>
        <h1 className="text-4xl font-black mb-8 text-foreground border-b-2 border-foreground pb-4 inline-block mt-12">
          How it works
        </h1>
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground/80 font-medium mb-6">
              To start with, we&apos;ll schedule a video call to discuss what
              you want to accomplish and then we can move forward from there.
              Sessions start at one hour.
            </p>
            <p className="text-lg text-foreground/80 font-medium mb-6">
              We only take on consultancy work where we are positive that
              it&apos;s a good fit for both you and us, and we are confident
              that we will be able to provide support in the long term if
              needed. We can speak English and wherever you are in the world, We
              are happy to work remotely with you.
            </p>
            <p className="text-lg text-foreground/80 font-medium mb-6">
              Please feel free to contact us here to introduce yourself and
              start the conversation.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-black mb-8 text-center text-foreground border-b-2 border-foreground pb-4 inline-block w-full">
            Our Location
          </h2>
          <div className="border-2 border-foreground shadow-neo overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.49208401724752!2d107.54134207884584!3d-7.024170704657369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDEnMjcuMSJTIDEwN8KwMzInMjkuNCJF!5e0!3m2!1sid!2ssg!4v1740912783677!5m2!1sid!2ssg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}