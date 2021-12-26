import Button from 'components/button/Button';
import { OutlineButton } from 'components/button/Button';

import React from 'react';

import { Link } from 'react-router-dom';

import movieeApi, { getImage, getVideoURL, imageSize } from 'api-config/moiveeApi';

import { openModal } from 'slice/modalSlide';
import { useDispatch } from 'react-redux';

function HeroSlider({ item }) {

	const dispatch = useDispatch();
	
	const handleClickTrailer = async () => {
		let modal = document.getElementById(`modal_${item.id}`);

		const trailerVideos = await movieeApi.getVideos(item.media_type, item.id);

		if (trailerVideos.results.length > 0) {
			const video = trailerVideos.results[0];
			const videoSrc = getVideoURL(video.site, video.key);

			modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
		} else {
			modal.querySelector('.modal__content').innerHTML = 'Không có trailer';
		}

		modal.classList.add('active');
		dispatch(openModal());
	};

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
						<i className="hero-item__content__list__item--icon bx bx-star"></i>
						<span>{item.vote_average}</span>
					</li>
					<li className="hero-item__content__list__item">
						<i className="hero-item__content__list__item--icon bx bx-user"></i>
						<span>{item.vote_count}</span>
					</li>
					<li className="hero-item__content__list__item">
						<i className="hero-item__content__list__item--icon bx bx-calendar"></i>
						<span>{item.release_date || item.first_air_date}</span>
					</li>
				</ul>
				<p>{item.overview}</p>
				<div className="hero-item__btns">
					<Link
						to={{
							pathname: `/${item.media_type}/${item.id}`,
						}}
					>
						<Button>Xem chi tiết</Button>
						{/* link to detail page */}
					</Link>
					<OutlineButton onClick={handleClickTrailer}>Xem trailer</OutlineButton>
					{/* open modal box to play trailer */}
				</div>
			</div>
		</div>
	);
}

export default HeroSlider;
