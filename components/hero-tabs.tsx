"use client"

import Link from "next/link"
import { useState } from "react"

type Tab = {
  id: string
  label: string
  heading: string
  summary: string
  linkHref: string
  linkLabel: string
}

const tabs: Tab[] = [
  {
    id: "agentic-ai",
    label: "Agentic AI",
    heading: "AI and software that get work done",
    summary:
      "We build AI agents and software infrastructure that connect your data, tools, and business processes. From deep task integrations to production deployment, we help turn repeated work into reliable workflows.",
    linkHref: "/services/agentic-ai",
    linkLabel: "Explore Agentic AI",
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    heading: "Security built into your software and infrastructure",
    summary:
      "Practical security reviews, application and API hardening, secure development pipelines, and protection for AI systems. We help identify weaknesses, implement fixes, and verify the results.",
    linkHref: "/services/cybersecurity",
    linkLabel: "Explore Cybersecurity",
  },
  {
    id: "data-ml",
    label: "Data and ML Systems",
    heading: "Turn business data into useful decisions",
    summary:
      "Data pipelines, analytics, machine learning, and database services that connect your information to the questions your team needs to answer.",
    linkHref: "/services/data-science",
    linkLabel: "Explore Data Science",
  },
  {
    id: "apps",
    label: "Web and Desktop Apps",
    heading: "Software built around how your team works",
    summary:
      "Web and Electron desktop applications that connect business systems, cloud services, and users with clear interfaces and practical integrations.",
    linkHref: "/services/electron-apps",
    linkLabel: "Explore Desktop Apps",
  },
]

export default function HeroTabs() {
  const [activeId, setActiveId] = useState<Tab["id"]>(tabs[0].id)
  const active = tabs.find(t => t.id === activeId) ?? tabs[0]

  return (
    <section className="py-10 md:py-12 lg:py-16">
      <div className="max-w-3xl">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium shadow-sm dark:border-slate-800 dark:bg-slate-900">
          Software Services | AI | Cybersecurity
        </span>

        <div id="hero-service-details">
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl leading-tight">
            {active.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {active.summary}
          </p>
        </div>

        {/* Tabs */}
        <div role="group" aria-label="Explore our services" className="mt-6 flex flex-wrap gap-2">
          {tabs.map(tab => {
            const isActive = tab.id === activeId
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isActive}
                aria-controls="hero-service-details"
                className={
                  "px-4 py-2 rounded-xl border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 " +
                  (isActive
                    ? "border-slate-900 bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900"
                    : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800")
                }
                onClick={() => setActiveId(tab.id)}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
          >
            Explore services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-100"
          >
            Start a project
          </Link>
          <Link
            href={active.linkHref}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800"
          >
            {active.linkLabel}
          </Link>
        </div>

      </div>
    </section>
  )
}
