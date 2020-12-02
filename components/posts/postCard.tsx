/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import getResponsiveImageSizes from '../../utils/getResponsiveImage';

export const PostCardHeading = styled.h2`
  margin-top: 0px;
  cursor: pointer;
`;

export const BlueCard = styled(Paper)`
  background-color: ${(props) => props.theme.palette.primary.dark};
  color: ${(props) => props.theme.palette.text.secondary};
  line-height: 1.3;
  width: 100%;
  position: relative;
  border: 2px solid ${(props) => props.theme.palette.primary.light};
  .MuiCardContent-root {
    height: 220px;
    padding: 24px;
  }
  img {
    width: 100%;
    height: 250px;
    max-width: 100%;
    object-fit: cover;
    margin: 0;
    margin-bottom: -4px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  a::before {
    display: block;
    width: 100%;
  }
  h2 {
    font-size: 26px;
    margin-top: -20px;
    margin-bottom: 12px;
    line-height: 120%;
  }
  p {
    font-size: 18px;
    color: rgba(179, 193, 224, 1) !important;
    line-height: 150%;
  }
  span {
    font-size: 16px;
    font-weight: 600;
    color: rgba(149, 163, 203, 1);
    margin-left: 5px;
  }
  min-height: 100%;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0px 0px 24px rgba(63, 81, 181, 0.7);
  }
  &.heropost {
    text-align: left;
    ${(props) => props.theme.breakpoints.up('sm')} {
      .MuiCardContent-root {
        padding-right: 30px;
        margin-top: 30%;
      }
      img {
        /* width: 798px; */
        height: 448px;
      }
      h2 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      p {
        font-size: 18px;
        color: rgba(179, 193, 224, 1) !important;
      }
    }
  }
`;

export const Excerpt = styled.p`
  text-decoration: none;
`;

export const Tag = styled.a`
  font-size: 15px;
  text-transform: uppercase;
  padding: 4px 10px;
  background-color: ${(props) => props.theme.palette.primary.light};
  margin-right: 6px;
  display: inline-block;
  color: #d7e0f0;
  font-weight: 600;
  &:hover {
    background-color: #576dcf;
    color: #fff;
  }
  &:active {
    background-color: rgba(39, 53, 155, 1);
    color: #95a3cb;
  }
`;

export const DateField = styled.span`
  display: inline-block;
  margin-top: 5px;
`;

const PostCard = ({
  post,
  isHero = false,
  elevation = 0,
  square = true,
  className = '',
}) => {
  let srcset;

  if (post.feature_image) srcset = getResponsiveImageSizes(post.feature_image);

  const date = new Date(post.published_at);
  return (
    <BlueCard
      elevation={elevation}
      square={square}
      key={post.id}
      className={className}
    >
      <Grid container spacing={2}>
        <Grid item sm={isHero ? 7 : 12} xs={12}>
          {post.feature_image && (
            <Link href={`/post/${post.slug}`}>
              <a>
                <img
                  loading="lazy"
                  alt={post.title}
                  sizes="(max-width: 1000px) 400px, 700px"
                  srcSet={srcset}
                  src={post.feature_image}
                />
              </a>
            </Link>
          )}
        </Grid>
        <Grid item sm={isHero ? 5 : 12} xs={12}>
          <CardContent>
            <Link href={`/post/${post.slug}`}>
              <a>
                <PostCardHeading style={{ fontSize: isHero ? '28px' : '' }}>
                  {post.title}
                </PostCardHeading>
              </a>
            </Link>
            {post.tags.map(
              (postTag: { name: string; slug: string; id: string }) => (
                <Link key={postTag.id} href={`/tag/${postTag.slug}`} passHref>
                  <Tag>{postTag.name}</Tag>
                </Link>
              )
            )}
            <DateField>{moment(date).format('ddd, ll')}</DateField>

            <Excerpt>{`${post.excerpt.substring(0, 110)}...`}</Excerpt>
          </CardContent>
        </Grid>
      </Grid>
    </BlueCard>
  );
};

export default PostCard;
