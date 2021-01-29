import Prismic from "prismic-javascript";

const prod = true;

export const apiEndpoint = "https://kablammo.cdn.prismic.io/api/v2";
export const accessToken =
	"MC5ZQk03UWhVQUFDWUFaNWc4.eu-_ve-_vQ5rO3fvv70VX0Hvv70X77-977-977-977-9a--_ve-_ve-_ve-_vSLvv73vv73vv70kUEnvv73vv73vv70";

export const client = Prismic.client(apiEndpoint, { accessToken });

// Manages links to internal Prismic documents
export const linkResolver = function (doc) {
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
