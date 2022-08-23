const axios = require('axios').default;

export const fetchArticles = async () => {
	const articles = await axios.get(
		'https://be-nc-news-rayb.herokuapp.com/api/articles'
	);
	const { data } = articles;
	return data;
};
