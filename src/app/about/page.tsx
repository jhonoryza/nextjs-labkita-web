import Image from "next/image";

export default function AboutPage() {
  const logo = "https://webassets.labkita.my.id/blog/image/quran.png";
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <div className="rounded-lg border bg-card shadow-sm overflow-hidden mb-8">
          <Image
            src={logo}
            width={800}
            height={600}
            alt="Labkita Office"
            className="mix-blend-multiply object-contain h-full mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-foreground">
          Work with us
        </h1>
        <div className="space-y-4 mb-12">
          <p className="text-muted-foreground leading-relaxed">
            We available to help you choose your tech stack, develop your
            application, or review your code.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We have over 6 years experience building web applications, APIs
            services using different languages and technologies. We value
            friendliness and kindness in interactions, and simplicity and
            clarity in code, architecture and workflows.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We like both technology and business. We just as happy to talk
            with you about return on investment as relational databases. In
            fact, where the two areas meet is where We like to work most.
          </p>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-foreground">
          What we can help you with
        </h1>
        <div className="space-y-4 mb-12">
          <div className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1">Planning for your project or startup</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You can hire us to help you define the requirements for your project, pick
              the right technology stack, and architect the infrastructure. We
              can help create both high-level roadmaps and detailed technical
              specifications to turn your vision into reality.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1">Software development</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We can work with you to write the code for your web applications, APIs and RPC services.
              We proficient with Laravel, Nestjs or Go.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1">Code review</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If you&apos;d like an experienced second set of eyes to go over your code then We are happy to help.
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-foreground">
          How it works
        </h1>
        <div className="space-y-4 mb-12">
          <p className="text-muted-foreground leading-relaxed">
            To start with, we&apos;ll schedule a video call to discuss what
            you want to accomplish and then we can move forward from there.
            Sessions start at one hour.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We only take on consultancy work where we are positive that
            it&apos;s a good fit for both you and us, and we are confident
            that we will be able to provide support in the long term if
            needed. We can speak English and wherever you are in the world, We
            are happy to work remotely with you.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Please feel free to contact us here to introduce yourself and
            start the conversation.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
            Our Location
          </h2>
          <div className="rounded-lg border shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.873143347476!2d107.5415406!3d-7.024194299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ed47db9806e3%3A0x87bd4a02dcbd41a9!2slabkita%20computer!5e0!3m2!1sid!2ssg!4v1779037418566!5m2!1sid!2ssg"
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