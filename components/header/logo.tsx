import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.breakpoints.only('xs')} {
    img {
      position: absolute;
      width: 100%;
      height: auto;
      left: 0;
      right: 0;
      top: 0;
    }
  }
`;

export default function Logo(): ReactElement {
  return (
    <StyledLogo>
      <h1>
        <Link passHref href="/">
          <a>
            <img
              srcSet="/img/logo.png 1x, /img/logo@2x.png 2x, /img/logo@3x.png 3x"
              alt="Create Starborne Account"
              src="/img/logo.png"
            />
          </a>
        </Link>
      </h1>
    </StyledLogo>
  );
}
