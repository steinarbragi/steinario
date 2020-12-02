import { Grid } from '@material-ui/core';
import React from 'react';
import { SectionTitle } from '../../pages';
import PostCard from './postCard';

const RelatedPosts = ({ posts }) => {
  return (
    <>
      <SectionTitle>Related Posts</SectionTitle>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item sm={6} md={4} key={post.id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RelatedPosts;
