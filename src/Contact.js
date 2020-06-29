import React, {useState} from 'react'
// import Layout
import Layout from './Layout'
// import axios
import axios from 'axios'
// import react toastify
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


// Contact Component
const Contact = () => {

    // initialize state
    const [Values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        uploadedImages: [],
        buttonText: "Submit",
        uploadImageButton: "Upload Images of your idea"

    })



    // destructure values in state
    const {name, email, phone, service, budget, message, uploadImageButton, uploadedImages, buttonText} = Values


      // destructure process.env to get data
    const {REACT_APP_API, REACT_APP_CLOUDINARY_NAME, REACT_APP_CLOUNDINARY_PRESET} = process.env


    // onChange function
    const handleOnChange = (data) => (event) => {
        // call the setValues function to pass values to state

        setValues({...Values, [data]:event.target.value})
        
    }

    // onHandleSubmit function
    const handleonSubmit = (event) => {
        event.preventDefault()

        // set submit button to submitting
        setValues({...Values, buttonText: '...Sending'})

        // send data to backend using axios
        axios.post(`${REACT_APP_API}/api/contact`, {
            name,
            email,
            phone,
            service,
            budget,
            message,
            uploadedImages
        })
        .then((response) => {
            // check if response.success is true
            if(response.data.success) {
                console.log(response)
                // show toast message
                setValues({...Values, buttonText:"Submitted", name: '', email: '', phone: '', service: '', budget: '', message: '', uploadedImages: [], uploadImageButton: "Upload Images of your idea" })
                

               return toast.success("Thank you for contacting us, We'll get back to you soon.")
            
            
            } else {
                setValues({...Values, buttonText: 'Submit'})
                return toast.error("Oops! error occured, Please try again.")
                
            }
            
        })
        .catch((error) => {
            if(error.message) {
                setValues({...Values, buttonText: 'Submit'})
                return toast.error("Oops! error occured, Please try again.")
            }
        })
       
    }

    // Cloudinary Upload Widget
  const uploadWidget = () => {
        window.cloudinary.openUploadWidget({ cloud_name: REACT_APP_CLOUDINARY_NAME, upload_preset: REACT_APP_CLOUNDINARY_PRESET, tags:['ideas']},
            function(error, result) {
                // save result in state
                setValues({...Values, uploadedImages: result, uploadImageButton: `${result ? result.length : 0} Images Uploaded`})
            });
    }


  


    // contact function 
    const contact = () => {
        return (
            <React.Fragment>
                    {/* <!-- about
    ================================================== --> */}
    <section id="about" className="s-about target-section">

        <div className="row section-header bit-narrow" data-aos="fade-up">
            <div className="col-full">
                <h3 className="subhead">Get in touch with us Today</h3>
                <h1 className="display-1">
                    We are always ready
                </h1>
            </div>
        </div>
        {/* <!-- end section-header --> */}

        <div className="row bit-narrow" data-aos="fade-up">
            <div className="col-full">
                <p className="lead">
                    Complete the form below and we'll be in touch. You can share your next project, make enquires or just say hello.
                </p>
            </div>


            <div className="col-twelve tab-full">

                

                <form onSubmit={handleonSubmit}>
                    {/* Your Name */}
                    <div>
                        <label htmlFor="sampleInput">Your Name</label>
                        <input className="full-width" onChange={handleOnChange('name')} type="text" placeholder="Full Name" value={name} id="sampleInput" required/>
                    </div>
                    {/* Your Email */}
                    <div>
                        <label htmlFor="sampleInput">Your Email</label>
                        <input className="full-width" onChange={handleOnChange('email')} type="email" placeholder="Email Address" value={email} id="sampleInput"/>
                    </div>
                    {/* Your Phone */}
                    <div>
                        <label htmlFor="sampleInput">Your Phone</label>
                        <input className="full-width" onChange={handleOnChange('phone')} type="tel" placeholder="Phone Number" value={phone} id="sampleInput" required/>
                    </div>
                    {/* Services */}
                    <div>
                        <label htmlFor="sampleRecipientInput">Service</label>
                        <div className="ss-custom-select">
                            <select className="full-width" onChange={handleOnChange('service')} id="sampleRecipientInput" required>
                                    <option value="Select">Select Service</option>
                                    <option value="Web Design &amp; Developement">Web Design &amp; Development</option>
                                    <option value="Mobile App Development">Mobile App Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Logo &amp; Identity Design">Logo &amp; Identity Design</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                    <option value="Brand Naming &amp; Imagery">Brand Naming &amp; Imagery</option>
                                    <option value="Digital / Email Marketing">Digital / Email Marketing</option>
                                    <option value="Motion graphics / Animation and Explainer Videos">Motion graphics / Animation and Explainer Videos</option>
                                    <option value="CCTV installation &amp; Maintenance">CCTV installation &amp; Maintenance</option>
                                </select>
                        </div>
                    </div>
                    {/* Budget */}
                    <div>
                        <label htmlFor="sampleRecipientInput">Budget</label>
                        <div className="ss-custom-select">
                            <select className="full-width" onChange={handleOnChange('budget')} id="sampleRecipientInput" required>
                                    <option value="Budget">Select Budget</option>
                                    <option value="&#8358;10k - &#8358;50k">&#8358;10k - &#8358;50k</option>
                                    <option value="&#8358;51k - &#8358;100k">&#8358;51k - &#8358;100k</option>
                                    <option value="&#8358;101k - &#8358;150k">&#8358;101k - &#8358;150k</option>
                                    <option value="&#8358;151k - &#8358;200k">&#8358;151k - &#8358;200k</option>
                                    <option value="&#8358;201k+">&#8358;201k+</option>
                                   
                                </select>
                        </div>
                    </div>

                    {/* Message */}
                    <label htmlFor="exampleMessage">Message</label>
                    <textarea className="full-width" onChange={handleOnChange('message')} value={message} placeholder="Your message" id="exampleMessage"></textarea>
                    

                    {/* Upload Image */}
                    <button type="button" onClick={() => uploadWidget()} className="btn btn--stroke full-width btn--big">{uploadImageButton}</button>
                    <small>Upload Images of your idea, lets help you bring it to life.</small>



                    <button className="btn--primary full-width" style={{marginTop: 50}} type="submit" >{buttonText}</button>

                </form>

            </div>


        </div>


    </section>
    {/* <!-- end s-about --> */}



    {/* <!-- contact
    ================================================== --> */}
    <section id="contact" className="s-contact target-section">

        <div className="grid-overlay">
            <div></div>
        </div>

        <div className="row section-header narrow" data-aos="fade-up">
            <div className="col-full">
                <h3 className="subhead">Keep In Touch</h3>
                <h1 className="display-1">Feel free to contact us for any <br/> project idea or collaboration</h1>
            </div>
        </div>

        <div className="row contact-main" data-aos="fade-up">
            <div className="col-full">
                <p className="contact-email">
                    <a href="mailto:contact@digitaltroy.com">contact@digitaltroy.com</a>
                </p>
                <p className="contact-address">
                    C49 road 2, ikota complex by VGC Lekki Lagos Nigeria
                </p>
                <p className="contact-numbers">
                    +234 905 102 8877, +234 901 106 7185
                </p>

                <ul className="contact-social">
                    <li>
                        <a href="https://www.facebook.com/digitaltroy/"><i className="fab fa-facebook"></i></a>
                    </li>
                   
                    <li>
                        <a href="https://www.instagram.com/digitaltroy.tech/"><i className="fab fa-instagram"></i></a>
                    </li>
                   
                </ul>
            </div>
        </div>

    </section>
    {/* <!-- end s-contact ---> */}


            </React.Fragment>
        )
    }

    return (
       <Layout>
           <div className="container">
           <ToastContainer/>
           {contact()}
           </div>
       </Layout>
    )
}


// export Contact
export default Contact