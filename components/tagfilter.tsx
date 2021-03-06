import { Button, Grid } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const TagButton = styled(Button)`
  padding: 3px 10px;
  font-weight: bold;
`;

const Taglist = styled.ul`
  list-style: none;
  align-items: left;
  padding-left: 0px;
  margin: 0;
  li {
    display: inline;
    margin: 5px;
  }
`;

const TagFilter = ({ allTags, fullTag }) => {
  return (
    <>
      <Grid item sm={9}>
        <Taglist>
          <li>
            <Link href="/tag/news" passHref>
              <TagButton
                variant={fullTag.slug === 'news' ? 'contained' : 'outlined'}
                color="secondary"
              >
                All
              </TagButton>
            </Link>
          </li>
          {allTags &&
            allTags.map((singleTag) => (
              <li key={singleTag.id}>
                <Link href={`/tag/${singleTag.slug}`} passHref>
                  <TagButton
                    color="secondary"
                    variant={
                      singleTag.slug === fullTag.slug ? 'contained' : 'outlined'
                    }
                  >
                    {singleTag.name}
                  </TagButton>
                </Link>
              </li>
            ))}
        </Taglist>
      </Grid>
    </>
  );
};

export default TagFilter;
