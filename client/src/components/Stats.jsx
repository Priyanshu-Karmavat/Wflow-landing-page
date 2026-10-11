import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 12000,
    suffix: "+",
    label: "Teams using WFlow",
    decimals: 0
  },
  {
    value: 98.7,
    suffix: "%",
    label: "Customer satisfaction",
    decimals: 1
  },
  {
    value: 2.4,
    suffix: "x",
    label: "Faster project delivery",
    decimals: 1
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "Average customer rating",
    decimals: 1
  }
];

function AnimatedNumber({ value, decimals, suffix }) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) {
          return;
        }

        hasStarted.current = true;

        const duration = 1400;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easedProgress =
            1 - Math.pow(1 - progress, 3);

          const currentValue =
            value * easedProgress;

          setDisplayValue(
            Number(currentValue.toFixed(decimals))
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, decimals]);

  return (
    <span ref={elementRef}>
      {displayValue.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-wrapper">
          {stats.map((stat, index) => (
            <motion.div
              className="stat-item"
              key={stat.label}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.5
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08
              }}
            >
              <div className="stat-value">
                <AnimatedNumber
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>

              <div className="stat-label">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}