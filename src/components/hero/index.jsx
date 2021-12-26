import Modal from 'components/modal/Modal';
import HeroSlider from './HeroSlider';

import React from 'react';
import { useRef, useEffect } from 'react';
import './hero.scss';


import Slider from 'react-slick';
import { useSelector } from 'react-redux';

const setting = {
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

function HeroSlide({ data }) {
	const sliderRef = useRef();
	const isOpenModal = useSelector((state) => state.modal.isOpen)
	
	// pause slider
	useEffect(() => {
		if(!isOpenModal){
			sliderRef.current.slickPlay();
		} else {
			sliderRef.current.slickPause();
		}
	}, [isOpenModal]);

	return (
		<div className="hero">
			<Slider ref={sliderRef} {...setting}>
				{data.map((item) => (
					<HeroSlider key={item.id} item={item} />
				))}
			</Slider>
			{data.map((item) => (
				<TrailerModal key={item.id} item={item} />
			))}
		</div>
	);
}

export default HeroSlide;

const TrailerModal = ({ item }) => {
	const iframeRef = useRef();

	const onClose = () => iframeRef.current.setAttribute('src', '');

	return (
		<Modal id={`modal_${item.id}`} onClose={onClose}>
			<iframe title="trailer" ref={iframeRef} />
		</Modal>
	);
};
