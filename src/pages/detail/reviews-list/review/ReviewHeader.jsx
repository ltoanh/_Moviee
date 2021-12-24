import { getImage, imageSize } from 'api-config/moiveeApi'
import React from 'react'

// moment
import moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi'); // dinh dang thoi gian theo tieng viet

function ReviewHeader({reviewer}) {
  return (
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
  )
}

export default ReviewHeader
