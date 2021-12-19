import CarouselSection from 'components/carousel';

import React, { useEffect, useState } from 'react';
import './home.scss';

// api
import movieeApi, { mediaType, timeWindow } from 'api-config/moiveeApi';
import HeroSlide from 'components/hero';

function Home() {

	// store data from api
	const [moviesList, setMoviesList] = useState([]);

	useEffect(() => {
		// call api get top rated api
		const getPopularList = async () => {
			let response = await movieeApi.getTrending(mediaType.all, timeWindow[0].slug);
			let data = response.results.slice(0, 4);
			setMoviesList(data);
			// console.log('get data', data);
		};

		getPopularList();
	}, []);
	return (
		<div className="homepage">
			<HeroSlide data={moviesList} />
			<CarouselSection
				title="Trending"
				category="trending"
			/>
			<CarouselSection
				title="Movie"
				category="movie"
			/>
			<CarouselSection
				title="TV Show"
				category="tv"
			/>
		</div>
	);
}

export default Home;

/**
 * reaction movie: add class .love to .carousel__item--reaction
 */
