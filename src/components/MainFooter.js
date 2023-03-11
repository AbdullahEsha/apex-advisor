import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const MainFooter = () => {
  return (
    <>
      <div className="footer-background">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-logo">
                <Image
                  src="/image/logowhite.png"
                  alt="logowhite"
                  height={111}
                  width={203}
                />
                <p>1211 Tech Blvd, Suite 120, Tampa, FL 33619</p>
                <a href="tel: (813) 678-2400">(813) 678-2400</a>
                <br />
                <a href="mailto: info@apexadvisor.pro">info@apexadvisor.pro</a>
              </div>
              <div className="col-link">
                <h3>LINKS</h3>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/services-area">Services Area</Link>
                {/* <Link href="/blog">Blog</Link> */}
                <Link href="/contact">Contact</Link>
              </div>
              <div className="col-follow">
                <h3>FOLLOW US</h3>
                <div className="footer-follow-icon">
                  <Link
                    href="https://www.facebook.com/apexadvisorgroup
"
                  >
                    <FaFacebookSquare size={35} />
                  </Link>{" "}
                  <Link href="https://www.instagram.com/apexadvisorgroup/">
                    <AiFillInstagram size={40} />
                  </Link>{" "}
                  <Link href="https://www.linkedin.com/company/apex-advisor-group-inc/">
                    <FaLinkedin size={35}></FaLinkedin>
                  </Link>{" "}
                  <Link href="https://www.youtube.com/@apexadvisorgroup">
                    <AiFillYoutube size={35} />
                  </Link>{" "}
                  <Link href="https://twitter.com/apex_advisor">
                    <FaTwitter size={35} />
                  </Link>
                </div>
              </div>
              <div className="col-subscribe">
                <h3>SUBSCRIBE</h3>
                <p>Sign up if you would like to receive our newsletter</p>
                <input type="text" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright ©{new Date().getFullYear()} All Rights Reserved by{" "}
            <Link
              href="https://bayshorecommunication.com/"
              target="_blank"
              id="bayshore-notation"
            >
              Bayshore Communication
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
