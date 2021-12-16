import axiosClient from './axiosClient';

const prefixImage = 'https://image.tmdb.org/t/p';
export const imageSize = {
	original: 'original',
	w500: 'w500',
};
export const getImage = (imageSize, path) => prefixImage + `/${imageSize}/${path}`;

export const getAvatarImage = (path) => `https://gravatar.com/avatar/${path}jpg`;

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

	movie: {
		getListByType: (type, params) => {
			const url = `/${mediaType.movie}/${type}`;
			return axiosClient.get(url, params);
		},
	},

	tv: {
		getListByType: (type, params) => {
			const url = `/${mediaType.tv}/${type}`;
			return axiosClient.get(url, params);
		},
	},
};

export default movieeApi;
