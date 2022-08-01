import rss from "@astrojs/rss";
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: import.meta.env.GHOST_URL,
  key: import.meta.env.GHOST_KEY,
  version: "v5.0",
});

const blog = await api.settings.browse();

const { title, description, icon } = blog;

const posts = await api.posts.browse({
  include: ["tags", "authors"],
});

const items = posts.map((post) => ({
  link: `${import.meta.env.SITE}article/${post.slug}`,
  title: post.title,
  pubDate: new Date(post.published_at),
  description: post.excerpt,
}));

export const get = () =>
  rss({
    // `<title>` field in output xml
    title,
    // `<description>` field in output xml
    description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
