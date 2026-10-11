import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What is NovaFlow?",
    answer:
      "NovaFlow is an all-in-one workspace designed to help teams plan projects, collaborate, automate repetitive work and track performance from one place."
  },
  {
    question: "Can I try NovaFlow for free?",
    answer:
      "Yes. The Starter plan is free and gives you access to the core workspace features. You can upgrade whenever your team needs additional capabilities."
  },
  {
    question: "Do I need a credit card to get started?",
    answer:
      "No. You can create a workspace and start exploring the platform without entering payment details."
  },
  {
    question: "Can NovaFlow work with my existing tools?",
    answer:
      "NovaFlow is designed to fit into your existing workflow. The Scale plan also supports custom integrations for organizations with more advanced requirements."
  },
  {
    question: "Is my team's data secure?",
    answer:
      "NovaFlow is designed with modern security practices, access controls and enterprise-oriented features. Specific security requirements can be discussed with the team."
  },
  {
    question: "Can I cancel my plan at any time?",
    answer:
      "Yes. You can change or cancel your subscription based on the terms of your selected plan."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive((current) => (current === index ? -1 : index));
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">FAQ</div>

          <h2>
            Questions?
            <span className="gradient-text">
              {" "}We've got answers.
            </span>
          </h2>

          <p>
            Everything you need to know before bringing your team
            onto NovaFlow.
          </p>
        </motion.div>

        <motion.div
          className="faq-list"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={faq.question}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span className="faq-toggle">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{
                        height: 0,
                        opacity: 0
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut"
                      }}
                    >
                      <p className="faq-answer">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}