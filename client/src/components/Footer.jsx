export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-mark">N</span>

              <span>
                Nova<span>Flow</span>
              </span>
            </a>

            <p>
              Helping ambitious teams turn ideas into momentum.
            </p>

            <div className="socials">
              <a href="#" aria-label="Twitter">
                𝕏
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="GitHub">
                &lt;/&gt;
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
            </div>

            <div>
              <h4>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">Help center</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 WFlow. All rights reserved.</span>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>

            <a href="#">
              Security <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
