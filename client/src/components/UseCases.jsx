import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const useCases = [
  {
    id: "product",
    label: "Product",
    eyebrow: "FOR PRODUCT TEAMS",
    title: "Turn customer ideas into shipped products.",
    description:
      "Give product teams one place to manage discovery, roadmaps, launches and customer feedback without losing context.",
    metrics: [
      { value: "86%", label: "Roadmap progress" },
      { value: "42", label: "Active initiatives" },
      { value: "+31%", label: "Delivery velocity" }
    ],
    tags: ["Roadmaps", "Prioritization", "Launches"],
    accent: "purple"
  },
  {
    id: "marketing",
    label: "Marketing",
    eyebrow: "FOR MARKETING TEAMS",
    title: "Plan campaigns without the spreadsheet chaos.",
    description:
      "Coordinate campaigns, creative work and deadlines from one visual workspace that everyone can understand.",
    metrics: [
      { value: "24", label: "Active campaigns" },
      { value: "91%", label: "On-time delivery" },
      { value: "+48%", label: "Team efficiency" }
    ],
    tags: ["Campaigns", "Content", "Approvals"],
    accent: "pink"
  },
  {
    id: "engineering",
    label: "Engineering",
    eyebrow: "FOR ENGINEERING TEAMS",
    title: "Ship great software with less friction.",
    description:
      "Keep technical work visible, prioritize what matters and give everyone a clear view of what's shipping next.",
    metrics: [
      { value: "128", label: "Tasks shipped" },
      { value: "2.4d", label: "Average cycle time" },
      { value: "-28%", label: "Blocked work" }
    ],
    tags: ["Sprints", "Releases", "Issues"],
    accent: "cyan"
  },
  {
    id: "operations",
    label: "Operations",
    eyebrow: "FOR OPERATIONS TEAMS",
    title: "Replace repetitive work with reliable systems.",
    description:
      "Turn recurring processes into automated workflows and give operations teams a single source of truth.",
    metrics: [
      { value: "73", label: "Automations running" },
      { value: "14h", label: "Hours saved weekly" },
      { value: "+67%", label: "Process efficiency" }
    ],
    tags: ["Automation", "Processes", "Reporting"],
    accent: "green"
  }
];

function UseCaseVisual({ data }) {
  return (
    <div className={`usecase-visual ${data.accent}`}>
      <div className="usecase-window-top">
        <div className="usecase-window-title">
          <span className="usecase-window-icon">N</span>
          WFlow
        </div>

        <div className="usecase-window-dots">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="usecase-dashboard">
        <div className="usecase-side">
          <span className="side-active" />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="usecase-main">
          <div className="usecase-main-header">
            <div>
              <span>Workspace</span>
              <strong>{data.label}</strong>
            </div>

            <div className="usecase-mini-avatar">
              JD
            </div>
          </div>

          <div className="usecase-metric-grid">
            {data.metrics.map((metric) => (
              <div
                className="usecase-metric"
                key={metric.label}
              >
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>

          <div className="usecase-workspace">
            <div className="fake-chart">
              <div className="fake-chart-lines">
                <span />
                <span />
                <span />
              </div>

              <svg
                viewBox="0 0 500 170"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id={`usecase-gradient-${data.id}`}
                    x1="0"
                    x2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#8b5cf6"
                    />
                    <stop
                      offset="50%"
                      stopColor="#ec4899"
                    />
                    <stop
                      offset="100%"
                      stopColor="#22d3ee"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 142 C50 145 60 110 104 122 S155 112 200 118 S250 74 297 88 S345 95 394 59 S448 65 500 21"
                  fill="none"
                  stroke={`url(#usecase-gradient-${data.id})`}
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                <path
                  d="M0 142 C50 145 60 110 104 122 S155 112 200 118 S250 74 297 88 S345 95 394 59 S448 65 500 21 L500 170 L0 170 Z"
                  fill="url(#usecaseGradientFill)"
                  opacity="0.16"
                />

                <defs>
                  <linearGradient
                    id="usecaseGradientFill"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#8b5cf6"
                    />
                    <stop
                      offset="100%"
                      stopColor="#8b5cf6"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="usecase-side-cards">
              <div>
                <span />
                <span />
              </div>

              <div>
                <span />
                <span />
              </div>

              <div>
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UseCases() {
  const [activeId, setActiveId] = useState("product");

  const activeCase =
    useCases.find((item) => item.id === activeId) ||
    useCases[0];

  return (
    <section className="section usecases-section" id="use-cases">
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 0.6
          }}
        >
          <div className="section-eyebrow">
            BUILT FOR YOUR TEAM
          </div>

          <h2>
            One platform.
            <span className="gradient-text">
              {" "}Every team.
            </span>
          </h2>

          <p>
            WFlow adapts to different teams, workflows and
            ways of working without adding unnecessary complexity.
          </p>
        </motion.div>

        <div className="usecases-tabs">
          {useCases.map((item) => (
            <button
              key={item.id}
              className={`usecase-tab ${
                activeId === item.id ? "active" : ""
              }`}
              onClick={() => setActiveId(item.id)}
            >
              <span>{item.label}</span>

              {activeId === item.id && (
                <motion.span
                  className="usecase-tab-indicator"
                  layoutId="usecase-indicator"
                />
              )}
            </button>
          ))}
        </div>

        <div className="usecase-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              className="usecase-layout"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.3
              }}
            >
              <div className="usecase-copy">
                <div className="section-eyebrow">
                  {activeCase.eyebrow}
                </div>

                <h3>{activeCase.title}</h3>

                <p>
                  {activeCase.description}
                </p>

                <div className="usecase-tags">
                  {activeCase.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="usecase-stats">
                  {activeCase.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <UseCaseVisual data={activeCase} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}