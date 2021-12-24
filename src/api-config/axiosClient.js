import axios from 'axios';
import queryString from 'query-string';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
	baseURL: apiConfig.baseUrl,
	headers: {
		'content-type': 'Application/json',
	},
	paramsSerializer: (params) => {
		if (!params.language) {
			params = {
				...params,
				language: 'vi',
			};
		}
		return queryString.stringify({
			...params,
			api_key: apiConfig.apiKey,
		});
	},
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	(err) => {
		throw err;
	}
);

export default axiosClient;
