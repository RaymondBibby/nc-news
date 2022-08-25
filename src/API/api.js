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

export const fetchCommentsById = async (article_id) => {
	const comments = await axios.get(
		`https://be-nc-news-rayb.herokuapp.com/api/articles/${article_id}/comments`
	);

	const { data } = comments;
	return data;
};

export const postCommentById = async (article_id, body, user) => {
	const request_body = { username: user, body };
	console.log(request_body, article_id);
	const comment = await axios.post(
		`https://be-nc-news-rayb.herokuapp.com/api/articles/20/comments`,
		request_body
	);

	const { data } = comment;
	console.log(data);
	return data;
};
