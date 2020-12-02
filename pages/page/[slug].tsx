/* eslint-disable react/no-danger */
import React from 'react';
import { Container } from '@material-ui/core';
import { Layout } from '../../components/layout';
import { getPageSlugs, getPageBySlug } from '../../utils/ghost/api';
import getResponsiveImageSizes from '../../utils/getResponsiveImage';
import { PostContent } from '../post/[slug]';

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
