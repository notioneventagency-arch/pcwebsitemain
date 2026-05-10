"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Branding / 3D",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Urban Fest 2025",
    category: "Event / Production",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 3,
    title: "Crypto Launch",
    category: "Branding / Web",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 4,
    title: "Fashion Week",
    category: "Event / Merch",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 5,
    title: "Tech Summit",
    category: "Event / 3D",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 6,
    title: "Luxury Rebrand",
    category: "Branding / Design",
    color: "from-slate-500/20 to-zinc-500/20",
  },
];

export function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Portfolio
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Case Studies
            </h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-foreground/20">
                {/* Image placeholder */}
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${project.color}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-foreground/10">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/80 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
