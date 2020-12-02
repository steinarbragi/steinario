import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';

const GradientFade = styled.div`
  background: linear-gradient(360deg, #161b2e 2.61%, rgba(22, 27, 46, 0) 100%);
  height: 220px;
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
`;

const HeroBanner = styled(Grid)`
  margin-bottom: -220px;
`;

const HeroContent = () => {
  return (
    <HeroBanner
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <GradientFade />
    </HeroBanner>
  );
};

export default function Hero(): ReactElement {
  return (
    <HeroBanner
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <ParallaxBanner
        layers={[
          {
            image: '/img/doom-dos-code.jpg',
            amount: 0.7,
            expanded: false,
            props: {
              style: { top: '-140px' },
            },
          },
          {
            children: <HeroContent />,
            amount: 0,
            props: {
              style: {
                padding: '50px 0 220px',
              },
            },
          },
        ]}
        style={{
          height: '600px',
        }}
      />
    </HeroBanner>
  );
}
