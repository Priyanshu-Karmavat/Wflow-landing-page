import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    description: "For individuals and small teams getting started.",
    price: "$0",
    period: "forever",
    features: [
      "Up to 5 team members",
      "Unlimited projects",
      "Basic analytics",
      "Community support"
    ]
  },
  {
    name: "Growth",
    description: "For growing teams that need more power.",
    price: "$24",
    period: "per user / month",
    popular: true,
    features: [
      "Unlimited team members",
      "Advanced analytics",
      "AI-powered insights",
      "Custom workflows",
      "Priority support"
    ]
  },
  {
    name: "Scale",
    description: "For organizations operating at enterprise scale.",
    price: "Custom",
    period: "tailored to you",
    features: [
      "Everything in Growth",
      "Advanced permissions",
      "SSO & enterprise security",
      "Dedicated success manager",
      "Custom integrations"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">SIMPLE PRICING</div>

          <h2>
            Start free.
            <span className="gradient-text"> Scale confidently.</span>
          </h2>

          <p>
            Choose the plan that fits your team today. Upgrade when you're
            ready.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1
              }}
            >
              {plan.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <div className="pricing-top">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>

              <div className="price">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>

              <a
                href="#contact"
                className={`button pricing-button ${
                  plan.popular ? "" : "button-ghost"
                }`}
              >
                {plan.name === "Scale" ? "Talk to sales" : "Start free"}
              </a>

              <div className="pricing-divider" />

              <span className="included-label">What's included</span>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
