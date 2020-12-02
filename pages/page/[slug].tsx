/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { Layout } from '../../components/layout';
import { getPageSlugs, getPageBySlug } from '../../utils/ghost/api';
import getResponsiveImageSizes from '../../utils/getResponsiveImage';

const PostContent = styled.div`
  padding: 40px;
  margin-top: 100px;
  color: white;
  ${(props) => props.theme.breakpoints.down('xs')} {
    padding: 70px 15px;
  }
  img {
    width: 100%;
    height: auto;
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
    color: white;
  }
  h2 {
    font-size: 34px;
  }
  h3 {
    font-size: 24px;
  }
  ul {
    font-size: 20px;
    color: #b3c1e0;
  }
  p {
    font-size: 24px;
    color: #b3c1e0;
  }
`;

const Page = ({ page }) => {
  let srcset;
  if (page.feature_image) srcset = getResponsiveImageSizes(page.feature_image);
  return (
    <Layout>
      <>
        <Container maxWidth="md">
          <PostContent>
            {page.feature_image && (
              <img
                loading="lazy"
                alt={page.title}
                sizes="(max-width: 1000px) 400px, 700px"
                srcSet={srcset}
                src={page.feature_image}
              />
            )}
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </PostContent>
        </Container>
      </>
    </Layout>
  );
};

export async function getStaticPaths() {
  const pageSlugs = await getPageSlugs();
  const paths = [];
  pageSlugs.forEach((pageSlug) => {
    paths.push({ params: { slug: pageSlug.slug } });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx: {
  params: { tag: string; slug: string };
}) {
  const { slug } = ctx.params;
  const page = await getPageBySlug(slug);
  return {
    props: { page }, // will be passed to the page component as props
  };
}

export default Page;
