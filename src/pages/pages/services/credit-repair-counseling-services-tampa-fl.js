import CallToAction from "@/components/CallToAction";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import QuickInquiry from "@/components/QuickInquiry";
import ServiceSideBar from "@/components/ServiceSideBar";
import Head from "next/head";
// import Image from "next/image";

const CreditRepairCounselingServicesTampaFl = () => {
  return (
    <>
      <Head>
        <title>
          Credit Repair & Counseling Services - Apex Advisor Group Inc
        </title>
        <meta
          name="description"
          content="Apex Advisor Group Inc offers Credit Repair &amp; Counseling Services to clients across Tampa, Brandon, Riverview, Sun City, Ruskin, Plant City, Wesley Chapel, Lithia"
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
                  src="/image/credit-repair-counseling-services.jpg"
                  alt="credit-repair-counseling-services"
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
                  <h4>Credit Repair & Counseling Services</h4>
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
                  src="/image/credit-repair-counseling-services-2.jpg"
                  alt="credit-repair-counseling-services"
                  height={500}
                  width={1024}
                />
                <h2>Credit Repair & Counseling Services</h2>
                <p>
                  Apex Advisor Group is here to help you understand credit and
                  learn how the major credit bureaus often have inaccurate or
                  out of date information that are hurting your credit profile.
                </p>
                <p>
                  Questionable negative items are hurting your credit and
                  removing them can improve your score.
                </p>
                <h3>WHY CREDIT RESTORATION?</h3>
                <p>
                  Remember when we were kids in school and were graded by
                  homework and in class assignments? No one taught us about
                  credit! Well, as adults, we’re now graded by our spending and
                  repayment habits. Believe it or not, credit reports contain
                  errors that can harm your credit score. There are laws in
                  place to protect us from this. We make sure your credit report
                  contains true and accurate information and we teach you the
                  latest tips and tricks on maintaining a healthy and positive
                  credit score.
                </p>
                <p>
                  In order for us to get your score to it’s healthiest number,
                  we provide you with a private credit analysis, we contact your
                  creditors for you and we dispute inaccuracies on your credit
                  profile. You will NOT have an 850 credit score over night. It
                  took you some time to get to this point and it will take you
                  some time to grow from this point.
                </p>
                <p>
                  We have dedicated ourselves to be leaders in the industry by
                  maintaining up to date knowledge on recent laws, statutes, and
                  credit reporting practices. We also know what affects your
                  credit score the most and we know how to help you take
                  advantage and grow your credit score.
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

export default CreditRepairCounselingServicesTampaFl;
