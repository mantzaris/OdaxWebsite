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
    id: "data-ml",
    label: "Data and ML Systems",
    heading: "Pipelines and model evaluation you can trust",
    summary:
      "ETL, experiment tracking, and analytics with clear metrics for decision making. From classical statistics to modern deep learning (including edge computing).",
    linkHref: "/services",
    linkLabel: "See data and ML services",
  },
  {
    id: "embedded",
    label: "Embedded and Edge computing",
    heading: "Sensing systems built to ship",
    summary:
      "Complete systems for signal processing on a variety of hardware platforms.",
    linkHref: "/services",
    linkLabel: "See hardware services",
  },
  {
    id: "apps",
    label: "Web and Desktop Apps",
    heading: "Production interfaces for your systems",
    summary:
      "ElectronJS for cross platform desktop applications. UIs based on modern frameworks like Svelte. Local or connected computation.",
    linkHref: "/services",
    linkLabel: "See app development",
  },
]

export default function HeroTabs() {
  const [activeId, setActiveId] = useState<Tab["id"]>("data-ml")
  const active = tabs.find(t => t.id === activeId) ?? tabs[0]

  return (
    <section className="py-10 md:py-12 lg:py-16">
      <div className="max-w-3xl">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium shadow-sm dark:border-slate-800 dark:bg-slate-900">
          Sensing | Data Platforms | Machine Learning
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl leading-tight">
          {active.heading}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {active.summary}
        </p>

        {/* Tabs */}
        <div role="tablist" aria-label="Hero sections" className="mt-6 flex flex-wrap gap-2">
          {tabs.map(tab => {
            const isActive = tab.id === activeId
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                className={
                  "px-4 py-2 rounded-xl border text-sm " +
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
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
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

        {/* Small proof row (optional, keep or delete) */}
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="font-semibold">SBIR Phase I-II</p>
            <p className="mt-1 text-slate-600 dark:text-slate-400">Proposal to delivery</p>
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="font-semibold">Embedded to cloud</p>
            <p className="mt-1 text-slate-600 dark:text-slate-400">Sensors and pipelines</p>
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="font-semibold">Research to production</p>
            <p className="mt-1 text-slate-600 dark:text-slate-400">ML evaluation and apps</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
