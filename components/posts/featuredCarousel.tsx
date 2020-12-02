/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import Grid from '@material-ui/core/Grid';
import FeaturedCard from './featuredCard';
import { BlueCard } from './postCard';

const StyledCarousel = styled(Grid)`
  .react-multi-carousel-dot-list {
    ${(props) => props.theme.breakpoints.up('md')} {
      right: initial;
      left: 32px;
    }
    bottom: 20px;
  }
  .react-multi-carousel-dot button {
    height: 16px;
    width: 16px;
    color: white;
    border-color: rgba(255, 255, 255, 0.5);
    background-color: rgba(0, 0, 0, 0);
  }
  .react-multi-carousel-dot--active button {
    background-color: white;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const RightArrow = styled.button`
  position: absolute;
  right: 32px;
  border: none;
  background: url('/img/icon_chevron.svg') center top;
  border-radius: 0;
  min-height: 44px;
  min-width: 48px;
  ${(props) => props.theme.breakpoints.down('sm')} {
    display: none;
  }
  &:hover {
    background: url('/img/icon_chevron.svg') center center;
    cursor: pointer;
  }
  &:active {
    background: url('/img/icon_chevron.svg') center bottom;
  }
`;

const LeftArrow = styled(RightArrow)`
  transform: scaleX(-1);
  right: auto;
  left: 32px;
  background-color: 0;
`;

const FeaturedCarousel = ({ posts }) => {
  const responsive = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  return (
    <StyledCarousel item xs={12} sm={6} md={9}>
      <BlueCard square elevation={0}>
        <Carousel
          responsive={responsive}
          ssr
          showDots
          slidesToSlide={1}
          infinite
          containerClass="container-with-dots"
          deviceType=""
          customRightArrow={<RightArrow />}
          customLeftArrow={<LeftArrow />}
        >
          {posts &&
            posts.map((post) => <FeaturedCard key={post.id} post={post} />)}
        </Carousel>
      </BlueCard>
    </StyledCarousel>
  );
};

export default FeaturedCarousel;
