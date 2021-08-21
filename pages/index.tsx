import React, { ReactElement } from 'react';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Layout from '../components/layout';

function Index(): ReactElement {
  return (
    <Layout>
      <>
        <Hero />
        <Contact />
      </>
    </Layout>
  );
}

export default Index;
