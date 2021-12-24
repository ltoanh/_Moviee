import React from 'react';

// marked
import { marked } from 'marked';
import ReviewHeader from './ReviewHeader';

function Review({ reviewer, id }) {
	return (
		<div className="review__item" key={id}>
			<ReviewHeader reviewer={reviewer} />
			<p
				dangerouslySetInnerHTML={{ __html: marked.parse(reviewer.content) }}
				className="review__item__content"
			></p>
		</div>
	);
}

export default Review;
