import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

const Layout = ({children}) => {


     /* OffCanvas Menu
     * ------------------------------------------------------ */
    var ssOffCanvas = function() {

        var menuTrigger = $('.header-menu-toggle'),
            nav = $('.header-nav'),
            closeButton = nav.find('.header-nav__close'),
            siteBody = $('body'),
            mainContents = $('section, footer');
  
        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e) {
            e.preventDefault();
            siteBody.toggleClass('menu-is-open');
        });
  
        // close menu by clicking the close button
        closeButton.on('click', function(e) {
            e.preventDefault();
            menuTrigger.trigger('click');
        });
  
        // close menu clicking outside the menu itself
        siteBody.on('click', function(e) {
            if (!$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span')) {
                siteBody.removeClass('menu-is-open');
            }
        });
  
    };
      
  
  
    useEffect(() => {


    
      ssOffCanvas()
      console.log("Oncreated")
      
    },[])


    return (
        <React.Fragment>

             {/* <!-- header
    ================================================== --> */}
      <header className="s-header">
        <div className="header-logo">
          <Link to="/" className="site-logo">
            <img src="images/DTlogo.png" alt="Homepage" />
          </Link>
        </div>
        {/* <!-- end header-logo --> */}

        <nav className="header-nav">
          <a className="header-nav__close" title="close">
            <span>Close</span>
          </a>

          <h3>Navigate to</h3>

          <div className="header-nav__content">
            <ul className="header-nav__list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Pricing</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <ul className="header-nav__social">
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
          {/* <!-- end header-nav__content --> */}
        </nav>
        {/* <!-- end header-nav --> */}

        <a className="header-menu-toggle">
          <span className="header-menu-icon"></span>
        </a>
      </header>
      {/* <!-- end s-header --> */}
       
        {children}


       
       {/* <!-- footer
    ================================================== --> */}
    <footer>
        <div className="row">
            <div className="col-full ss-copyright">
                <span>© Copyright Digital Troy 2020</span>
            </div>
        </div>

        <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">Back to Top</a>
        </div>
    </footer>


    {/* <!-- photoswipe background
    ================================================== --> */}
    <div aria-hidden="true" className="pswp" role="dialog"   tabIndex={-1}>

        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">

            <div className="pswp__container">
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
            </div>

            <div className="pswp__ui pswp__ui--hidden">
                <div className="pswp__top-bar">
                    <div className="pswp__counter"></div><button className="pswp__button pswp__button--close" title="Close (Esc)"></button> <button className="pswp__button pswp__button--share" title="Share"></button> <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>                    <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                    <div className="pswp__preloader">
                        <div className="pswp__preloader__icn">
                            <div className="pswp__preloader__cut">
                                <div className="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div className="pswp__share-tooltip"></div>
                </div><button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                <div className="pswp__caption">
                    <div className="pswp__caption__center"></div>
                </div>
            </div>

        </div>

    </div>
    {/* <!-- end photoSwipe background --> */}


        </React.Fragment>
    )
}

export default Layout