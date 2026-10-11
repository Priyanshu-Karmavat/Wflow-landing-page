import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Kim",
    role: "VP Product at Orbit",
    initials: "SK",
    text: "WFlow replaced three different tools for us. The biggest difference isn't the features — it's how much calmer our team feels.",
    rating: 5
  },
  {
    name: "Marcus Lee",
    role: "Founder at Layer",
    initials: "ML",
    text: "We went from spending hours creating reports to having the information we need in seconds. It has completely changed how we operate.",
    rating: 5
  },
  {
    name: "Amelia Jones",
    role: "Operations Lead at Arc",
    initials: "AJ",
    text: "The UI is beautiful, but more importantly, it gets out of the way. Our team adopted it almost immediately.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="reviews">
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">LOVED BY TEAMS</div>

          <h2>
            Don't just take our
            <span className="gradient-text"> word for it.</span>
          </h2>

          <p>
            Teams around the world use WFlow to bring ideas to life faster.
          </p>
        </motion.div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
            >
              <div className="quote-icon">"</div>

              <div className="stars">
                {"★".repeat(testimonial.rating)}
              </div>

              <p className="testimonial-text">
                "{testimonial.text}"
              </p>

              <div className="person">
                <div className="person-avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
