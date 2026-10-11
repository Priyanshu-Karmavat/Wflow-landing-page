
import { motion } from "framer-motion";

const features = [
  {
    icon: "✦",
    title: "Move at lightning speed",
    text: "Automate repetitive work and turn complex processes into simple, repeatable workflows."
  },
  {
    icon: "◉",
    title: "One team, one workspace",
    text: "Bring conversations, projects and decisions together so nobody is left behind."
  },
  {
    icon: "↗",
    title: "See what's happening",
    text: "Beautiful dashboards give you the metrics that matter without overwhelming your team."
  },
  {
    icon: "⟐",
    title: "Flexible workflows",
    text: "Create workflows around the way your team actually works, not the other way around."
  },
  {
    icon: "✓",
    title: "Enterprise security",
    text: "Keep your organization's data protected with modern security and access controls."
  },
  {
    icon: "✧",
    title: "AI-powered insights",
    text: "Let AI surface patterns, summarize progress and help your team make faster decisions."
  }
];

export default function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">POWERFUL BY DEFAULT</div>

          <h2>
            Everything your team needs
            <span className="gradient-text"> to do their best work.</span>
          </h2>

          <p>
            A thoughtfully designed platform that combines the tools your team
            needs into one beautifully simple workspace.
          </p>
        </motion.div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <motion.article
              className="feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07
              }}
              whileHover={{ y: -7 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

              <div className="feature-arrow">↗</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
