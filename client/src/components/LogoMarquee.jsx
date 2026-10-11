import { motion } from "framer-motion";

const companies = [
  "ORBIT",
  "LAYER",
  "ARC",
  "NORTHSTAR",
  "VERTEX",
  "PULSE",
  "MONO",
  "ATLAS"
];

function LogoSet() {
  return (
    <>
      {companies.map((company) => (
        <div className="marquee-logo" key={company}>
          <span className="marquee-logo-mark">
            {company.charAt(0)}
          </span>

          <span>{company}</span>
        </div>
      ))}
    </>
  );
}

export default function LogoMarquee() {
  return (
    <section className="logo-marquee-section">
      <div className="container">
        <p className="logo-marquee-label">
          TRUSTED BY FORWARD-THINKING TEAMS
        </p>
      </div>

      <div className="logo-marquee">
        <div className="logo-marquee-track">
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  );
}