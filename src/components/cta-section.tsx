import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-xl border bg-card shadow-sm p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let&apos;s discuss your project and turn your ideas into reality.
            We&apos;re just one message away.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
