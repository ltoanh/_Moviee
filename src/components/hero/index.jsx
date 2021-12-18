import React from 'react';
import Slider from 'react-slick';
import HeroSlider from './HeroSlider';
import './hero.scss';

const setting = {
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

function HeroSlide({ data }) {
	return (
		<div className="hero">
			<Slider {...setting}>
				{data.map((item) => (
					<HeroSlider key={item.id} item={item} />
				))}
			</Slider>
		</div>
	);
}

export default HeroSlide;
