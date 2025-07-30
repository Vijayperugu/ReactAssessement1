import logo from "../assets/download.jpeg"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="KTM Logo" />
            <p>READY TO RACE</p>
          </div>
          <div className="footer-links">
            <h4>MODELS</h4>
            <ul>
              <li>Naked</li>
              <li>Adventure</li>
              <li>Sport</li>
              <li>Super Sport</li>
              <li>Travel</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>RACING</h4>
            <ul>
              <li>MotoGP</li>
              <li>Dakar Rally</li>
              <li>Motocross</li>
              <li>Enduro</li>
              <li>Superbike</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
              <li>Press</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 KTM Sportmotorcycle GmbH. All rights reserved.</p>
          <div className="legal-links">
            <span >Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Cookie Policy</span>
            <span>Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
