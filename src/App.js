import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import testimonials1 from './assets/img/testimonials-1.jpg';
import testimonials2 from './assets/img/testimonials-2.jpg';
import testimonials3 from './assets/img/testimonials-3.jpg';
import bgshowcase1 from './assets/img/bg-showcase-1.jpg';
import bgshowcase2 from './assets/img/bg-showcase-2.jpg';
import bgshowcase3 from './assets/img/bg-showcase-3.jpg';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HeaderSection from './components/HeaderSection';
import { Icongrid } from './components/Icongrid';


export default function App() {
  const IconData = [
    {
      maindivclass:"col-lg-4",
      secdivclass:"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3",
      thrdivclass:"features-icons-icon d-flex",
      pclass:"lead mb-0",
      htype3:true,
      isthrimgtag:false,
      iconclass: "bi-window m-auto text-primary",
      iconhead: "Fully Responsive",
      iconcontent: "This theme will look great on any device, no matter the size!",
      backImage:"",
      backgroundImage:"",
      IsShowcase:false,
    },
    {
      maindivclass:"col-lg-4",
      secdivclass:"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3",
      thrdivclass:"features-icons-icon d-flex",
      pclass:"lead mb-0",
      htype3:true,
      isthrimgtag:false,
      iconclass: "bi-layers m-auto text-primary",
      iconhead: "Bootstrap 5 Ready",
      iconcontent: "Featuring the latest build of the new Bootstrap 5 framework!",
      backImage:"",
      backgroundImage:"",
      IsShowcase:false,
    },
    {
      maindivclass:"col-lg-4",
      secdivclass:"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3",
      thrdivclass:"features-icons-icon d-flex",
      pclass:"lead mb-0",
      htype3:true,
      isthrimgtag:false,
      iconclass: "bi-terminal m-auto text-primary",
      iconhead: "Easy to Use",
      iconcontent: "Ready to use with your own content, or customize the source files!",
      backImage:"",
      backgroundImage:"",
      IsShowcase:false,
    }
  ];
  const ShowcaseData = [
    {
      maindivclass:"row g-0",
      secdivclass:"col-lg-6 order-lg-2 text-white showcase-img",
      thrdivclass:"col-lg-6 order-lg-1 my-auto showcase-text",
      pclass:"lead mb-0",
      htype3:false,
      isthrimgtag:false,
      iconclass: "",
      iconhead: "Fully Responsive Design",
      iconcontent: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      backImage:"",
      backgroundImage: `url(${bgshowcase1})`,
      IsShowcase:true,
    },
    {
      maindivclass:"row g-0",
      secdivclass:"col-lg-6 text-white showcase-img",
      thrdivclass:"col-lg-6 my-auto showcase-text",
      pclass:"lead mb-0",
      htype3:false,
      isthrimgtag:false,
      iconclass: "",
      iconhead: "Updated For Bootstrap 5",
      iconcontent: "Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
      backImage:"",
      backgroundImage: `url(${bgshowcase2})`,
      IsShowcase:true,
    },
    {
      maindivclass:"row g-0",
      secdivclass:"col-lg-6 order-lg-2 text-white showcase-img",
      thrdivclass:"col-lg-6 order-lg-1 my-auto showcase-text",
      pclass:"lead mb-0",
      htype3:false,
      isthrimgtag:false,
      iconclass: "",
      iconhead: "Easy to Use & Customize",
      iconcontent: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
      backImage:"",
      backgroundImage: `url(${bgshowcase3})`,
      IsShowcase:true,
    },
    
  ];
  const TestimonalData = [
    {
      maindivclass:"col-lg-4",
      secdivclass:"testimonial-item mx-auto mb-5 mb-lg-0",
      thrdivclass:"img-fluid rounded-circle mb-3",
      pclass:"font-weight-light mb-0",
      htype3:false,
      isthrimgtag:true,
      iconclass:"",
      iconhead: "Margaret E.",
      iconcontent: `"This is fantastic! Thanks so much guys!"`,
      backImage: testimonials1,
      backgroundImage:"",
      IsShowcase:false,
    },
    {
      maindivclass:"col-lg-4",
      secdivclass:"testimonial-item mx-auto mb-5 mb-lg-0",
      thrdivclass:"img-fluid rounded-circle mb-3",
      pclass:"font-weight-light mb-0",
      htype3:false,
      isthrimgtag:true,
      iconclass:"",
      iconhead: "Fred S.",
      iconcontent: `"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`,
      backImage: testimonials2,
      backgroundImage:"",
      IsShowcase:false,
    },
    {
      maindivclass:"col-lg-4",
      secdivclass:"testimonial-item mx-auto mb-5 mb-lg-0",
      thrdivclass:"img-fluid rounded-circle mb-3",
      pclass:"font-weight-light mb-0",
      htype3:false,
      isthrimgtag:true,
      iconclass:"",
      iconhead: "Sarah W.",
      iconcontent: `"Thanks so much for making these free resources available to us!"`,
      backImage: testimonials3,
      backgroundImage:"",
      IsShowcase:false,
    },
    
  ];
  const sectionData=[
  {
    sectionclass:"features-icons bg-light text-center",
    divclass:"container",
    componentName:"Icongrid",
    componentprop:IconData,
    Ishead:false,
  },
  {
    sectionclass:"showcase",
    divclass:"container-fluid p-0",
    componentName:"Showcase",
    componentprop:ShowcaseData,
    Ishead:false,
  },
  {
    sectionclass:"testimonials text-center bg-light",
    divclass:"container",
    componentName:"Testimonal",
    componentprop:TestimonalData,
    Ishead:true,
  }
  ]
  return (
    <div>
      {/* Navigation*/}
      <Navigation />
      {/* Masthead*/}
      <HeaderSection />
      {/* DetailSection */}
      {
        sectionData.map((sectdata)=>{
          return(
            <section className={sectdata.sectionclass}>
        <div className={sectdata.divclass}>
          {sectdata.Ishead? <h2 className="mb-5">What people are saying...</h2> :""}
          <div className="row">
          <Icongrid idata={sectdata.componentprop}/>
          </div>
        </div>
      </section>
          )
        })
      }
     
      {/* Call to Action*/}
      <section className="call-to-action text-white text-center" id="signup">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              {/* Signup form*/}
              {/* * * * * * * * * * * * * * * **/}
              {/* * * SB Forms Contact Form * **/}
              {/* * * * * * * * * * * * * * * **/}
              {/* This form is pre-integrated with SB Forms.*/}
              {/* To make this form functional, sign up at*/}
              {/* https://startbootstrap.com/solution/contact-forms*/}
              {/* to get an API token!*/}
              <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                {/* Email address input*/}
                <div className="row">
                  <div className="col">
                    <input className="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                  </div>
                  <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                </div>
                {/* Submit success message*/}
                {/**/}
                {/* This is what your users will see when the form*/}
                {/* has successfully submitted*/}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                    <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>
                {/* Submit error message*/}
                {/**/}
                {/* This is what your users will see when there is*/}
                {/* an error submitting the form*/}
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer*/}
      <Footer />
    </div>
  );
}


