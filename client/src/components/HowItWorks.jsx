import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Bring your team together",
    description:
      "Create a workspace, invite your team and keep conversations, projects and important decisions in one place.",
    visual: "workspace"
  },
  {
    number: "02",
    title: "Build your workflow",
    description:
      "Create flexible workflows that match the way your team operates instead of forcing everyone into a rigid process.",
    visual: "workflow"
  },
  {
    number: "03",
    title: "Ship with confidence",
    description:
      "Track progress, understand performance and use real-time insights to keep every project moving forward.",
    visual: "analytics"
  }
];

function WorkspaceVisual() {
  return (
    <div className="how-visual workspace-visual">
      <div className="visual-sidebar">
        <span className="visual-logo">N</span>
        <span className="visual-nav active" />
        <span className="visual-nav" />
        <span className="visual-nav" />
        <span className="visual-nav" />
      </div>

      <div className="visual-content">
        <div className="visual-heading">
          <span />
          <span />
        </div>

        <div className="visual-cards">
          <div />
          <div />
          <div />
        </div>

        <div className="visual-list">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className="how-visual workflow-visual">
      <div className="workflow-node node-one">
        <span>Ideas</span>
      </div>

      <div className="workflow-line line-one" />

      <div className="workflow-node node-two">
        <span>Build</span>
      </div>

      <div className="workflow-line line-two" />

      <div className="workflow-node node-three">
        <span>Review</span>
      </div>

      <div className="workflow-line line-three" />

      <div className="workflow-node node-four">
        <span>Launch</span>
      </div>

      <div className="workflow-pulse" />
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="how-visual analytics-visual">
      <div className="analytics-header">
        <span>Performance</span>
        <strong>+28.4%</strong>
      </div>

      <div className="analytics-chart">
        <span className="analytics-grid grid-one" />
        <span className="analytics-grid grid-two" />
        <span className="analytics-grid grid-three" />

        <svg
          viewBox="0 0 500 220"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="analyticsLine"
              x1="0"
              x2="1"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>

            <linearGradient
              id="analyticsFill"
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#8b5cf6"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="#8b5cf6"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            d="M0 170 C45 168 55 135 95 145 S155 125 195 132 S250 80 290 105 S345 115 380 70 S440 78 500 30 L500 220 L0 220 Z"
            fill="url(#analyticsFill)"
          />

          <path
            d="M0 170 C45 168 55 135 95 145 S155 125 195 132 S250 80 290 105 S345 115 380 70 S440 78 500 30"
            fill="none"
            stroke="url(#analyticsLine)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <circle
            cx="500"
            cy="30"
            r="6"
            fill="#22d3ee"
          />
        </svg>
      </div>

      <div className="analytics-stats">
        <div>
          <span>Completed</span>
          <strong>86%</strong>
        </div>

        <div>
          <span>Velocity</span>
          <strong>94.6</strong>
        </div>

        <div>
          <span>Growth</span>
          <strong>28.4%</strong>
        </div>
      </div>
    </div>
  );
}

function StepVisual({ type }) {
  if (type === "workspace") {
    return <WorkspaceVisual />;
  }

  if (type === "workflow") {
    return <WorkflowVisual />;
  }

  return <AnalyticsVisual />;
}

export default function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            HOW IT WORKS
          </div>

          <h2>
            From idea to execution
            <span className="gradient-text">
              {" "}
              in three simple steps.
            </span>
          </h2>

          <p>
            WFlow removes the friction between having a great idea
            and actually getting it done.
          </p>
        </motion.div>

        <div className="how-steps">
          {steps.map((step, index) => (
            <motion.article
              className="how-step"
              key={step.number}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.15
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12
              }}
            >
              <div className="how-step-number">
                {step.number}
              </div>

              <div className="how-step-copy">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <StepVisual type={step.visual} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}