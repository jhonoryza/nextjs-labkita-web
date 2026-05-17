"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 30;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection({ productCount, appsCount }: { productCount: number; appsCount: number }) {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-1">
              <AnimatedCounter end={productCount} suffix="+" />
            </div>
            <p className="text-primary-foreground/80 text-sm font-medium">Products Built</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">
              <AnimatedCounter end={appsCount} suffix="+" />
            </div>
            <p className="text-primary-foreground/80 text-sm font-medium">Apps Published</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">
              <AnimatedCounter end={6} suffix="+" />
            </div>
            <p className="text-primary-foreground/80 text-sm font-medium">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <p className="text-primary-foreground/80 text-sm font-medium">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
