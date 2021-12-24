import Button from 'components/button/Button';
import Review from './review/Review';

import React from 'react';
import './reviews.scss';

function ReviewsList({ reviews, reviewsPage, reviewsTotalPage, handleClickLoadMoreReviews }) {
	return (
		<div className="reviews">
			{reviews.length > 0 ? (
				<>
					{reviews.map((reviewer, id) => (
						<Review reviewer={reviewer} id={id} />
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
	);
}

export default ReviewsList;
