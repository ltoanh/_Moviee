import React from 'react';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
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
					<CarouselItem item={item} />
				))}
			</Slider>
		</div>
	);
}

export default HeroSlide;
