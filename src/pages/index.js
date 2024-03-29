import Head from "next/head";
import MainNav from "@/components/MainNav";
// import Image from "next/image";
import Link from "next/link";
import { Data } from "@/components/Data";
import { BlogData } from "@/components/BlogData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainFooter from "@/components/MainFooter";
import useWindowDimensions from "@/components/useWindowDimensions";
import QuickInquiry from "@/components/QuickInquiry";

const Home = () => {
  const { width } = useWindowDimensions();
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Head>
        <title>
          Tax Preparation, Accounting Firm Tampa | Apex Advisor Group Inc
        </title>
        <meta
          name="description"
          content="Apex Advisor Group Inc is a team of highly qualified professionals that have over 40+ years of combined experience in the tax, accounting, & financial services industry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://apexadvisorgroup.com"></link>
      </Head>
      <main>
        <MainNav />
        <div
          className="homebanner1 container"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <h1>40+ YEARS OF COMBINED EXPERIENCE</h1>
          <p>
            in the tax, accounting, insurance and financial services industry.
          </p>
          <Link href="/contact">GET IN TOUCH</Link>
        </div>
        <div
          className="home-advisor container"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <h2>Apex Advisor Group Inc</h2>
          <h4>Accounting Firm In Tampa, Florida</h4>
          <p>
            Bookkeeping, Payroll, Tax Preparation, Credit Repair & Counseling We
            here at Apex Advisor Group Inc are a team of highly qualified
            professionals that have over 40+ years of combined experience in the
            tax, accounting, insurance and financial services industry. From
            personal tax returns and financial planning to corporate formations
            and accounting services, you can be confident that Apex Advisor
            Group Inc is the right choice for you, your family and your
            business.
          </p>
          <p>
            Our Tax Accountants serve clients across{" "}
            <b>
              Tampa, Brandon, Riverview, Sun City, Ruskin, Plant City, Wesley
              Chapel, Lithia
            </b>{" "}
            and the surrounding areas.
          </p>
          <p>
            <b>Contact Apex Advisor Group Inc -</b> Tax Preparation & Accounting
            Firm in Tampa, Florida.
          </p>
        </div>
        <div
          className="home-service container"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <div className="row">
            <div className="col-4">
              <div className="home-service-right-padding">
                <h3>
                  Our <span>Services</span>
                </h3>
                <div className="service-border" />
                <p id="service-p-color">
                  Introducing our top-rated service that offers expert solutions
                  for all your needs. Our team of professionals provide
                  efficient and reliable service that is tailored to your
                  specific requirements. With a wide range of services including
                  consulting, design, development, and maintenance, we have got
                  you covered. Trust us to deliver high-quality results on time
                  and within budget. Contact us today to experience the best
                  service in the industry!
                </p>
                <Link href="/services" id="view-all-btn">
                  VIEW ALL
                </Link>
              </div>
            </div>
            <div className="col-8">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={false}
                effect="coverflow"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 3,
                  slideShadows: false,
                }}
                slidesPerView={width < 992 ? 1 : 3}
                spaceBetween={25}
                pagination={{
                  dynamicBullets: true,
                }}
                initialSlide={1}
                style={{
                  width: "100%",
                  margin: "auto",
                  padding: "10px",
                  height: "100%",
                }}
              >
                {Data.map((item, index) => (
                  <SwiperSlide key={item}>
                    <div className="card-home-service" key={index}>
                      <img
                        src={`/image/${item.image}`}
                        alt={`${item.image}`}
                        height={70}
                        width={70}
                      />
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div
          className="home-why-us container"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <h2>Why Us</h2>
          <div id="home-why-us-border-bottom" />
          <p>
            Bookkeeping, Payroll, Tax Preparation, Credit Repair & Counseling We
            here at Apex Advisor Group Inc are a team of highly qualified
            professionals that have over 40+ years of combined experience in the
            tax, accounting, insurance.
          </p>
          <div className="home-why-us-image-container">
            <div className="home-why-us-image">
              <img
                src="/image/understanding.png"
                alt="understanding"
                height={285}
                width={425}
              />
            </div>
            <div className="home-why-us-image">
              <img
                src="/image/ourWork.png"
                alt="ourWork"
                height={285}
                width={425}
              />
            </div>
            <div className="home-why-us-image">
              <img
                src="/image/professionalChoice.png"
                alt="professionalChoice"
                height={285}
                width={425}
              />
            </div>
          </div>
        </div>
        <div
          className="home-about-us"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <div className="container">
            <h2>About Us</h2>
            <div id="home-about-us-border" />
            <p>
              Putting the clients’ needs first has always been the Apex Advisor
              philosophy and has helped us create a reputation of honesty,
              integrity and trust with our clients and our community. We strive
              to increase financial literacy and awareness for all our clients
              and our community.
            </p>
            <div className="home-about-us-image-container">
              <img
                src="/image/carlos-rosario.jpg"
                alt="carlos-rosario"
                height={164}
                width={164}
              />
              <img
                src="/image/jennifer-colon.jpg"
                alt="jennifer-colon"
                height={164}
                width={164}
              />
              <img
                src="/image/eddia-rosario.jpg"
                alt="eddia-rosario"
                height={164}
                width={164}
              />
              <img
                src="/image/stephane-calixte.jpg"
                alt="stephane-calixte"
                height={164}
                width={164}
              />
              <img
                src="/image/carlos-alberto.jpg"
                alt="carlos-alberto"
                height={164}
                width={164}
              />
            </div>
            <Link href="/about">Read More</Link>
          </div>
        </div>
        <div
          className="home-blog container"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <h2>Latest Blog Posts</h2>
          <div id="home-blog-border" />
          <p>
            Welcome to our blog, where we share our knowledge and insights on
            various topics. From tips and tricks to industry trends and news, we
            cover it all. Our team of experts provide valuable information to
            help you stay informed and make informed decisions. Whether your a
            professional or just looking to learn something new, we have
            something for everyone. Join our community and stay up-to-date with
            the latest information and trends in the industry. Follow our blog
            and get the information you need to succeed.
          </p>
          <div className="home-blog-card-container">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={false}
              effect="coverflow"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: false,
              }}
              slidesPerView={width < 992 ? 1 : 3}
              spaceBetween={25}
              pagination={{
                dynamicBullets: true,
              }}
              initialSlide={1}
              style={{
                width: "100%",
                margin: "auto",
                padding: "10px",
                height: "100%",
              }}
            >
              {BlogData.map((item, index) => (
                <SwiperSlide key={item}>
                  <div className="card-blog" key={index}>
                    <h3>{item.title}</h3>
                    <img
                      src={`/image/${item.image}`}
                      alt={`${item.image}`}
                      height={189}
                      width={319}
                    />
                    <p>{item.detail}</p>
                    <Link href="">Read More</Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div
          className="home-get-touch"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <h2>Contact Apex Advisor Group Inc</h2>
          <p>
            You can be confident that Apex Advisor Group Inc is the right choice
            for you, your family and your business.
          </p>
          <img
            src="/image/getintouch.png"
            alt="getintouch"
            height={125}
            width={417}
            id="getintouch"
          />
          <br />
          <img
            src="/image/getintouchround.png"
            alt="getintouchround"
            height={39}
            width={58}
            id="getintouchround"
          />
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

export default Home;
