import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Layout } from '../components/layout';
import { getAllPosts } from '../utils/ghost/api';
import PostCard from '../components/posts/postCard';
import Hero from '../components/home/hero';

export const SectionTitle = styled.h2`
  color: #6d84ff;
  text-transform: uppercase;
  font-size: 20px;
  margin: 48px 0px 16px;
`;

const IndexContainer = styled(Container)`
  margin-top: 100px;
`;

function Index({ news }): ReactElement {
  const heroPost = news[0];
  const morePosts = news.slice(1);
  return (
    <Layout>
      <>
        <Hero />
        <IndexContainer maxWidth="lg">
          <SectionTitle>Latest News</SectionTitle>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12} sm={12}>
              <PostCard
                key={heroPost.id}
                post={heroPost}
                isHero
                className="heropost"
              />
            </Grid>
            {morePosts &&
              morePosts.map((post) => (
                <Grid key={post.id} item xs={12} md={4} sm={6}>
                  <PostCard post={post} />
                </Grid>
              ))}
          </Grid>
        </IndexContainer>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const news = await getAllPosts();
  return {
    props: { news },
  };
}

export default Index;
