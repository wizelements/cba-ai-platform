import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { ChatBot } from "@/components/ChatBot";
import { ProjectCard } from "@/components/ProjectCard";
import { TechGrid } from "@/components/TechGrid";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Cod3BlackAgency | AI-Powered Full Stack Builds</title>
        <meta name="description" content="Launch your eCommerce SaaS idea with Cod3BlackAgency's full-stack AI platform." />
      </Head>
      <main className="px-6 py-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Cod3BlackAgency</h1>
          <p className="text-gray-400 text-lg">We build production AI systems. Not marketing AI. Not toy demos.</p>
        </motion.div>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">🚀 Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">🧰 Tech Stack</h2>
          <TechGrid />
        </section>
      </main>
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p className="text-lg font-semibold text-white mb-2">Cod3BlackAgency</p>
        <p className="text-sm">Built for production. © {new Date().getFullYear()}</p>
      </footer>
      <ChatBot />
    </div>
  );
}