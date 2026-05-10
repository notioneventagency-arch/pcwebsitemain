"use client";

import { motion } from "framer-motion";
import { Box, Palette, ShoppingBag, CalendarDays, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Box,
    title: "3D Logos & Visuals",
    description:
      "Eye-catching 3D designs that make your brand unforgettable. Motion graphics and visual identities that stand out.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Complete brand identity systems from strategy to execution. Logos, guidelines, and visual language that resonates.",
  },
  {
    icon: ShoppingBag,
    title: "Merch & Production",
    description:
      "Premium merchandise design and production. From concept to delivery, we handle every detail.",
  },
  {
    icon: CalendarDays,
    title: "Event Agency",
    description:
      "Full-service event planning and production. Music, photo and videography services.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            What We Do
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Services
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group relative h-full cursor-pointer rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-foreground/20 hover:bg-secondary/50">
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>

                {/* Arrow */}
                <div className="absolute right-8 top-8 opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
