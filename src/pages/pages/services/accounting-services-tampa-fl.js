import CallToAction from "@/components/CallToAction";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import QuickInquiry from "@/components/QuickInquiry";
import ServiceSideBar from "@/components/ServiceSideBar";
import Head from "next/head";
// import Image from "next/image";

const AccountingServicesTampaFl = () => {
  return (
    <>
      <Head>
        <title>Accounting Services - Apex Advisor Group Inc</title>
        <meta
          name="description"
          content="Apex Advisor Group Inc offers Accounting Services to clients across Tampa, Brandon, Riverview, Sun City, Ruskin, Plant City, Wesley Chapel, Lithia and the surrounding areas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainNav />
        <div
          className="head-top-container"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="head-img">
                <img
                  src="/image/accountant-services-2.jpg"
                  alt="accountant-services"
                  height={657}
                  width={1000}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row top-head-position">
              <div className="col-6">
                <div className="top-head-position-inside">
                  <h1>About Apex Advisor Group Inc</h1>
                  <h4>Accounting Services</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-3"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <ServiceSideBar />
            </div>
            <div
              className="col-9"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <div className="service-detail">
                <img
                  src="/image/accountant-services.jpg"
                  alt="accountant-services"
                  height={500}
                  width={1024}
                />
                <h2>Accounting Services</h2>
                <p>
                  Apex Advisor Group is an experienced accounting team that
                  looks forward to the opportunity to help you manage your
                  business financials. We will work with you to establish short-
                  and long-term strategies for growth and profitability.
                </p>
                <p>
                  Let us help you increase you business’ profitability and
                  efficiency so that you may continue to succeed!
                </p>
                <p>a. Corporate Formations</p>
                <p>b. Bookkeeping</p>
                <p>c. Preparing of Financial Statements</p>
                <p>d. Payroll</p>
              </div>
            </div>
          </div>
          <CallToAction />
        </div>
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

export default AccountingServicesTampaFl;
