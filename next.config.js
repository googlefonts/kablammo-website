module.exports = {
	target: "serverless",
	env: {
		siteUrl: "https://localoptimist.com",
	},
	// exportPathMap: async function() {
	// 	const paths = {
	// 		"/": { page: "/" },
	// 		"/stories": { page: "/stories" },
	// 		"/stories/story": { page: "/stories/story" }
	// };
	// const API = await Prismic.getApi(apiEndpoint, {
	// 	accessToken,
	// 	req
	// });
	// const res = API.query(
	// 	Prismic.Predicates.at("document.type", "stories")
	// );
	// const data = await res.json();
	// const stories = data.map(entry => entry.story);
	// stories.forEach(show => {
	// 	paths[`/stories/${story.id}`] = {
	// 		page: "/stories/[id]",
	// 		query: { id: story.id }
	// 	};
	// });
	// return paths;
	// }
};
