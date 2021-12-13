import axiosClient from './axiosClient';

export const category = {
	movie: 'movie',
	tv: 'tv',
};

export const movieType = {};

export const tvType = {};

export const userType = {};

const movieeApi = {
	movie: {
		getPopularList: (params) => {
			const url = '/movie/popular';
			return axiosClient.get(url, params);
		},
	}
};

export default movieeApi;
