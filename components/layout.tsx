import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Header from './header/headerWithNav';

const LayoutStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.main};
  min-height: 100vh;
`;

const Main = styled.main`
  ${LayoutStyle};
  ${(props) => props.theme.breakpoints.up('sm')} {
    ${(props) =>
      props.backgroundImage &&
      css`
        background: url(${props.backgroundImage}) center center no-repeat;
        background-attachment: fixed;
        background-size: cover;
      `}
  }
`;

type LayoutProps = {
  children: PropTypes.ReactElementLike;
  backgroundImage?: string;
  justifyContent?: string;
};

const Content = styled.div`
  position: relative;
  z-index: 2;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const BottomSpacer = styled.div`
  height: 50px;
  width: 100%;
`;

export const Layout: React.FC<LayoutProps> = ({
  backgroundImage = null,
  children,
  justifyContent = 'flex-start',
}) => {
  return (
    <>
      <Header />
      <Main style={{ justifyContent }} backgroundImage={backgroundImage}>
        <Content>
          <>{children}</>
        </Content>
        <BottomSpacer />
      </Main>
    </>
  );
};

export default Layout;
