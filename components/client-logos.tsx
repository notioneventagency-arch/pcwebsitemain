"use client";

import { motion } from "framer-motion";

const clients = [
  "Tapedesign",
  "Bixair Clothing",
  "Merch-Mates",
  "TennisMol",
  "SPAR",
];

export function ClientLogos() {
  return (
    <section className="border-y border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Trusted by 
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          {/* Scrolling logos */}
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-16"
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center justify-center"
              >
                <span className="whitespace-nowrap text-xl font-semibold text-muted-foreground/60 transition-colors hover:text-foreground">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
