import Card from 'components/card/Card';

import React from 'react';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

function Carousel({ listData, category }) {
	return (
		<div className="carousel-section__content">
			<Swiper
				grabCursor={true} // hinh ban tay when scroll
				slidesPerView={4}
				spaceBetween={20}
			>
				{listData.map((item) => (
					<SwiperSlide key={item.id}>
						{category === 'trending' ? (
							<Card item={item} category={item.media_type} />
						) : (
							<Card item={item} category={category} />
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Carousel;
