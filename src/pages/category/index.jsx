import CardItem from 'components/card/Card';

import { Pagination } from '@mui/material';

import categoryStyles from './category.module.scss';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

import movieeApi, { catalog, getImage, imageSize, mediaType } from 'api-config/moiveeApi';

function Category() {
	const { category } = useParams();

	const [dataList, setDataList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);

	// call api
	useEffect(() => {
		const getDataList = async () => {
			let params = {
				page: currentPage,
			};

			let response = await movieeApi.getListByType(category, catalog.popular, { params });

			setDataList(response.results);
			setTotalPage(response.total_pages);

			console.log('data list: ', category, response);
		};

		getDataList();
	}, [currentPage, category]);

	// pagination
	const handlePagination = (e, value) => {
		setCurrentPage(value);
		window.scrollTo(0, 0);
	};

	return (
		<>
			<div
				style={{
					backgroundImage: `url(${
						dataList[0] &&
						getImage(imageSize.original, dataList[0].backdrop_path || dataList[0].poster_path)
					})`,
				}}
				className={categoryStyles.page__header}
			>
				<h2 className={categoryStyles.page__header__title}>
					{category === mediaType.movie ? 'Movie' : 'TV Show'}
				</h2>
			</div>
			<div className={categoryStyles.page__list}>
				<div className={categoryStyles.page__list__items}>
					{dataList.map((item) => (
						<CardItem item={item} key={item.id} />
					))}
				</div>
				<div className={categoryStyles.page__list__pagination}>
					<Pagination
						count={totalPage}
						boundaryCount={2}
						page={currentPage}
						onChange={handlePagination}
					/>
				</div>
			</div>
		</>
	);
}

export default Category;
