import CallToAction from "@/components/CallToAction";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import QuickInquiry from "@/components/QuickInquiry";
import ServiceSideBar from "@/components/ServiceSideBar";
import Head from "next/head";
// import Image from "next/image";

const InsuranceServicesTampaFl = () => {
  return (
    <>
      <Head>
        <title>Insurance Services - Apex Advisor Group Inc</title>
        <meta
          name="description"
          content="Apex Advisor Group Inc offers Health &amp; Life Insurance Services to clients across Tampa, Brandon, Riverview, Sun City, Ruskin, Plant City, Lithia and the surrounding areas."
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
                  src="/image/insurance-services.jpg"
                  alt="insurance-services"
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
                  <h4>Insurance Services</h4>
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
                  src="/image/insurance-services-2.jpg"
                  alt="insurance-services"
                  height={500}
                  width={1024}
                />
                <h2>Insurance Services</h2>
                <h3>Health</h3>
                <p>
                  Health insurance should never be “one size fits all.” We have
                  plans for every person, at every stage of life, which can be
                  tailored to meet your specific health care needs. We will help
                  you find a personalized individual or family plan that works
                  for you that has low monthly premiums, prescription drug
                  coverage and large networks of doctors.
                </p>
                <h3>Life</h3>
                <p>
                  Let us help you increase you business’ profitability and
                  efficiency so that you may continue to succeed!
                </p>
                <p>
                  Whether it is Term , Cash Value Life insurance, or Final
                  Expense planning, Apex Advisor Group has the custom solution
                  available for you and your loved ones. Let our licensed agents
                  do a Financial Needs analysis for you and offer you the best
                  options to protect and grow your wealth.
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

export default InsuranceServicesTampaFl;
