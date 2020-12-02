/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import getResponsiveImageSizes from '../../utils/getResponsiveImage';

const FeaturedImage = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  && {
    height: 288px;
  }
`;

const FeaturedText = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;

  h3 {
    margin-bottom: 0px;
    font-size: 30px;
    padding: 10px 32px 00px;
  }
  &.roadmap {
    text-align: center;

    h3 {
      font-size: 26px;
    }
  }
`;

const Excerpt = styled.p`
  margin: 0 0 30px 0;
  padding: 0px 32px 0px;
  font-size: 18px;
  color: rgba(215, 224, 240, 0.8);
  font-weight: 600;
`;

const OpacityGradient = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(12, 16, 32, 0) 0%,
    rgba(12, 16, 32, 0.5) 46.52%,
    #0c1020 100%
  );
`;

const FeaturedCard = ({ post, noExcerpt = false, className = '' }) => {
  let srcset;
  if (post && post.feature_image)
    srcset = getResponsiveImageSizes(post.feature_image);
  return (
    <div>
      <OpacityGradient />

      <FeaturedImage
        loading="lazy"
        alt={post.title}
        sizes="(max-width: 1000px) 300px 600px 1000px 2000px"
        srcSet={srcset}
        src={post.feature_image}
      />

      <Link href={`/page/${post.slug}`}>
        <a>
          <FeaturedText className={className}>
            <h3>{post.title}</h3>
            {post.excerpt && !noExcerpt && (
              <Excerpt>{`${post.excerpt.substring(0, 70)}...`}</Excerpt>
            )}
          </FeaturedText>
        </a>
      </Link>
    </div>
  );
};

export default FeaturedCard;
