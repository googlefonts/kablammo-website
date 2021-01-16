import Prismic from "prismic-javascript";

const prod = true;

export const apiEndpoint = prod
	? "https://the-local-optimist.cdn.prismic.io/api/v2"
	: "https://the-local-optimist-dev.cdn.prismic.io/api/v2";
export const accessToken = prod
	? "MC5YaHo1WkJVQUFDTUFMZWZR.A2Lvv73vv73vv73vv73vv70Yf--_vUfvv73vv70ID1nvv70DMO-_ve-_ve-_vQIvNz48UW5HGe-_vQ"
	: "MC5YbFFqdlJBQUFDY0FybllR.GEZA77-977-9Uu-_vRPvv70i77-977-9Ue-_vSFX77-977-9b3Xvv73vv73vv71c77-9aO-_vUVLdO-_vWw";

export const client = Prismic.client(apiEndpoint, { accessToken });

// Manages links to internal Prismic documents
export const linkResolver = function(doc) {
	if (doc.type === "stories") {
		return `/blog/stories/post?id=${doc.id}`;
	}
	if (doc.type === "interviews") {
		return `/blog/interviews/post?id=${doc.id}`;
	}
	if (doc.type === "toolkits") {
		return `/blog/toolkits/post?id=${doc.id}`;
	}
	if (doc.type === "madhappy") {
		return `/blog/madhappy/post?id=${doc.id}`;
	}
	if (doc.type === "culture") {
		return `/blog/culture/post?id=${doc.id}`;
	}
	if (doc.type === "podcasts_playlists") {
		return `/blog/podcasts-playlists/post?id=${doc.id}`;
	}
	if (doc.type === "get_involved") {
		return `/get-involved/post?id=${doc.id}`;
	}
	return "/";
};
