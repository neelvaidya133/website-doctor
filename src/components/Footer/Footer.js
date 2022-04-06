import React from "react";
import "./Footer.css";
// import { Button } from '../../Button';
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button>Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link
              activeClass="active"
              className="test1"
              to="About"
              spy={true}
              smooth={true}
              duration={500}
            >
              Test 1
            </Link>
            <Link href="/service">Service</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="footer-link-wrapper"></div>
      </div>
    </div>
  );
}

export default Footer;
