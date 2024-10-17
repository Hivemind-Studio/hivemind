import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const portfolio = await getCollection('portfolio');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: portfolio.map((portfolio) => ({
			...portfolio.data,
			link: `/portfolio/${portfolio.slug}/`,
		})),
	});
}
