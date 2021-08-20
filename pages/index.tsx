import React, { ReactElement } from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';

function Index(): ReactElement {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default Index;
