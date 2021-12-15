import React from 'react';
import { getImage, imageSize } from 'api-config/moiveeApi';
import Button from 'components/button/Button';
import { Link } from 'react-router-dom';
import { OutlineButton } from 'components/button/Button';

function CarouselItem({ item }) {
	return (
		<div className="hero-item" key={item.id}>
			<img
				className="hero-item__image"
				src={getImage(imageSize.original, item.backdrop_path || item.poster_path)}
				alt=""
			/>
			<div className="hero-item__content">
				<h3 className="hero-item__content--title">{item.title || item.name}</h3>
				<ul className="hero-item__content__list">
					<li className="hero-item__content__list__item">
						<i class="hero-item__content__list__item--icon bx bx-star"></i>
						<span>{item.vote_average}</span>
					</li>
					<li className="hero-item__content__list__item">
						<i class="hero-item__content__list__item--icon bx bx-user"></i>
						<span>{item.vote_count}</span>
					</li>
					<li className="hero-item__content__list__item">
						<i class="hero-item__content__list__item--icon bx bx-calendar"></i>
						<span>{item.release_date || item.first_air_date}</span>
					</li>
				</ul>
				<p>{item.overview}</p>
				<div className='hero-item__btns'>
					<Link to="#">
						<Button>Xem chi tiết</Button>
						{/* link to detail page */}
					</Link>
					<OutlineButton>Xem trailer</OutlineButton>
					{/* open modal box to play trailer */}
				</div>
			</div>
		</div>
	);
}

export default CarouselItem;
