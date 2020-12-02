import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const DarkBluePaper = styled(Paper)`
  background-color: ${(props) => props.theme.palette.primary.dark};
  color: ${(props) => props.theme.palette.text.secondary};
  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.palette.text.primary};
  }
  line-height: 1.3;
`;

export default DarkBluePaper;
