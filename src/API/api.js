const axios = require('axios').default;

export const fetchArticles = async (order, sortByCat) => {
	const queryStr = `?sort_by=${sortByCat}&order=${order}`;
	console.log(queryStr);

	const articles = await axios.get(
		`https://be-nc-news-rayb.herokuapp.com/api/articles${queryStr}`
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

export const fetchCommentsById = async (article_id) => {
	const comments = await axios.get(
		`https://be-nc-news-rayb.herokuapp.com/api/articles/${article_id}/comments`
	);

	const { data } = comments;
	return data;
};

export const postCommentById = async (article_id, body, user) => {
	const comment = await axios.post(
		`https://be-nc-news-rayb.herokuapp.com/api/articles/${article_id}/comments`,
		{ username: user, body: body }
	);

	const { data } = comment;
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
