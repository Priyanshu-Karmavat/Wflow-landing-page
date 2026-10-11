
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">
            <span className="sparkle-icon">✦</span>
            The smarter way to build
          </div>

          <h1>
            Turn ideas into
            <span className="gradient-text"> momentum.</span>
          </h1>

          <p>
            NovaFlow gives ambitious teams everything they need to plan,
            collaborate and ship exceptional work — without the chaos.
          </p>

          <div className="hero-buttons">
            <a href="#pricing" className="button button-large">
              Start building free
              <span className="icon-arrow">→</span>
            </a>

            <a
              href="#features"
              className="button button-large button-ghost"
            >
              <span className="play-icon">▶</span>
              Explore platform
            </a>
          </div>

          <div className="trust-row">
            <div className="avatar-stack">
              <div className="avatar avatar-one">JD</div>
              <div className="avatar avatar-two">SK</div>
              <div className="avatar avatar-three">AM</div>
              <div className="avatar avatar-four">+</div>
            </div>

            <div>
              <strong>12,000+</strong>
              <span>teams moving faster</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="glow glow-one" />
          <div className="glow glow-two" />

          <div className="dashboard-card">
            <div className="dashboard-top">
              <div>
                <span className="dashboard-label">Workspace overview</span>
                <h3>Product Launch</h3>
              </div>

              <div className="window-controls">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="dashboard-stats">
              <div className="mini-stat">
                <span>Tasks</span>
                <strong>128</strong>
                <small className="positive">+14.8%</small>
              </div>

              <div className="mini-stat">
                <span>Completed</span>
                <strong>86%</strong>
                <small className="positive">+8.2%</small>
              </div>

              <div className="mini-stat">
                <span>Velocity</span>
                <strong>94.6</strong>
                <small className="positive">+11.4%</small>
              </div>
            </div>

            <div className="chart-area">
              <div className="chart-header">
                <div>
                  <span>Team velocity</span>
                  <strong>94.6 points</strong>
                </div>

                <div className="chart-period">
                  <span className="active">7D</span>
                  <span>30D</span>
                  <span>90D</span>
                </div>
              </div>

              <div className="chart">
                <div className="chart-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  viewBox="0 0 620 210"
                  preserveAspectRatio="none"
                  className="chart-svg"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#8b5cf6"
                        stopOpacity="0.35"
                      />
                      <stop
                        offset="100%"
                        stopColor="#8b5cf6"
                        stopOpacity="0"
                      />
                    </linearGradient>

                    <linearGradient id="lineGradient" x1="0" x2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 170 C50 175, 58 120, 104 138 S155 112, 202 125 S250 92, 298 107 S346 55, 394 78 S442 85, 490 54 S552 74, 620 25 L620 210 L0 210 Z"
                    fill="url(#chartGradient)"
                  />

                  <path
                    d="M0 170 C50 175, 58 120, 104 138 S155 112, 202 125 S250 92, 298 107 S346 55, 394 78 S442 85, 490 54 S552 74, 620 25"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="chart-dates">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            <div className="dashboard-footer">
              <div className="member-group">
                <span className="member m1">A</span>
                <span className="member m2">M</span>
                <span className="member m3">J</span>
                <span className="member m4">S</span>
              </div>

              <div className="progress-pill">
                <span className="check-symbol">✓</span>
                34 tasks completed
              </div>
            </div>
          </div>

          <motion.div
            className="floating-card floating-card-one"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="floating-icon purple">
              <span>↗</span>
            </div>

            <div>
              <small>Weekly growth</small>
              <strong>+28.4%</strong>
            </div>
          </motion.div>

          <motion.div
            className="floating-card floating-card-two"
            animate={{ y: [0, 9, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="status-dot" />

            <div>
              <strong>Launch is on track</strong>
              <small>All systems operational</small>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
