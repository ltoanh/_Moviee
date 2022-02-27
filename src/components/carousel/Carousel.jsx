import Card from 'components/card/Card';
import 'assets/styles/sass-utils/_variables.scss';
import React from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
// install Swiper modules
SwiperCore.use([Scrollbar]);

const swiperBreakpoints = {
	320: {
		width: 320,
		slidesPerView: 1,
	},
	560: {
		with: 560,
		slidesPerView: 2,
	},
	768: {
		width: 768,
		slidesPerView: 3,
	},
	1024: {
		width: 1024,
		slidesPerView: 4,
	},
};

function Carousel({ listData, category }) {
	return (
		<div className="carousel-section__content">
			<Swiper
				grabCursor={true} // hinh ban tay when scroll
				breakpoints={swiperBreakpoints}
				scrollbar={{
					hide: false,
				}}
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
