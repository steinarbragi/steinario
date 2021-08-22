import React, { ReactElement } from 'react';
import Contact from '../components/sections/contact';
import Hero from '../components/sections/hero';
import Intro from '../components/sections/intro';
import Layout from '../components/layout/layout';

function Index(): ReactElement {
  return (
    <Layout>
      <>
        <Intro />

        <Contact />
      </>
    </Layout>
  );
}

export default Index;
