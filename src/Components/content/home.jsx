import React from "react";
import "../content/home.css";
import { Typewriter } from "react-simple-typewriter";
import SideImg from "../portfolioimges/sideb.jpg";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Home() {
  return (
    <>
      <div className="home">
        <div
          className="content"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="im">
            <h2>HELLO I'M</h2>
          </div>
          <div className="name">
            <h1>SARAVANA KUMARAN.S</h1>
          </div>
          <div className="cahngetext">
            <h2>
              A
              <span>
                <Typewriter
                  loop
                  cursor="|"
                  words={[
                    "ＲＥＡＣＴ ＤＥＶＬＯＰＥＲ",
                    "ＪＡＶＡ ＤＥＶＬＯＰＥＲ",
                    "ＳＰＲＩＮＧ ＢＯＯＴ  ＤＥＶＬＯＰＥＲ",
                  ]}
                  typeSpeed={70}
                  delaySpeed={1000}
                  deleteSpeed={50}
                />
              </span>
            </h2>
          </div>
          <div className="para">
            <p>
              I am a proficient Java Full-Stack Developer with expertise in
              building robust, scalable web applications.
            </p>
            <p>
              Skilled in Java-based frameworks (Spring, Hibernate) for backend
              development and front-end
            </p>
            <p>
              technologies like HTML, CSS, JavaScript, and Angular/React. I have
              experience working with relational
            </p>
            <p>
              databases (MySQL, PostgreSQL) and deploying applications using
              cloud platforms. Passionate about
            </p>
            <p>
              t writing clean, maintainable code, I am focused on creating
              efficient solutions for complex problems.
            </p>
          </div>
          <div className="icon">
            <div className="i">
              <a href="#">
                <FaInstagram />
              </a>
            </div>
            <div className="i">
              <a href="#">
                <FaFacebook />
              </a>
            </div>
            <div className="i">
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="btn">
            <button>HIRE ME</button>
            <button>Education</button>
          </div>
        </div>
        <div
          className="img"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="border"></div>
          <img src={SideImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
