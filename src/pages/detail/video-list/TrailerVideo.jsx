import React, { useEffect, useRef } from 'react';
import './videos-list.scss';

// moment
import moment from 'moment';
import 'moment/locale/vi';
import { getVideoURL } from 'api-config/moiveeApi';
moment.locale('vi'); // dinh dang thoi gian theo tieng viet

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

export default TrailerVideo;