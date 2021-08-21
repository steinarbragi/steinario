import React, { ReactElement } from 'react';
import Hero from '../components/sections/hero';
import Intro from '../components/sections/intro';
import Layout from '../components/layout/layout';

function Index(): ReactElement {
  return (
    <Layout>
      <>
        <Intro />
        <Hero />
      </>
    </Layout>
  );
}

export default Index;
