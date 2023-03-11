import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import useWindowDimensions from "./useWindowDimensions";

const MainNav = () => {
  const [menuIcon, setMenuIcon] = useState(true);
  const [subMenuIcon, setSubMenuIcon] = useState(true);
  const { width } = useWindowDimensions();
  const router = useRouter();

  return (
    <>
      {width < 992 ? (
        <div className="mobile-nav-out">
          <div className="mobile-nav">
            {menuIcon ? (
              <Image
                src={`/image/menulineicon.png`}
                alt="menu-icon"
                height={16}
                width={16}
                id="mobile_menu_icon"
                onClick={() => {
                  setMenuIcon(false);
                  document.getElementById("mobile-menu").style.display = "grid";
                }}
              />
            ) : (
              <Image
                src={`/image/menucrossicon.png`}
                alt="menu-icon"
                height={16}
                width={16}
                id="mobile_menu_icon"
                onClick={() => {
                  setMenuIcon(true);
                  document.getElementById("mobile-menu").style.display = "none";
                }}
              />
            )}
            <Image
              src="/image/logo.png"
              alt="logo"
              height={79}
              width={145}
              id="logo_mobile"
            />
            <ul id="mobile-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              {subMenuIcon ? (
                <li
                  id="service-list"
                  onClick={() => {
                    setSubMenuIcon(false);
                    document.getElementById("submenu1").style.display = "block";
                    document.getElementById("submenu2").style.display = "block";
                    document.getElementById("submenu3").style.display = "block";
                    document.getElementById("submenu4").style.display = "block";
                    document.getElementById("submenu5").style.display = "block";
                    document.getElementById("submenu6").style.display = "block";
                    document.getElementById("submenu7").style.display = "block";
                  }}
                >
                  <Link href="/services">Services</Link>{" "}
                  <RiArrowDropDownLine size={25} id="service-mobile" />
                </li>
              ) : (
                <li
                  id="service-list"
                  onClick={() => {
                    setSubMenuIcon(true);
                    document.getElementById("submenu1").style.display = "none";
                    document.getElementById("submenu2").style.display = "none";
                    document.getElementById("submenu3").style.display = "none";
                    document.getElementById("submenu4").style.display = "none";
                    document.getElementById("submenu5").style.display = "none";
                    document.getElementById("submenu6").style.display = "none";
                    document.getElementById("submenu7").style.display = "none";
                  }}
                >
                  <Link href="/services">Services</Link>{" "}
                  <RiArrowDropDownLine size={25} id="service-mobile" />
                </li>
              )}
              <li id="submenu1">
                <Link href="/pages/services/tax-preparation-services-tampa-fl">
                  Tax Preparation
                </Link>
              </li>
              <li id="submenu2">
                <Link href="/pages/services/accounting-services-tampa-fl">
                  Accounting Services
                </Link>
              </li>
              <li id="submenu3">
                <Link href="/pages/services/notary-services-tampa-fl">
                  Notary
                </Link>
              </li>
              <li id="submenu4">
                <Link href="/pages/services/tax-resolution-services-tampa-fl">
                  Tax Resolution
                </Link>
              </li>
              <li id="submenu5">
                <Link href="/pages/services/tax-planning-services-tampa-fl">
                  Tax Planning
                </Link>
              </li>
              <li id="submenu6">
                <Link href="/pages/services/credit-repair-counseling-services-tampa-fl">
                  Credit Repair
                </Link>
              </li>
              <li id="submenu7">
                <Link href="/pages/services/insurance-services-tampa-fl">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/services-area">Services Area</Link>
              </li>
              {/* <li>
                <Link href="/blogs">Blogs</Link>
              </li> */}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="main-nav-container-out">
          <div className="main-nav-container">
            <div className="main-nav-left">
              <Link href="/">
                <Image
                  src="/image/logo.png"
                  alt="logo"
                  height={79}
                  width={145}
                  className="logo_main_nav"
                />
              </Link>
              <Link
                href="/"
                className={`${router.pathname === "/" && "main-nav-underline"}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  router.pathname === "/about" && "main-nav-underline"
                }`}
              >
                About
              </Link>
              <div className="dropdown">
                <Link
                  href="/services"
                  id="services"
                  className={`${
                    (router.pathname === "/services" ||
                      router.pathname ===
                        "/pages/services/tax-preparation-services-tampa-fl" ||
                      router.pathname ===
                        "/pages/services/accounting-services-tampa-fl" ||
                      router.pathname ===
                        "/pages/services/notary-services-tampa-fl" ||
                      router.pathname ===
                        "/pages/services/tax-resolution-services-tampa-fl" ||
                      router.pathname ===
                        "/pages/services/tax-planning-services-tampa-fl" ||
                      router.pathname ===
                        "/pages/services/credit-repair-counseling-services-tampa-fl" ||
                      router.pathname ===
                        "/pages/services/insurance-services-tampa-fl") &&
                    "main-nav-underline"
                  }`}
                >
                  Services <RiArrowDropDownLine size={30} />
                </Link>
                <div className="dropdown-content-out">
                  <ul className="dropdown-content">
                    <li>
                      <Link href="/pages/services/tax-preparation-services-tampa-fl">
                        Tax Preparation
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/services/accounting-services-tampa-fl">
                        Accounting Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/services/notary-services-tampa-fl">
                        Notary
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/services/tax-resolution-services-tampa-fl">
                        Tax Resolution
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/services/tax-planning-services-tampa-fl">
                        Tax Planning
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/services/credit-repair-counseling-services-tampa-fl">
                        Credit Repair & Counseling
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/services/insurance-services-tampa-fl">
                        Insurance
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/services-area"
                className={`${
                  router.pathname === "/services-area" && "main-nav-underline"
                }`}
              >
                Services Area
              </Link>
              {/* <Link
                href="/blogs"
                className={`${
                  router.pathname === "/blogs" && "main-nav-underline"
                }`}
              >
                Blogs
              </Link> */}
              <Link
                href="/contact"
                className={`${
                  router.pathname === "/contact" && "main-nav-underline"
                }`}
              >
                Contact
              </Link>
            </div>
            <div className="main-nav-right">
              <Link href="/contact" className="nav-button">
                Email Now
              </Link>
              <Link
                href="/pages/book-an-appointment"
                className={`nav-button ${
                  router.pathname === "/pages/book-an-appointment" &&
                  "main-nav-underline"
                }`}
              >
                Book an appoinment
              </Link>
              <a href="tel:(813) 678 2400" id="phone-number">
                <MdLocalPhone size={20} /> (813) 678 2400
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNav;
