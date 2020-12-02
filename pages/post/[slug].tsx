/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { Layout } from '../../components/layout';
import {
  getPostBySlug,
  getAllPosts,
  getRelatedPosts,
} from '../../utils/ghost/api';
import getResponsiveImageSizes from '../../utils/getResponsiveImage';
import RelatedPosts from '../../components/posts/relatedPosts';

export const PostContent = styled.div`
  padding: 40px;
  margin-top: 100px;
  ${(props) => props.theme.breakpoints.down('xs')} {
    padding: 70px 15px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    h1,
    h2,
    h3,
    h4,
    p {
      padding-left: 60px;
      padding-right: 60px;
    }
    ol,
    ul {
      padding-left: 100px;
      padding-right: 100px;
    }
  }
  main .MuiContainer-root {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  img {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  figure {
    margin: 0;
  }
  figure img {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  figcaption {
    margin-bottom: 30px;
    font-size: 20px;
    padding-top: 10px;
    font-style: italic;
  }
  h1,
  h2,
  h3,
  h4 {
    em {
      font-style: normal;
    }
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 34px;
  }
  h3 {
    font-size: 28px;
  }
  ul {
    font-size: 20px;
  }
  p {
    font-size: 22px;
    line-height: 30px;
  }
  blockquote {
    font-size: 24px;
    border-left: 3px solid #445384;
    padding-left: 30px;
  }
  ol,
  ul {
    font-size: 24px;
  }
`;

const Post = ({ post, relatedPosts }) => {
  let srcset;
  if (post.feature_image) srcset = getResponsiveImageSizes(post.feature_image);
  return (
    <Layout>
      <>
        <Container maxWidth="md">
          <PostContent>
            {post.feature_image && (
              <img
                loading="lazy"
                alt={post.title}
                sizes="(max-width: 1000px) 400px, 700px"
                srcSet={srcset}
                src={post.feature_image}
              />
            )}
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </PostContent>
        </Container>{' '}
        {relatedPosts && relatedPosts.length > 0 && (
          <Container maxWidth="lg">
            <RelatedPosts posts={relatedPosts} />
          </Container>
        )}
      </>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx: { params: { slug: string } }) {
  const { slug } = ctx.params;
  const post = await getPostBySlug(slug);
  let relatedPosts = null;
  if (post.primary_tag)
    relatedPosts = await getRelatedPosts(post.primary_tag.slug, post.id);
  return {
    props: { post, relatedPosts }, // will be passed to the page component as props
  };
}

export default Post;
