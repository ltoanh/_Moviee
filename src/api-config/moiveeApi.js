import axiosClient from './axiosClient';

//=========================== get image ================================
const prefixImage = 'https://image.tmdb.org/t/p';
const defaultAvatarImageURL =
	'https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar-300x300.png';

export const imageSize = {
	original: 'original',
	w154: 'w154',
	w500: 'w500',
};
export const getImage = (imageSize, path) => {
	if (path) {
		if(path.includes('http')){
			return path.slice(1,);
		}	
		return prefixImage + `/${imageSize}/${path}`;
	} else {
		return defaultAvatarImageURL;
	}
};

export const getAvatarImage = (path) => {
	if(path.includes('http')){
		return path.slice(1,);
	}	
	return `https://gravatar.com/avatar/${path}jpg`;
};

//========================== get video ============================
const youtubePrefix = 'https://www.youtube.com/embed/';
const vimeoPrefix = 'https://vimeo.com/';

export const getVideoURL = (site, path) => {
	switch (site) {
		case 'YouTube':
			return youtubePrefix + path;
		case 'Vimeo':
			return vimeoPrefix + path;
		default:
			return null;
	}
};

export const mediaType = {
	all: 'all',
	movie: 'movie',
	tv: 'tv',
};
export const timeWindow = [
	{
		name: 'Tuần',
		slug: 'week',
	},
	{
		name: 'Ngày',
		slug: 'day',
	},
];

export const catalog = {
	upcoming: 'upcoming',
	on_the_air: 'on_the_air',

	now_playing: 'now_playing',
	airing_today: 'airing_today',

	popular: 'popular',
	top_rated: 'top_rated',
};

export const movieType = [
	{
		name: 'Sắp tới',
		slug: 'upcoming',
	},
	{
		name: 'Phổ biến',
		slug: 'popular',
	},
	{
		name: 'Đánh giá cao',
		slug: 'top_rated',
	},
];

export const tvType = [
	{
		name: 'Sắp chiếu',
		slug: 'on_the_air',
	},
	{
		name: 'Phổ biến',
		slug: 'popular',
	},
	{
		name: 'Đánh giá cao',
		slug: 'top_rated',
	},
];

const movieeApi = {
	getTrending: (type, time) => {
		const url = `/trending/${type}/${time}`;
		return axiosClient.get(url, { params: {} });
		// have to params to get api_key
	},

	getListByType: (mediaType, type, params) => {
		const url = `/${mediaType}/${type}`;
		return axiosClient.get(url, params);
	},

	getDetail: (mediaType, id) => {
		const url = `/${mediaType}/${id}`;
		return axiosClient.get(url, { params: {} });
	},

	getKeywords: (mediaType, id) => {
		const url = `/${mediaType}/${id}/keywords`;
		return axiosClient.get(url, { params: {} });
	},

	getCredits: (mediaType, id) => {
		const url = `/${mediaType}/${id}/credits`;
		return axiosClient.get(url, { params: {} });
	},

	getReviews: (mediaType, id, params) => {
		const url = `/${mediaType}/${id}/reviews`;
		return axiosClient.get(url, params);
	},

	getVideos: (mediaType, id) => {
		const url = `/${mediaType}/${id}/videos`;
		return axiosClient.get(url, {
			params: {
				language: 'en',
			},
		});
	},
};

export default movieeApi;
