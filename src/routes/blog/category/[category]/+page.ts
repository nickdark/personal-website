// @ts-ignore
export const load = async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();
	const posts = allPosts.filter((post: { meta: { categories: string | any[] } }) =>
		post.meta.categories.includes(category)
	);
	return {
		category,
		posts
	};
};
