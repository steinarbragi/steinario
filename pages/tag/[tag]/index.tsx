import { Box, Button, Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../../components/layout';
import PostGrid from '../../../components/posts/postGrid';
import SearchBar from '../../../components/searchbar';
import TagFilter from '../../../components/tagfilter';
import {
  getAllTagSlugs,
  getPaginatedPosts,
  getAllPosts,
  getTagBySlug,
  getTags,
} from '../../../utils/ghost/api';

const LoadMore = styled(Button)`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 18px;
  padding-left: 50px;
  padding-right: 50px;
  font-weight: 700;
`;

const TagTitle = styled.h2`
  color: white;
  margin-bottom: 0px;
  margin-top: 100px;
`;

const Line = styled.hr`
  border-top: 1px solid ${(props) => props.theme.palette.primary.light};
  border-bottom: none;
  border-left: none;
  border-right: none;
`;

let pageCounter = 1;

const TagIndex = ({ posts, allTags, fullTag, allPosts, paginationData }) => {
  const [renderedPosts, setRenderedPosts] = useState(posts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([posts]);

  async function loadMorePosts() {
    pageCounter += 1;
    const morePosts = await getPaginatedPosts(fullTag.slug, `${pageCounter}`);
    setRenderedPosts(renderedPosts.concat(morePosts));
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TagTitle>{fullTag.name}</TagTitle>
            <Line />
          </Grid>
          <TagFilter allTags={allTags} fullTag={fullTag} />
          <Grid item xs={3}>
            <SearchBar
              allPosts={allPosts}
              setSearchResults={setFilteredResults}
              setSearchTerm={setSearchTerm}
            />
          </Grid>
        </Grid>
        <PostGrid
          posts={renderedPosts}
          filteredResults={filteredResults}
          searchTerm={searchTerm}
        />
        {paginationData.pagination.pages > pageCounter && (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box textAlign="center">
                <LoadMore variant="outlined" onClick={loadMorePosts}>
                  Load More
                </LoadMore>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const tags = await getAllTagSlugs();
  const paths = tags.map((tag) => ({ params: { tag: tag.slug } }));
  paths.push({ params: { tag: 'news' } });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx: { params: { tag: string } }) {
  const { tag } = ctx.params;

  let fullTag;
  let posts;

  if (tag !== 'news') {
    fullTag = await getTagBySlug(tag);
    posts = await getPaginatedPosts(tag);
  } else {
    fullTag = { name: 'News', slug: 'news' };
    posts = await getPaginatedPosts('');
  }
  const allPosts = await getAllPosts();
  const allTags = await getTags();
  const paginationData = posts.meta;

  return {
    props: { posts, allTags, fullTag, allPosts, paginationData }, // will be passed to the page component as props
  };
}

export default TagIndex;
