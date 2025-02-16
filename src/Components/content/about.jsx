import React from "react";
import SideImg from "../portfolioimges/side.jpg";
import "../content/about.css";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function About() {
  return (
    <div className="contr">
      <div className="about">
        <div className="image animated-border" data-aos="zoom-in-up"
         data-aos-offset="100"
         data-aos-delay="0"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false">
          <img src={SideImg} alt="" />
        </div>

        <div className="dtails"  data-aos="zoom-in-up"
         data-aos-offset="100"
         data-aos-delay="0"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true" data-aos-once="false" >
          <div className="heading">
            <h1>ABOUT ME</h1>
          </div>
          <div className="paragraph">
            <p  className="paragra">
              <Typewriter
                cursor="<"
                loop={1}
                typeSpeed={100}
                delaySpeed={1000}
                words={[
                  "Hi Im SaravanaKumaran from Chennai B.Com in Compute Applications and further honed my technical skills with a Java Full Stack Development course at Login 360. With a solidfoundation in both business and technology Im passionate about creating efficient and innovative solutions through coding. I enjoy  taking on challenges and am always looking to learn and grow. Whether its building dynamic web applications or diving deep into  backend development I focus on delivering high-quality results withattention to detail",
                ]}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
