import React from 'react';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'components/card/Card';

function Carousel({ listData }) {
	return (
		<div className="carousel-section__content">
			<Swiper
				grabCursor={true} // hinh ban tay when scroll
				slidesPerView={4}
				spaceBetween={20}
			>
				{listData.map((item) => (
					<SwiperSlide key={item.id}>
						<Card item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Carousel;
