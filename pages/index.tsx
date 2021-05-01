import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Layout } from '../components/layout';

const IndexContainer = styled(Container)`
  margin-top: 100px;
`;

function Index(): ReactElement {
  return (
    <Layout>
      <>
        <IndexContainer maxWidth="lg">
          <h1>Steinar Bragi Sigurðarson</h1>
          <h2>Web and Mobile Developer</h2>
          <Button href="/cv.pdf" color="secondary" variant="contained">
            Download CV
          </Button>
        </IndexContainer>
      </>
    </Layout>
  );
}

export default Index;
