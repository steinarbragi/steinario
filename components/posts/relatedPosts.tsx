import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';
import PostCard from './postCard';

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  margin: 48px 0px 16px;
`;

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
