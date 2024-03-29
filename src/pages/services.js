import CallToAction from "@/components/CallToAction";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import QuickInquiry from "@/components/QuickInquiry";
import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services - Apex Advisor Group Inc</title>
        <meta
          name="description"
          content="At Apex Advisor Group Inc, we offer Accounting, Tax Preparation, Planning &amp; Tax Resolution Services to clients across Tampa, Brandon, Riverview, Sun City &amp; Plant City."
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
                  src="/image/services.jpg"
                  alt="about-us"
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
                  <h1>Services Apex Advisor Group Inc</h1>
                  <h4>By Apex Advisor Group Inc</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="service-group"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <img
              src="/image/tax-prepration.jpg"
              alt="tax-prepration"
              height={181}
              width={260}
            />
            <div className="service-group-content">
              <h2>Tax Preparation Services</h2>
              <p>
                Tax preparation done right. Guaranteed. Millions of taxpayers
                miss out on getting a larger refund each year because they
                didn’t take advantage of all the credits and deductions that are
                available to them.
              </p>
              <p>
                With Apex Advisor we guarantee assurance that your return is
                verified for accuracy, has zero errors and will result in fewer
                chances of getting contacted by the IRS. We will also help you
                manage the taxes that you pay throughout the year so you can
                maximize your cash flow potential.
              </p>
              <Link href="/pages/services/tax-preparation-services-tampa-fl">
                Read More
              </Link>
            </div>
          </div>
          <div
            className="service-group reverse"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div className="service-group-content">
              <h2>Accounting Services</h2>
              <p>
                Apex Advisor Group is an experienced accounting team that looks
                forward to the opportunity to help you manage your business
                financials. We will work with you to establish short- and
                long-term strategies for growth and profitability.
              </p>
              <Link href="/pages/services/accounting-services-tampa-fl">
                Read More
              </Link>
            </div>
            <img
              src="/image/accounting-services.jpg"
              alt="accounting-services"
              height={181}
              width={260}
            />
          </div>
          <div
            className="service-group"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <img
              src="/image/notary.jpg"
              alt="notary"
              height={181}
              width={260}
            />
            <div className="service-group-content">
              <h2>Notary Services</h2>
              <p>
                Licensed and bonded. Our commitment to all our clients is to
                provide impeccable service, keep them informed of current and
                upcoming events, help them achieve their financial objectives
                and assist in preparing for their financial future for
                themselves and their family.
              </p>
              <Link href="/pages/services/notary-services-tampa-fl">
                Read More
              </Link>
            </div>
          </div>
          <div
            className="service-group reverse"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div className="service-group-content">
              <h2>Tax Resolution Services</h2>
              <p>
                We can help reduce or eliminate your IRS debts legally and
                ethically. So many resolutions are available to taxpayers that
                owe back taxes to the IRS. Let Apex Advisor help you get through
                this stressful situation.
              </p>
              <Link href="/pages/services/tax-resolution-services-tampa-fl">
                Read More
              </Link>
            </div>
            <img
              src="/image/tax-resolution.jpg"
              alt="tax-resolution"
              height={181}
              width={260}
            />
          </div>
          <div
            className="service-group"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <img
              src="/image/tax-planning.jpg"
              alt="tax-planning"
              height={181}
              width={260}
            />
            <div className="service-group-content">
              <h2>Tax Planning Services</h2>
              <p>
                Let Apex Advisor Group recommend optimal tax saving strategies
                that will grow and preserve your assets, reduce and/or eliminate
                taxable events, and go beyond tax compliance and proactively
                structure your wealth wisely.
              </p>
              <Link href="/pages/services/tax-planning-services-tampa-fl">
                Read More
              </Link>
            </div>
          </div>
          <div
            className="service-group reverse"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div className="service-group-content">
              <h2>Credit Repair & Counseling</h2>
              <p>
                As a registered tax preparer, Carlos Muñoz specializes in his
                client’s financial well being. He uses his decade long
                experience to minimize taxes, and therefore obtaining the best
                financial result for his clients. Carlos also takes pride in his
                transparency and honesty. As an active member in the Tampa
                business community he is growing his business by providing the
                best, most accurate and fastest service possible. You can find
                him available year round at Apex Advisors for your peace of
                mind.
              </p>
              <Link href="/pages/services/credit-repair-counseling-services-tampa-fl">
                Read More
              </Link>
            </div>
            <img
              src="/image/credit-repair.jpg"
              alt="credit-repair"
              height={181}
              width={260}
            />
          </div>
          <div
            className="service-group"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <img
              src="/image/insurance.jpg"
              alt="insurance"
              height={181}
              width={260}
            />
            <div className="service-group-content">
              <h2>Insurance</h2>
              <p>
                As a registered tax preparer, Carlos Muñoz specializes in his
                client’s financial well being. He uses his decade long
                experience to minimize taxes, and therefore obtaining the best
                financial result for his clients. Carlos also takes pride in his
                transparency and honesty. As an active member in the Tampa
                business community he is growing his business by providing the
                best, most accurate and fastest service possible. You can find
                him available year round at Apex Advisors for your peace of
                mind.
              </p>
              <Link href="/pages/services/insurance-services-tampa-fl">
                Read More
              </Link>
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

export default Services;
