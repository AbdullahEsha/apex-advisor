import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

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
                <Link href="/">About</Link>
                <Link href="/">Services</Link>
                <Link href="/">Services Area</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Contact</Link>
              </div>
              <div className="col-follow">
                <h3>FOLLOW US</h3>
                <div className="footer-follow-icon">
                  <FaFacebookSquare size={35} /> <AiFillInstagram size={40} />
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
            ©{new Date().getFullYear()} Apex Advisor Group INC ®All Rights
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
