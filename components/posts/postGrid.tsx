import React from 'react';
import { Grid } from '@material-ui/core';
import PostCard from './postCard';

const PostGrid = ({ posts, searchTerm, filteredResults }) => {
  return (
    <>
      <Grid container spacing={4}>
        {!searchTerm &&
          posts &&
          posts.map((post) => (
            <Grid key={post.id} item xs={12} md={4} sm={6}>
              <PostCard post={post} />
            </Grid>
          ))}
        {!!searchTerm &&
          filteredResults &&
          filteredResults.map((post) => (
            <Grid key={post.id} item xs={12} md={4} sm={6}>
              <PostCard post={post} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default PostGrid;
