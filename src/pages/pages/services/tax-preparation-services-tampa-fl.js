import CallToAction from "@/components/CallToAction";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import QuickInquiry from "@/components/QuickInquiry";
import ServiceSideBar from "@/components/ServiceSideBar";
import Head from "next/head";
// import Image from "next/image";

const TaxPreparationServicesTampaFl = () => {
  return (
    <>
      <Head>
        <title>Tax Preparation Services - Apex Advisor Group Inc</title>
        <meta
          name="description"
          content="At Apex Advisor Group Inc, we provide accurate and timely tax preparation services for individuals and businesses. Our experienced team helps you navigate the complexities of tax laws to maximize savings and minimize liabilities. Contact us today to schedule an appointment and achieve your financial goals."
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
                  src="/image/tax-preparation-services.jpg"
                  alt="tax-preparation-services"
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
                  <p>Tax Preparation Services</p>
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
                  src="/image/tax-preparation-services-2.jpg"
                  alt="tax-preparation-services"
                  height={500}
                  width={1024}
                />
                <h2>Tax Preparation Services</h2>
                <p>
                  Tax preparation done right. Guaranteed. Millions of taxpayers
                  miss out on getting a larger refund each year because they
                  didn’t take advantage of all the credits and deductions that
                  are available to them.
                </p>
                <p>
                  With Apex Advisor we guarantee assurance that your return is
                  verified for accuracy, has zero errors and will result in
                  fewer chances of getting contacted by the IRS. We will also
                  help you manage the taxes that you pay throughout the year so
                  you can maximize your cash flow potential.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CallToAction />
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

export default TaxPreparationServicesTampaFl;
