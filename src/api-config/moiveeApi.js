import axiosClient from './axiosClient';

const prefixImage = 'https://image.tmdb.org/t/p';
export const imageSize = {
	original: 'original',
};
export const getImage = (imageSize, path) =>  prefixImage + `/${imageSize}/${path}`;

export const mediaType = {
	all: 'all',
	movie: 'movie',
	tv: 'tv',
};

export const timeWindow = {
	day: 'day',
	week: 'week',
}

export const movieType = {
	popular: 'popular',
};

export const tvType = {
};

export const userType = {};

const movieeApi = {
	getTrending: (type, time) => {
		const url = `/trending/all/day`;
		return axiosClient.get(url, {params: {}});
		// have to params to get api_key
	},

	movie: {
		getListByType: (type, params) => {
			const url = `/${mediaType.movie}/${movieType[type]}`;
			return axiosClient.get(url, params);
		}
	},

};

export default movieeApi;
