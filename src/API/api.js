const axios = require('axios').default;

export const fetchArticles = async () => {
	const articles = await axios.get(
		'https://be-nc-news-rayb.herokuapp.com/api/articles'
	);
	const { data } = articles;
	return data;
};

export const fetchTopics = async () => {
	const topics = await axios.get(
		'https://be-nc-news-rayb.herokuapp.com/api/topics'
	);
	const { data } = topics;
	return data;
};

export const fetchArticlesWithQuery = async (queryStr) => {
	const articles = await axios.get(
		`https://be-nc-news-rayb.herokuapp.com/api/articles?topic=${queryStr}`
	);
	const { data } = articles;
	return data;
};

export const fetchArticleById = async (article_id) => {
	const article = await axios.get(
		`https://be-nc-news-rayb.herokuapp.com/api/articles/${article_id}`
	);
	const { data } = article;
	return data;
};

export const patchVotesByArticleId = async (article_id, inc) => {
	const patchedVote = await axios.patch(
		`https://be-nc-news-rayb.herokuapp.com/api/articles/${article_id}`,
		{ inc_votes: `${inc}` }
	);
	const { data } = patchedVote;
	return data;
};
