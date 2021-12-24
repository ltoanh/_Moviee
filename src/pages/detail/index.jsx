// marked
import { marked } from 'marked';

import movieeApi, { getImage, getVideoURL, imageSize } from 'api-config/moiveeApi';

import React, { useEffect, useState } from 'react';
import './detail.scss';
import './videos-list.scss';

import { useParams } from 'react-router';

// moment
import moment from 'moment';
import 'moment/locale/vi';
import Button from 'components/button/Button';
import { useRef } from 'react';
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
			{/* content */}
			<div className="detail-page__content">
				{/* giới thiệu */}
				<div className="detail-page__section">
					<h3 className="section-title">Giới thiệu</h3>
					<p className="detail-page__section__description">
						{item.overview || 'Không có bài giới thiệu.'}
					</p>
					<p>
						<strong>Sản xuất bởi:</strong>{' '}
						{item.production_companies &&
							item.production_companies.map((company) => company.name).join(', ')}
					</p>
					<p>
						<strong>Quốc gia:</strong>{' '}
						{item.production_countries &&
							item.production_countries.map((country) => country.name).join(', ')}
					</p>
					<p>
						<strong>Từ khóa:</strong>{' '}
						{keywords && keywords.map((keyword) => keyword.name).join(', ')}
					</p>
				</div>
				{/* diễn viên */}
				<div className="detail-page__section">
					<h3 className="section-title">Diễn viên</h3>
					<div className="detail-page__credits">
						{casters.map((caster, id) => (
							<div key={id} className="detail-page__credits__item">
								<img src={caster && getImage(imageSize.original, caster.profile_path)} alt="" />
								<div>
									<h5 className="detail-page__credits__item--original-name">
										{caster.original_name}
									</h5>
									<h6 className="detail-page__credits__item--character">{caster.character}</h6>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* trailer */}
				<div className="detail-page__section">
					<h3 className="section-title">Trailer</h3>
					<div className='videos-list'>{trailer && trailer.map((video) => <TrailerVideo video={video} />)}</div>
				</div>
				{/* reviews */}
				<div className="detail-page__section">
					<h3 className="section-title">Reviews</h3>
					<div className="reviews">
						{reviews.length > 0 ? (
							<>
								{reviews.map((reviewer, id) => (
									<div className="review__item" key={id}>
										<div className="review__item__header">
											<img
												src={getImage(imageSize.w500, reviewer.author_details.avatar_path)}
												alt={reviewer.author_details.name}
											/>
											<div className="review__item__header__detail">
												<h5 className="review__item__header__detail--name">{reviewer.author}</h5>
												<small className="review__item__header__detail--date">
													{moment(reviewer.created_at).format('LLL')}
												</small>
											</div>
										</div>
										<p
											dangerouslySetInnerHTML={{ __html: marked.parse(reviewer.content) }}
											className="review__item__content"
										></p>
									</div>
								))}
								{reviewsPage < reviewsTotalPage && (
									<Button onClick={handleClickLoadMoreReviews} className="small">
										Xem thêm
									</Button>
								)}
							</>
						) : (
							<p>Không có đánh giá.</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;

const TrailerVideo = ({ video }) => {
	const iframeVideoRef = useRef();

	useEffect(() => {
		const height = (iframeVideoRef.current.offsetWidth * 9) / 16 + 'px';
		iframeVideoRef.current.setAttribute('height', height);
	}, []);

	return (
		<div className="videos-list__item">
			<h5 className='videos-list__item__title'>{video.name}</h5>
			<p className='videos-list__item__description'>{moment(video.published_at).format('LLL')}</p>
			<iframe
				src={getVideoURL(video.site, video.key)}
				width="100%"
				frameBorder="0"
				title={video.id}
				key={video.id}
				ref={iframeVideoRef}
			/>
		</div>
	);
};
