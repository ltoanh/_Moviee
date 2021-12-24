import { getImage, imageSize } from 'api-config/moiveeApi';

import React from 'react';
import './detail-header.scss';

function DetailHeader({ item }) {
	return (
		<div
			style={{
				backgroundImage: `url(${
					item && getImage(imageSize.original, item.backdrop_path || item.poster_path)
				})`,
			}}
			className="detail-page__header"
		>
			<div className="detail-page__header__content">
				<h3 className="detail-page__header__content__title">{item.name || item.title}</h3>
				<ul className="detail-page__header__content__description">
					<li>{item.release_date || item.first_air_date}</li>
					<li>{item.status}</li>
					<li>
						<i className="bx bxs-star"></i>
						{item.vote_average}
					</li>
				</ul>
				<ul className="genres__list">
					{item.genres &&
						item.genres.map((genre) => (
							<li className="genres__list__item" key={genre.id}>
								{genre.name}
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}

export default DetailHeader;
