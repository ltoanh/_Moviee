import React from 'react';

import { getImage, imageSize } from 'api-config/moiveeApi';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

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
						<div className="carousel__item">
							<div
								style={{
									backgroundImage: `url(${getImage(
										imageSize.w500,
										item.poster_path || item.backdrop_path
									)})`,
								}}
								className="carousel__item__poster"
							>
								<div className="carousel__item__poster__media">
									<i className="bx bx-play-circle"></i>
									<span className="carousel__item__poster__media--rating">{item.vote_average}</span>
								</div>
							</div>
							<div className="carousel__item__content">
								<div className="carousel__item__content__detail">
									<h4 className="carousel__item__content__detail--title">
										{item.title || item.name}
									</h4>
									<ul className="carousel__item__content__detail--info">
										<li>{item.original_language}</li>
										<li>{item.vote_average}/10</li>
										<li>{item.release_date || item.first_air_date}</li>
									</ul>
								</div>
								<div className="carousel__item--reaction">
									<i className="bx bxs-heart"></i>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Carousel;
