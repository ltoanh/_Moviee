import React, { useEffect, useState } from 'react';

import Navbar from './navbar';
import HeroSlide from './hero';

import movieeApi, { mediaType, timeWindow } from 'api-config/moiveeApi';

function Header() {
	// store data from api
	const [moviesList, setMoviesList] = useState([]);

	useEffect(() => {
		// call api get top rated api
		const getPopularList = async () => {
			let response = await movieeApi.getTrending(mediaType.all, timeWindow.week);
			let data = response.results.slice(0, 4);
			setMoviesList(data);
			// console.log('get data', data);
		};
		
		getPopularList();
	}, []);
	
	return (
		<header>
			<Navbar />
			<HeroSlide data={moviesList}/>
		</header>
	);
}

export default Header;
