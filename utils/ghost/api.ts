/* eslint-disable no-console */
import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL,
  key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
  version: 'v3',
});

export async function getAllPosts() {
  return api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getPostBySlug(slug) {
  return api.posts
    .read({
      slug,
      include: 'tags,authors',
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getPageBySlug(slug) {
  return api.pages
    .read({
      slug,
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getTagBySlug(slug) {
  return api.tags
    .read({
      slug,
      include: 'count.posts',
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getPageSlugs() {
  return api.pages
    .browse({
      limit: 'all',
      fields: ['slug'],
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getTags() {
  return api.tags.browse().catch((err: string) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
}

export async function getAllTagSlugs() {
  return api.tags
    .browse({
      fields: ['slug'],
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getAuthor(authorSlug) {
  return api.authors
    .read({
      slug: authorSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getFeaturedPosts() {
  return api.posts
    .browse({
      include: 'tags,authors',
      limit: '6',
      filter: 'featured:true',
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getFeaturedPages() {
  return api.pages
    .browse({
      include: 'tags',
      limit: '6',
      filter: 'featured:true',
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getRoadmap() {
  return api.pages
    .browse({
      limit: '1',
      filter: 'slug:roadmap',
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getRelatedPosts(tag, id) {
  return api.posts
    .browse({
      include: 'tags, authors',
      limit: '3',
      filter: `tag:${tag}+id:-${id}`,
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getPaginatedPosts(tag = null, page = '1') {
  let tagfilter = tag;
  if (tag === 'news') tagfilter = '';
  return api.posts.browse({
    include: 'tags, authors',
    limit: '9',
    filter: tagfilter ? `tag:${tagfilter}` : '',
    page: page ? `${page}` : '',
  });
}

export async function getPostsByTag(tagSlug) {
  return api.posts
    .browse({
      filter: `tag:${tagSlug}`,
      include: 'tags,authors',
    })
    .catch((err: string) => {
      console.error(err);
    });
}

// TODO: merge all post functions into a single function with params for filter and limit?
