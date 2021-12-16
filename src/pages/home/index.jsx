import CarouselSection from 'components/carousel';

import React, { useEffect, useState } from 'react';
import './home.scss';

// api
import movieeApi, { mediaType, movieType, timeWindow, tvType } from 'api-config/moiveeApi';

function Home() {
	const [trendingList, setTrendingList] = useState([]);
	const [selectedTrendingTime, setSelectedTrendingTime] = useState(timeWindow[0].slug);

	const [movieList, setMovieList] = useState([]);
	const [selectedMovieType, setSelectedMovieType] = useState(movieType[0].slug);

	const [tvList, setTvList] = useState([]);
	const [selectedTvType, setSelectedTvType] = useState(tvType[0].slug);

	// get trending
	useEffect(() => {
		const getTrending = async () => {
			let response = await movieeApi.getTrending(mediaType.all, selectedTrendingTime);
			// console.log('home get trending: ', selectedTrendingTime, response);
			setTrendingList(response.results);
		};

		getTrending();
	}, [selectedTrendingTime]);

	// get movie by type
	useEffect(() => {
		const getMovies = async () => {
			let response = await movieeApi.movie.getListByType(selectedMovieType, {params: {}});
			// console.log('home get movie: ', selectedMovieType, response);
			setMovieList(response.results);
		};

		getMovies();
	}, [selectedMovieType]);

	// get tv by type
	useEffect(() => {
		const getTvShows = async () => {
			let response = await movieeApi.tv.getListByType(selectedTvType, {params: {}});
			console.log('home get tv: ', selectedTvType, response);
			setTvList(response.results);
		};

		getTvShows();
	}, [selectedTvType]);

	return (
		<div className="homepage">
			<CarouselSection
				title="Trending"
				listItems={trendingList}
				selectorList={timeWindow}
				selected={selectedTrendingTime}
				handleSelected={setSelectedTrendingTime}
				viewmorePath="/trending"
			/>
			<CarouselSection
				title="Movie"
				listItems={movieList}
				selectorList={movieType}
				selected={selectedMovieType}
				handleSelected={setSelectedMovieType}
				viewmorePath="/movie"
			/>
			<CarouselSection
				title="TV Show"
				listItems={tvList}
				selectorList={tvType}
				selected={selectedTvType}
				handleSelected={setSelectedTvType}
				viewmorePath="/tv"
			/>
		</div>
	);
}

export default Home;

/**
 * reaction movie: add class .love to .carousel__item--reaction
 */
