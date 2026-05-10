"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Script from "next/script";

export function InstagramFeed() {
  return (
    <section className="px-6 py-24 bg-black text-white">

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between"
        >

          <div className="flex items-center gap-4">

            <Instagram className="h-6 w-6" />

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Neueste Instagram Reels
            </h2>

          </div>

          <a
            href="https://www.instagram.com/notion_eventagency/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            @notion_eventagency
          </a>

        </motion.div>

        {/* Elfsight Script */}

        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />

        {/* Instagram Feed */}

        <div
          className="elfsight-app-789976ff-5530-4cb3-9849-46f91817537a"
          data-elfsight-app-lazy
        ></div>

      </div>

    </section>
  );
}
