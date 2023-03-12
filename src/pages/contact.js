import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import QuickInquiry from "@/components/QuickInquiry";
import Head from "next/head";
import { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
// import Image from "next/image";

const Contact = () => {
  const [emailForm, setEmailForm] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    organization: "",
    message: "",
  });

  const SendMail = (e) => {
    e.preventDefault();
    send("service_ktnnn3r", "template_9rb4ngw", emailForm, "GmHPw5sambWaKFRLk")
      .then((response) => {
        console.log("response", response);
        Swal.fire({
          icon: "success",
          text: "Thanks for being awesome! We have received your message and would like to thank you for writing to us.",
        }).then(() => {
          setEmailForm({
            fname: "",
            lname: "",
            phone: "",
            email: "",
            organization: "",
            message: "",
          });
        });
      })
      .catch((err) => {
        console.log("err", err);
        Swal.fire({
          icon: "error",
          text: "Something went wrong!",
        }).then(() => {
          setEmailForm({
            fname: "",
            lname: "",
            phone: "",
            email: "",
            organization: "",
            message: "",
          });
        });
      });
  };

  return (
    <>
      <Head>
        <title>About - Apex Advisor</title>
        <meta
          name="description"
          content="Contact Apex Advisor Group Inc - Accounting &amp; Tax Preparation Firm in Tampa, Florida for Accounting, Tax Preparation, Tax Planning &amp; Tax Resolution Services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainNav />
        <div
          className="head-top-container"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="head-img">
                <img
                  src="/image/contact.jpg"
                  alt="contact-us"
                  height={480}
                  width={1440}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row top-head-position">
              <div className="col-6">
                <div className="top-head-position-inside">
                  <h1>Contact Apex Advisor Group Inc</h1>
                  <h4>
                    Accounting & Tax Preparation Firm In Tampa, Florida Notary |
                    Credit Repair & Counseling | Insurance
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <div className="row">
            <div className="col-6">
              <div className="contact-address">
                <h3>Address:</h3>
                <p>1211 TECH BLVD, SUITE 120, TAMPA, FL 33619</p>
                <h3>Phone:</h3>
                <a href="tel:(813) 678-2400">(813) 678-2400</a>
                <h3>Email:</h3>
                <a href="mailto: info@apexadvisor.pro">info@apexadvisor.pro</a>
                <h3>By Appointments:</h3>
                <p>MON - FRI - 09:00 AM - 05:00 PM</p>
                <p>AFTER HOURS AND WEEKENDS - AVAILABLE BY EMAIL</p>
              </div>
            </div>
            <div className="col-6">
              <div className="contact-form">
                <form onSubmit={SendMail}>
                  <div className="contact-form-name-container">
                    <div className="contact-form-name">
                      <p>First Name *</p>
                      <input
                        type="text"
                        placeholder="Enter your first name."
                        value={emailForm.fname}
                        onChange={(event) => {
                          setEmailForm({
                            ...emailForm,
                            fname: event.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="contact-form-name">
                      <p>Last Name *</p>
                      <input
                        type="text"
                        placeholder="Enter your last name."
                        value={emailForm.lname}
                        onChange={(event) => {
                          setEmailForm({
                            ...emailForm,
                            lname: event.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <p>Email *</p>
                  <input
                    type="text"
                    placeholder="Enter your email."
                    value={emailForm.email}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        email: event.target.value,
                      });
                    }}
                  />
                  <p>Phone *</p>
                  <input
                    type="text"
                    placeholder="Enter your phone number."
                    value={emailForm.phone}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        phone: event.target.value,
                      });
                    }}
                  />
                  <p>Your Organization (if any)</p>
                  <input
                    type="text"
                    placeholder="Enter organization name."
                    value={emailForm.organization}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        organization: event.target.value,
                      });
                    }}
                  />
                  <p>Message *</p>
                  <textarea
                    type="text"
                    placeholder="Enter message."
                    rows={7}
                    value={emailForm.message}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        message: event.target.value,
                      });
                    }}
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <iframe
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
          width="100%"
          height="300"
          className="contact-map"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1211%20Tech%20Blvd%20Suite%20105+(Apex%20Advisor)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
        <MainFooter />
        <QuickInquiry />
      </main>
      <script
        src="//code.tidio.co/vbdxwhbv8jwavxp55kspaiysemfvbur8.js"
        async
      ></script>
    </>
  );
};

export default Contact;
