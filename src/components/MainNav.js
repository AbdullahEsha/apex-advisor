import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLocalPhone } from "react-icons/md";

const MainNav = () => {
  return (
    <>
      <div className="main-nav-container-out">
        <div className="main-nav-container">
          <div className="main-nav-left">
            <Image
              src="/image/logo.png"
              alt="logo"
              height={79}
              width={145}
              className="logo_main_nav"
            />
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/service">Services</Link>
            <Link href="/services-area">Services Area</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="main-nav-right">
            <Link href="" className="nav-button">
              Email Now
            </Link>
            <a href="" className="nav-button">
              Book an appoinment
            </a>
            <a href="tel:(813) 678 2400" id="phone-number">
              <MdLocalPhone size={20} /> (813) 678 2400
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
