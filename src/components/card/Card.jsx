import React from 'react';
import './cardItem.scss';

import { getImage, imageSize } from 'api-config/moiveeApi';

function CardItem({item}) {
	return (
		<div className="card-item">
			<div
				style={{
					backgroundImage: `url(${getImage(
						imageSize.w500,
						item.poster_path || item.backdrop_path
					)})`,
				}}
				className="card-item__poster"
			>
				<div className="card-item__poster__media">
					<i className="bx bx-play-circle"></i>
					<span className="card-item__poster__media--rating">{item.vote_average}</span>
				</div>
			</div>
			<div className="card-item__content">
				<div className="card-item__content__detail">
					<h4 className="card-item__content__detail--title">{item.title || item.name}</h4>
					<ul className="card-item__content__detail--info">
						<li>{item.original_language}</li>
						<li>{item.vote_average}/10</li>
						<li>{item.release_date || item.first_air_date}</li>
					</ul>
				</div>
				<div className="card-item--reaction">
					<i className="bx bxs-heart"></i>
				</div>
			</div>
		</div>
	);
}

export default CardItem;
