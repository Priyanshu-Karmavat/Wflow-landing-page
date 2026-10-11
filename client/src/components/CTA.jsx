import { useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ""
  });

  const handleChange = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: ""
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setForm({
        name: "",
        email: "",
        message: ""
      });

      setStatus({
        loading: false,
        success: true,
        error: ""
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message
      });
    }
  };

  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="cta-orb orb-one" />
          <div className="cta-orb orb-two" />

          <div className="cta-copy">
            <div className="section-eyebrow">LET'S BUILD</div>

            <h2>
              Ready to turn your
              <span className="gradient-text"> next big idea</span> into
              reality?
            </h2>

            <p>
              Tell us what you're building and our team will get back to you.
            </p>

            <div className="cta-points">
              <span>
                <span className="point-icon">✓</span>
                No credit card required
              </span>

              <span>
                <span className="point-icon">✓</span>
                Setup in minutes
              </span>

              <span>
                <span className="point-icon">✓</span>
                Cancel anytime
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a little about your project..."
                rows="5"
                required
              />
            </div>

            {status.success && (
              <div className="form-message success">
                <span>✓</span>
                Thanks! We'll be in touch soon.
              </div>
            )}

            {status.error && (
              <div className="form-message error">
                {status.error}
              </div>
            )}

            <button
              type="submit"
              className="button button-large form-submit"
              disabled={status.loading}
            >
              {status.loading ? (
                <>
                  <span className="loading-spinner" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <span>→</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
