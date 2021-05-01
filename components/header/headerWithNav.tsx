import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { AppBar, Toolbar, useScrollTrigger, Slide } from '@material-ui/core';

const Logo = styled.a`
  flex: 1;
  margin-top: 6px;
  h1 {
    color: ${(props) => props.theme.palette.secondary.contrastText};
  }
  text-transform: uppercase;
  text-decoration: none;
  margin: 0;
  margin-top: -5px;
`;

const MainNav = styled(AppBar)`
  height: 60px;
  .MuiButton-label {
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.secondary.contrastText};
  }
`;

export default function Header(): ReactElement {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <MainNav color="secondary">
        <Toolbar>
          <Link passHref href="/">
            <Logo>
              <h1>Steinar.io</h1>
            </Logo>
          </Link>
        </Toolbar>
      </MainNav>
    </Slide>
  );
}
