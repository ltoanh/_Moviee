import { OutlineButton } from 'components/button/Button';
import Carousel from './Carousel';

import React, { useEffect, useRef, useState } from 'react';
import './carousel.scss';

import { Link } from 'react-router-dom';

import movieeApi, { mediaType, movieType, timeWindow, tvType } from 'api-config/moiveeApi';

function CarouselSection({ title, category }) {
	// =============================== state ====================================
	// list movie to display
	const [listData, setListData] = useState([]);

	// selected state is selected in header
	const [selected, setSelected] = useState('');
	// list of selected state
	const [selectorList, setSelectorList] = useState([]);

	// selected node in header section
	const selectorRef = useRef();

	// ============================== useEffect ==================================
	// init data
	useEffect(() => {
		// call api to get data
		let params = {};
		const getData = async () => {
			switch (category) {
				case 'movie':
					// case movie
					let selectedMovieType = selected || movieType[0].slug;
					let responseMovie = await movieeApi.getListByType(mediaType.movie, selectedMovieType, {
						params,
					});

					setSelected(selectedMovieType);
					setSelectorList(movieType);
					setListData(responseMovie.results);
					// console.log(category, selectedMovieType, responseMovie);
					break;
				case 'tv':
					let selectedTvType = selected || tvType[0].slug;
					let responseTv = await movieeApi.getListByType(mediaType.tv, selectedTvType, { params });

					setSelected(selectedTvType);
					setSelectorList(tvType);
					setListData(responseTv.results);
					break;
				case 'trending':
					let selectedTrendingType = selected || timeWindow[0].slug;
					let responseTrending = await movieeApi.getTrending(mediaType.all, selectedTrendingType);

					setSelected(selectedTrendingType);
					setSelectorList(timeWindow);
					setListData(responseTrending.results);
					break;
				default:
					break;
			}
		};

		getData();
	}, [selected, category]);

	// handle selector header
	const handleClickAnchor = (e) => {
		let target = e.target;
		if (!target.classList.contains('selected')) {
			// remove current selected
			let childrenNodes = selectorRef.current.childNodes;
			let removeSelectedNodes = Array.from(childrenNodes).map((node) => {
				if (node.classList.contains('selected')) {
					node.classList.remove('selected');
				}

				return node;
			});
			// update selected node
			childrenNodes = removeSelectedNodes;
			target.classList.add('selected');

			setSelected(target.getAttribute('data-value'));
		}
	};

	return (
		<section className="carousel-section">
			<div className="carousel-section__header">
				<div className="carousel-section__header--left">
					<h3 className="section-title">{title}</h3>
					<div ref={selectorRef} className="carousel-section__selection">
						{selectorList.map((item, i) => {
							let selectedItem = selected === item.slug ? `selected` : ``;
							return (
								<div
									data-value={item.slug}
									onClick={handleClickAnchor}
									className={`carousel-section__selection--anchor ${selectedItem}`}
									key={i}
								>
									{item.name}
								</div>
							);
						})}
					</div>
				</div>
				{category !== 'trending' && (
					<Link
						to={{
							pathname: `/${category}`,
						}}
					>
						<OutlineButton className="small btn-outline-primary">Xem thêm</OutlineButton>
					</Link>
				)}
			</div>
			<Carousel listData={listData} category={category} />
		</section>
	);
}

export default CarouselSection;
