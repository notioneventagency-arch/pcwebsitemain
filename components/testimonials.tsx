"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Insane quality and attention to detail. They transformed our entire brand identity in ways we never imagined possible.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: "SC",
  },
  {
    quote:
      "Best agency we've ever worked with. Their creative vision and execution are unmatched in the industry.",
    author: "Marcus Johnson",
    role: "CMO, Innovate Labs",
    avatar: "MJ",
  },
  {
    quote:
      "10/10 experience from start to finish. Our event was absolutely flawless thanks to their incredible team.",
    author: "Emily Rodriguez",
    role: "Director, Future Events",
    avatar: "ER",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/30 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            What Clients Say
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                {/* Quote icon */}
                <Quote className="mb-4 h-8 w-8 text-accent" />

                {/* Quote text */}
                <p className="flex-1 text-lg leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
