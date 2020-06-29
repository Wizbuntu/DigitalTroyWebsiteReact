import React from 'react'

// import Layout
import Layout from './Layout'

// import Link from react-router-dom
import {Link} from 'react-router-dom'



// About Component
const About = () => {

    // Header Attribute
    let attributes = {
        data_position: 'center',
        
    }


    // About Page function
    const about = ()=> {
        return (
            
            <React.Fragment>
                 {/* <!-- home
    ================================================== --> */}

    <section id="home" className="s-home about-image page-hero target-section  header-shadow" data-parallax="scroll"  data-natural-height={2000} data-position-y={attributes.data_position}>



<div className="home-content">

    <div className="row home-content__main">

        <h1>
            We're Digital <span className="content-innovation">Troy</span>
        </h1>

        <h3>
            We are a digital agency passionate about harnessing innovation, design and technology to build interactive and engaging websites, brands, and digital products.
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
        <a href="https://www.facebook.com/digitaltroy/"><i className="fab fa-facebook-f" aria-hidden="true"></i><span>Facebook</span></a>
    </li>
     <li>
        <a href="#0"><i className="fab fa-twitter" aria-hidden="true"></i><span>Twitter</span></a>
    </li> 
    <li>
        <a href="https://www.instagram.com/digitaltroy.tech/"><i className="fab fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
    </li>

</ul>
{/* <!-- end home-social --> */}

</section>
{/* <!-- end s-home --> */}

{/* 
<!-- about
================================================== --> */}
<section id="about" className="s-about target-section">

<div className="row section-header bit-narrow" data-aos="fade-up">
    <div className="col-full">
        <h3 className="subhead">Get to know us</h3>
        <h1 className="display-1">
            Who we are
        </h1>
    </div>
</div>
{/* <!-- end section-header --> */}

<div className="row bit-narrow" data-aos="fade-up">
    <div className="col-full">
        <p className="lead">
            Digital Troy is a digital agency currently based in Lagos State. Conceived in 2018, Digital Troy specializes in Digital Marketing, Brand Advertising, Website Development, Graphics and Design, Search Engine Optimization, and General IT Consultancy. Our
            company is focused on delivering quality IT solutions for individuals, startups and companies.
        </p>
    </div>



</div>
{/* <!-- end about-desc --> */}

</section>
{/* <!-- end s-about --> */}

{/* <!-- services
    ================================================== --> */}
    <section id='services' className="s-services target-section darker">

<div className="row section-header bit-narrow" data-aos="fade-up">
    <div className="col-full">
        <h3 className="subhead">What sets us apart</h3>
        <h1 className="display-1">
            Our unique Strength
        </h1>
    </div>
</div>
{/* <!-- end section-header --> */}

<div className="row bit-narrow" data-aos="fade-up">
    <div className="col-full">
        <p className="lead">
            As a brand, Digital Troy is completely focused on quality and time-conscious service delivery. Our jobs/output range from beautifully simplistic to outright terrific. Whether it’s SEO, Web Development, Social Media, Web banners, Flyers, Stickers, Posters,
            Websites for e-commerce, education, corporate organizations, we’ve got it covered.
        </p>
    </div>
    {/* <!-- end services --> */}
</div>
</section>
{/* <!-- end s-services --> */}

{/* <!-- testimonies
================================================== --> */}
<section className="s-testimonials" style={{paddingBottom: "0 !important"}}>

<div className="row section-header bit-narrow" data-aos="fade-up">
    <div className="col-full">
        <h1 className="display-1" style={{marginBottom: "0 !important"}}>
            <span className="testimonials-title">We're not saying we are the best</span>
        </h1>

        <p className="lead" style={{color: "#f5f5f5"}}>
            No, but we're simply world className. The more reason you should work with us.
        </p>

        {/* <!-- See our Plans button --> */}
        <div className="text text-center">
            <Link to="/contact" className="smoothscroll btn btn--primary btn--large">
            Get Started Today
        </Link>

        </div>
    </div>
</div>



</section>
{/* <!-- end s-testimonials --> */}



            </React.Fragment>
        )
    }

    return (

          <Layout>
            {about()}
          </Layout>
            
    )
}


// export
export default About