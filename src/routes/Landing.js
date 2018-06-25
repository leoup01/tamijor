import React from 'react';
import Navigation from '../components/public/Navigation';
import SliderCustom from '../components/public/Slider';
import AboutUs from '../components/public/AboutUs';
import Services from '../components/public/Services';
import Footer from '../components/Footer';
const Landing = () =>
  <div>
  	<Navigation />
    <div className="main-content">
    	<SliderCustom/>
    	<AboutUs/>
    	<Services/>
    	<h1>Landing Page</h1>
    </div>
    <Footer/>
  </div>

export default Landing;