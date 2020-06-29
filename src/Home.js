import React from "react";

// import background video
import bgVideo from "./assets/bg_vid.mp4";

// import Layout
import Layout from "./Layout";

// import Link from react-router-dom
import {Link} from 'react-router-dom'



// Home Component
const Home = () => {
    // HomePage Attributes
  let attributes = {
    data_position: "center",
  };
  


  // Home Page function
  const home = () => {

    return (
      <React.Fragment>
        {/* <!-- home
    ================================================== --> */}

        <section
          id="home"
          className="s-home page-hero target-section"
          data-parallax="scroll"
          // data-image-src="images/bg5.jpg"
          data-natural-width={3000}
          data-natural-height={2000}
          data-position-y={attributes.data_position}
        >
          <div className="video-container">
            <video loop autoPlay muted>
              <source src={bgVideo} type="video/mp4" />
            </video>
          </div>

          <div className="home-content">
            <div className="row home-content__main">
              <h1>
                Where Technology Meets{" "}
                <span className="content-innovation">Innovation</span>
              </h1>

              <h3>
                Digital Troy brings you closer to what makes you grow, using the
                technology you love to bring you to the success you want.
              </h3>

              <div className="text text-center">
                <Link to="/contact" className="smoothscroll btn btn--primary btn--large">
                  Talk to us
                </Link>
              </div>
            </div>
            {/* <!-- end home-content__main --> */}

            <div className="home-content__scroll">
              <a href="#about" className="scroll-link smoothscroll">
                Scroll
              </a>
            </div>
          </div>
          {/* <!-- end home-content --> */}

          <ul className="home-social">
            <li>
              <a href="https://www.facebook.com/digitaltroy/">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/digitaltroy.tech/">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
          {/* <!-- end home-social --> */}
        </section>

        {/* <!-- about
================================================== --> */}
        <section id="about" className="s-about target-section">
          <div className="row section-header bit-narrow" data-aos="fade-up">
            <div className="col-full">
              <h3 className="subhead">Who We Are</h3>
              <h1 className="display-1">
                Our company is a collective of amazing people striving to build
                and deliver top-className technology solutions.
              </h1>
            </div>
          </div>
          {/* <!-- end section-header --> */}

          <div className="row bit-narrow" data-aos="fade-up">
            <div className="col-full">
              <p className="lead">
                Digital Troy is made of the best individuals in SEO, Graphics
                and Design, Website Development, Database Optimization, Digital
                Branding, and General ICT Consultancy. That’s what makes us
                different.
              </p>
            </div>
          </div>
          {/* <!-- end about-desc --> */}

          <div className="row bit-narrow">
            {/* <!-- Learn more button --> */}
            <div className="text text-center">
              <Link
                to="/about"
                className="smoothscroll btn btn--primary btn--large"
              >
                Learn More About Us
              </Link>
            </div>

            {/* <!-- end process --> */}
          </div>
          {/* <!-- end row --> */}
        </section>
        {/* <!-- end s-about --> */}

        {/* <!-- services
================================================== --> */}
        <section id="services" className="s-services target-section darker">
          <div className="row section-header bit-narrow" data-aos="fade-up">
            <div className="col-full">
              <h3 className="subhead">What we do</h3>
              <h1 className="display-1">
                We take pride in what we do. Our services are designed to help
                your business stand out and turn your ideas into digital
                realities.
              </h1>
            </div>
          </div>
          {/* <!-- end section-header --> */}

          <div className="row bit-narrow services block-1-2 block-tab-full">
            <div className="col-block item-service" data-aos="fade-up">
              <div className="item-service__icon">
                <i className="icon-star"></i>
              </div>
              <div className="item-service__text">
                <h3 className="item-title">Branding</h3>
                <p>
                  Branding is more of perception. But, it is our responsibility
                  to help you develop your brand identity and brand image to
                  meet standards. We create unique logos, business cards and
                  other stationery materials that reflect your values.
                </p>
              </div>
            </div>

            <div className="col-block item-service" data-aos="fade-up">
              <div className="item-service__icon">
                <i className="icon-pie-chart"></i>
              </div>
              <div className="item-service__text">
                <h3 className="item-title">Digital Marketing</h3>
                <p>
                  We’re in the digital epoch. For this reason, we can help you
                  reach your target audience and generate leads on social media
                  from the convenience of your home with just a mobile phone or
                  your computer using optimized marketing approaches.
                </p>
              </div>
            </div>

            <div className="col-block item-service" data-aos="fade-up">
              <div className="item-service__icon">
                <i className="icon-image"></i>
              </div>
              <div className="item-service__text">
                <h3 className="item-title">AudioVisual Content</h3>
                <p>
                  Utilizing both visual and sound, in audiovisual materials like
                  tapes, slides and videos, we create authentic and engaging
                  stories that speak to your target audience.
                </p>
              </div>
            </div>

            <div className="col-block item-service" data-aos="fade-up">
              <div className="item-service__icon">
                <i className="icon-lego-block"></i>
              </div>
              <div className="item-service__text">
                <h3 className="item-title">Design and Development</h3>
                <p>
                  We are innovative and enthusiastic about what we do. Over the
                  years, we have helped several organizations to design and
                  redesign their websites to improve performance, delivering
                  high standard interfaces and products.
                </p>
              </div>
            </div>

            {/* <!-- See our Plans button --> */}
            <div className="text text-center">
              <Link
                to="/contact"
                className="smoothscroll btn btn--primary btn--large"
              >
                See Our Plans
              </Link>
            </div>
          </div>
          {/* <!-- end services --> */}
        </section>
        {/* <!-- end s-services --> */}

        {/* <!-- testimonies
================================================== --> */}
        <section className="s-testimonials">
          <div className="row section-header bit-narrow" data-aos="fade-up">
            <div className="col-full" style={{ zIndex: "100 !important" }}>
              <h1
                className="display-1"
                style={{ marginBottom: "0 !important" }}
              >
                <span className="testimonials-title">Digital Solutions</span>
              </h1>
              <h1 className="testimonials-desc">That Boost Your Success</h1>

              <p className="lead" style={{ color: " #f5f5f5" }}>
                That’s exactly what we’re about: putting technology into play to
                drive your business forward, and transforming your vision into
                the best creative results. Contact Us Today.
              </p>

              {/* <!-- See our Plans button --> */}
              <div className="text text-center">
                <Link
                  to="/contact"
                  className="smoothscroll btn btn--primary btn--large"
                >
                  Succeed Today
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end s-testimonials --> */}

        {/* <!-- Team
================================================== --> */}
        <section id="contact" className="s-contact target-section">
          <div className="row section-header narrow" data-aos="fade-up">
            <div className="col-full">
              <h1 className="display-1">Our Team</h1>
            </div>
          </div>

          <div className="row bit-narrow services block-1-4 block-tab-full">
            <div className="col-block item-service" data-aos="fade-up">
              <div className="item-folio__thumb">
                <p
                 
                  className="thumb-link"
                  title="Shutterbug"
                  data-size="1050x700"
                >
                  <img
                    style={{ borderRadius: 20, width: 230, height: 241 }}
                    src="images/ceo.jpg"
                    srcSet="images/ceo.jpg 1x, images/ceo.jpg 2x"
                    alt=""
                  />
                </p>
              </div>

              <div style={{ marginTop: "20px" }}>
                <h3 className="item-title">ORJI, MECHA A.</h3>
                <p>CEO/Director</p>
              </div>
            </div>

            <div className="col-block item-service" data-aos="fade-up">
              <div className="item-folio__thumb">
                <p
                 
                  className="thumb-link"
                  title="Shutterbug"
                  data-size="1050x700"
                >
                  <img
                    style={{ borderRadius: 20, width: 230, height: 241 }}
                    src="images/wisdom.jpg"
                    srcSet="images/wisdom.jpg 1x, images/wisdom.jpg 2x"
                    alt=""
                  />
                </p>
              </div>

              <div style={{ marginTop: "20px" }}>
                <h3 className="item-title">WISDOM C.</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>

            <div className="col-block item-service" data-aos="fade-up">
              <div className="item-folio__thumb">
                <p
                
                  className="thumb-link"
                  title="Shutterbug"
                  data-size="1050x700"
                >
                  <img
                    style={{ borderRadius: 20, width: 230, height: 241 }}
                    src="images/manager.jpg"
                    srcSet="images/manager.jpg 1x, images/manager.jpg 2x"
                    alt=""
                  />
                </p>
              </div>

              <div style={{ marginTop: "20px" }}>
                <h3 className="item-title">FRANKPEACE I.</h3>
                <p>Manager</p>
              </div>
            </div>

            <div className="col-block item-service" data-aos="fade-up">
              <div className="item-folio__thumb">
                <p
                 
                  className="thumb-link"
                  title="Shutterbug"
                  data-size="1050x700"
                >
                  <img
                    style={{ borderRadius: 20, width: 230, height: 241 }}
                    src="images/chijioke.jpeg"
                    srcSet="images/chijioke.jpeg 1x, images/chijioke.jpeg 2x"
                    alt=""
                  />
                </p>
              </div>

              <div style={{ marginTop: "20px" }}>
                <h3 className="item-title">CHIJIOKE O.</h3>
                <p>Marketing Director</p>
              </div>
            </div>
          </div>

          <div className="row contact-main" data-aos="fade-up">
            <div className="col-full">
              <p className="contact-email">
                <a href="mailto:#0">contact@digitaltroy.com</a>
              </p>
              <p className="contact-address">
                C49 road 2, ikota complex by VGC Lekki Lagos Nigeria
              </p>
              <p className="contact-numbers">
                +234 905 102 8877 &nbsp; +234 901 106 7185
              </p>

              <ul className="contact-social">
                <li>
                  <a href="https://www.facebook.com/digitaltroy/">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/digitaltroy.tech/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };

  // return
  return (
   
    
    
     
     
    <Layout>
    {home()}
    </Layout>
    
      
     
    

  );
};

// export Home
export default Home;
