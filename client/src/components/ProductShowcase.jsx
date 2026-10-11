import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabs = [
  {
    id: "projects",
    label: "Projects"
  },
  {
    id: "analytics",
    label: "Analytics"
  },
  {
    id: "automation",
    label: "Automation"
  }
];

function ProjectsPanel() {
  return (
    <motion.div
      className="product-panel"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35 }}
    >
      <div className="product-panel-header">
        <div>
          <span className="product-overline">PROJECTS</span>
          <h3>Product Launch</h3>
        </div>

        <button className="mock-button">
          + New task
        </button>
      </div>

      <div className="project-progress">
        <div>
          <span>Launch progress</span>
          <strong>78%</strong>
        </div>

        <div className="progress-track">
          <motion.div
            className="progress-value"
            initial={{ width: 0 }}
            animate={{ width: "78%" }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      <div className="task-columns">
        <div className="task-column">
          <div className="task-column-header">
            <span className="column-dot purple-dot" />
            <span>To do</span>
            <b>4</b>
          </div>

          <div className="task-card">
            <strong>Finalize homepage</strong>
            <span>Design · High</span>
          </div>

          <div className="task-card">
            <strong>Prepare launch email</strong>
            <span>Marketing</span>
          </div>
        </div>

        <div className="task-column">
          <div className="task-column-header">
            <span className="column-dot pink-dot" />
            <span>In progress</span>
            <b>3</b>
          </div>

          <div className="task-card featured-task">
            <strong>Build onboarding</strong>
            <span>Product · High</span>
            <div className="task-assignees">
              <span>JD</span>
              <span>SK</span>
            </div>
          </div>

          <div className="task-card">
            <strong>Analytics dashboard</strong>
            <span>Engineering</span>
          </div>
        </div>

        <div className="task-column">
          <div className="task-column-header">
            <span className="column-dot green-dot" />
            <span>Complete</span>
            <b>8</b>
          </div>

          <div className="task-card completed-task">
            <strong>Brand guidelines</strong>
            <span>Design · Done</span>
          </div>

          <div className="task-card completed-task">
            <strong>Landing page</strong>
            <span>Marketing · Done</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AnalyticsPanel() {
  return (
    <motion.div
      className="product-panel"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35 }}
    >
      <div className="product-panel-header">
        <div>
          <span className="product-overline">ANALYTICS</span>
          <h3>Team performance</h3>
        </div>

        <button className="date-button">
          Last 30 days
          <span>⌄</span>
        </button>
      </div>

      <div className="analytics-overview">
        <div className="overview-card">
          <span>Tasks completed</span>
          <strong>1,284</strong>
          <small className="overview-positive">
            ↑ 18.6%
          </small>
        </div>

        <div className="overview-card">
          <span>Team velocity</span>
          <strong>94.6</strong>
          <small className="overview-positive">
            ↑ 11.4%
          </small>
        </div>

        <div className="overview-card">
          <span>Avg. cycle time</span>
          <strong>2.4d</strong>
          <small className="overview-positive">
            ↓ 24.8%
          </small>
        </div>
      </div>

      <div className="large-chart">
        <div className="large-chart-header">
          <div>
            <span>Work completed</span>
            <strong>94.6 points</strong>
          </div>

          <div className="chart-legend">
            <span>
              <i className="legend-purple" />
              This period
            </span>

            <span>
              <i className="legend-gray" />
              Previous
            </span>
          </div>
        </div>

        <div className="large-chart-body">
          <div className="large-chart-grid">
            <span />
            <span />
            <span />
            <span />
          </div>

          <svg
            viewBox="0 0 800 280"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="showcaseChartLine"
                x1="0"
                x2="1"
              >
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>

              <linearGradient
                id="showcaseChartFill"
                x1="0"
                x2="0"
                y1="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#8b5cf6"
                  stopOpacity="0.28"
                />
                <stop
                  offset="100%"
                  stopColor="#8b5cf6"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              d="M0 225 C60 220 75 185 130 196 S205 175 260 188 S320 125 370 150 S440 162 490 105 S550 115 610 88 S700 80 800 28 L800 280 L0 280 Z"
              fill="url(#showcaseChartFill)"
            />

            <path
              d="M0 225 C60 220 75 185 130 196 S205 175 260 188 S320 125 370 150 S440 162 490 105 S550 115 610 88 S700 80 800 28"
              fill="none"
              stroke="url(#showcaseChartLine)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <circle
              cx="800"
              cy="28"
              r="7"
              fill="#22d3ee"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function AutomationPanel() {
  return (
    <motion.div
      className="product-panel"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35 }}
    >
      <div className="product-panel-header">
        <div>
          <span className="product-overline">AUTOMATION</span>
          <h3>Smart workflows</h3>
        </div>

        <button className="mock-button">
          + Create automation
        </button>
      </div>

      <div className="automation-flow">
        <div className="automation-node">
          <span className="automation-number">01</span>

          <div>
            <small>WHEN</small>
            <strong>Task completed</strong>
            <span>Trigger</span>
          </div>
        </div>

        <div className="automation-connector">
          <span />
        </div>

        <div className="automation-node automation-active">
          <span className="automation-number">02</span>

          <div>
            <small>THEN</small>
            <strong>Notify team</strong>
            <span>Action</span>
          </div>
        </div>

        <div className="automation-connector">
          <span />
        </div>

        <div className="automation-node">
          <span className="automation-number">03</span>

          <div>
            <small>THEN</small>
            <strong>Update report</strong>
            <span>Action</span>
          </div>
        </div>
      </div>

      <div className="automation-example">
        <div className="automation-example-header">
          <span>Recent automation activity</span>
          <span className="live-status">
            <i />
            Live
          </span>
        </div>

        <div className="automation-row">
          <span className="activity-check">✓</span>

          <div>
            <strong>Task completed</strong>
            <small>Homepage redesign</small>
          </div>

          <span>2m ago</span>
        </div>

        <div className="automation-row">
          <span className="activity-check">✓</span>

          <div>
            <strong>Team notified</strong>
            <small>Marketing workspace</small>
          </div>

          <span>2m ago</span>
        </div>

        <div className="automation-row">
          <span className="activity-check">✓</span>

          <div>
            <strong>Report updated</strong>
            <small>Weekly performance</small>
          </div>

          <span>2m ago</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section className="section product-showcase-section"
      id="product"
    >
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            SEE IT IN ACTION
          </div>

          <h2>
            One workspace.
            <span className="gradient-text">
              {" "}Endless possibilities.
            </span>
          </h2>

          <p>
            Manage projects, understand performance and automate
            repetitive work from a single beautiful workspace.
          </p>
        </motion.div>

        <motion.div
          className="product-showcase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="showcase-top">
            <div className="showcase-brand">
              <span className="showcase-brand-mark">
                N
              </span>

              <span>WFlow workspace</span>
            </div>

            <div className="showcase-window-controls">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="showcase-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`showcase-tab ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}

                {activeTab === tab.id && (
                  <motion.span
                    className="showcase-tab-line"
                    layoutId="showcase-tab-line"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="showcase-content">
            <AnimatePresence mode="wait">
              {activeTab === "projects" && (
                <ProjectsPanel key="projects" />
              )}

              {activeTab === "analytics" && (
                <AnalyticsPanel key="analytics" />
              )}

              {activeTab === "automation" && (
                <AutomationPanel key="automation" />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}