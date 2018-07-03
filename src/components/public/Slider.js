import React from 'react';
import { Row, Col } from 'reactstrap';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../slider-animations.css';

import bg01 from '../../images/bg01.jpg';
import bg02 from '../../images/bg02.jpg';
import bg03 from '../../images/bg03.jpg';



const content = [
  {
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
    image: bg01
  },
  {
    title: 'Tortor Dapibus Commodo Aenean Quam',
    description:
    'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
    image: bg02
  },
  {
    title: 'Phasellus volutpat metus',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    image: bg03
  }
];

const content2 = [
  {
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
    image: 'https://i.imgur.com/ZXBtVw7.jpg'
  },
  {
    title: 'Tortor Dapibus Commodo Aenean Quam',
    description:
    'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
    image: 'https://i.imgur.com/DCdBXcq.jpg'
  },
  {
    title: 'Phasellus volutpat metus',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    image: 'https://i.imgur.com/DvmN8Hx.jpg'
  }
];
/*
{
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
    button: 'Read More',
    image: 'https://i.imgur.com/ZXBtVw7.jpg',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png'
  }
<button>{item.button}</button>
<section>
  <img src={item.userProfile} alt={item.user} />
  <span>
    Posted by <strong>{item.user}</strong>
  </span>
</section>
*/
const SliderCustom = (props) => {
  return (
  	<section>
  	<Slider className="slider-wrapper" autoplay="5000">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						
					</div>
					<section>
						<a class="link" href="https://www.facebook.com/" target="_blank">
              <i className="fa fa-facebook-square fa-3x color-white"></i> 
            </a>
						<span>
							Facebook <strong>Momentos Tamijor</strong>
						</span>
					</section>
				</div>
			))}
	</Slider>
	</section>
  );
};

export default SliderCustom;