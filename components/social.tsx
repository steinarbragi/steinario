import React from 'react';
import styled from 'styled-components';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Box, IconButton } from '@material-ui/core';

const SocialIcons = styled(Box)`
  svg {
    height: 40px;
    color: white;
  }
  margin-top: 20px;
`;

const Social = () => (
  <SocialIcons>
    <IconButton title="Twitter" href="https://twitter.com/starbornegame">
      <Twitter />
    </IconButton>

    <IconButton title="Github" href="https://github.com/steinarbragi">
      <Github />
    </IconButton>
    <IconButton title="LinkedIn" href="https://linkedin.com/in/steinarbragi">
      <Linkedin />
    </IconButton>
  </SocialIcons>
);

export default Social;
