import React, { ReactElement } from 'react';
import Contact from '../components/sections/contact';
import Intro from '../components/sections/intro';

function Index(): ReactElement {
  return (
    <>
      <Intro />
      <Contact />
    </>
  );
}

export default Index;
