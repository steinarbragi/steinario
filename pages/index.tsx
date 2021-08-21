import React, { ReactElement } from 'react';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Intro from '../components/intro';
import Layout from '../components/layout';

function Index(): ReactElement {
  return (
    <Layout>
      <>
        <Intro />
        <Hero />
        <Contact />
      </>
    </Layout>
  );
}

export default Index;
