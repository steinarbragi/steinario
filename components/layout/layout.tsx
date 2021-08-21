import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

type LayoutProps = {
  children: PropTypes.ReactElementLike;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Steinar.io</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
