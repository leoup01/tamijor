import React from 'react';
import Navigation from '../components/public/Navigation';
import SliderCustom from '../components/public/Slider';
import AboutUs from '../components/public/AboutUs';
import Services from '../components/public/Services';
import Events from '../components/public/Events';
import Testimonials from '../components/public/Testimonials';
import Contact from '../components/public/Contact';
import Footer from '../components/Footer';
const Landing = () =>
  <div>
  	<Navigation />
    <div className="main-content">
    	<SliderCustom/>
    	<AboutUs/>
    	<Services/>
      <Events/>
      <Testimonials/>
    	<Contact/>
    </div>
    <Footer/>
  </div>

export default Landing;