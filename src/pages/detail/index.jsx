// component
import DetailHeader from './header/DetailHeader';
import TrailerVideo from './video-list/TrailerVideo';
import CreditsList from './credits-list';
import OverviewItem from './overview-item/OverviewItem';
import ReviewsList from './reviews-list';

// api
import movieeApi from 'api-config/moiveeApi';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './detail.scss';

// moment
import moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi'); // dinh dang thoi gian theo tieng viet

function Detail() {
	const { category, id } = useParams();

	// movie item
	const [item, setItem] = useState({});
	// keywords
	const [keywords, setKeywords] = useState([]);
	// dien vien
	const [casters, setCasters] = useState([]);
	// reviews
	const [reviews, setReviews] = useState([]);
	const [reviewsPage, setReviewsPage] = useState(1);
	const [reviewsTotalPage, setReviewsTotalPage] = useState(0);
	// trailer
	const [trailer, setTrailer] = useState([]);

	// call api to init data
	const getDataItem = async () => {
		let response = await movieeApi.getDetail(category, id);
		setItem(response);
	};

	// lay thong tin keywords
	const getKeywordsList = async () => {
		let response = await movieeApi.getKeywords(category, id);
		setKeywords(response.keywords);
	};

	// lay thong tin dien vien
	const getCredits = async () => {
		let response = await movieeApi.getCredits(category, id);
		setCasters(response.cast.slice(0, 9));
	};

	// lay thong tin reviews
	const getReviews = async () => {
		let params = {
			page: reviewsPage,
			language: 'en',
		};
		let response = await movieeApi.getReviews(category, id, { params });
		setReviews([...reviews, ...response.results]);
		setReviewsTotalPage(response.total_pages);
		console.log('reviews', response);
	};
	// load more reviews
	const handleClickLoadMoreReviews = () => {
		setReviewsPage(reviewsPage + 1);
	};
	useEffect(() => {
		getReviews();
	}, [reviewsPage]);

	// lay video
	const getVideos = async () => {
		let response = await movieeApi.getVideos(category, id);

		// find trailer
		let trailerVideo = response.results.filter((video) => video.type === 'Trailer');
		setTrailer(trailerVideo);
	};

	useEffect(() => {
		getDataItem();
		getKeywordsList();
		getCredits();
		getReviews();
		getVideos();
	}, []);

	return (
		<div className="detail-page">
			{/* header */}
			<DetailHeader item={item} />
			{/* content */}
			<div className="detail-page__content">
				{/* giới thiệu */}
				<div className="detail-page__section">
					<h3 className="section-title">Giới thiệu</h3>
					<p className="detail-page__section__description">
						{item.overview || 'Không có bài giới thiệu.'}
					</p>
					<OverviewItem items={item.production_companies} title="Sản xuất bởi" />
					<OverviewItem items={item.production_countries} title="Quốc gia" />
					<OverviewItem items={keywords} title="Từ khóa" />
				</div>
				{/* diễn viên */}
				<div className="detail-page__section">
					<h3 className="section-title">Diễn viên</h3>
					<CreditsList creditsList={casters} />
				</div>
				{/* trailer */}
				<div className="detail-page__section">
					<h3 className="section-title">Trailer</h3>
					<div className="videos-list">
						{trailer && trailer.map((video) => <TrailerVideo video={video} />)}
					</div>
				</div>
				{/* reviews */}
				<div className="detail-page__section">
					<h3 className="section-title">Reviews</h3>
					<ReviewsList
						reviews={reviews}
						reviewsPage={reviewsPage}
						reviewsTotalPage={reviewsTotalPage}
						handleClickLoadMoreReviews={handleClickLoadMoreReviews}
					/>
				</div>
			</div>
		</div>
	);
}

export default Detail;
