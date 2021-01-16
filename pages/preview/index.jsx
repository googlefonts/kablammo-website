import { useEffect } from "react";
import Prismic from "prismic-javascript";
import {
	client,
	linkResolver,
	apiEndpoint,
	accessToken
} from "../../prismic-configuration";
import { useRouter } from "next/router";
import qs from "qs";

const Preview = props => {
	const router = useRouter();
	useEffect(() => {
		const params = router.query;
		// const params = qs.parse(this.props.location.search.slice(1));
		if (!params.token) {
			return console.warn(`No token available, check your configuration`);
		}
		client
			.previewSession(params.token, linkResolver, "/")
			.then(url => router.push(url));
	}, [router]);
	return null;
};

export default Preview;
