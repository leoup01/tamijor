import React from 'react';
import { Row, Col } from 'reactstrap';
import Slider from 'react-animated-slider';
import ScrollAnimation from 'react-animate-on-scroll';
import 'react-animated-slider/build/horizontal.css';
import '../../slider-animations.css';

const content = [
  {
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.'
  },
  {
    title: 'Tortor Dapibus Commodo Aenean Quam',
    description:
    'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.'
  },
  {
    title: 'Phasellus volutpat metus',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
  }
];

const SliderTestimonials = (props) => {
  return (
  	<section>
  	<Slider className="slider-wrapper2" autoplay="5000">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					//style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner2">
            <p>{item.description}</p>
						<h3>{item.title}</h3>

					</div>
				</div>
			))}
	</Slider>
	</section>
  );
};

export default SliderTestimonials;