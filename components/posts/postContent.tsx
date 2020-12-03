import styled from 'styled-components';

const PostContent = styled.div`
  padding: 40px;
  margin-top: 100px;
  ${(props) => props.theme.breakpoints.down('xs')} {
    padding: 70px 15px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    h1,
    h2,
    h3,
    h4,
    p {
      padding-left: 60px;
      padding-right: 60px;
    }
    ol,
    ul {
      padding-left: 100px;
      padding-right: 100px;
    }
  }
  main .MuiContainer-root {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  figure {
    margin: 0;
  }
  figure .kg-image {
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  figcaption {
    margin-bottom: 30px;
    font-size: 20px;
    padding-top: 10px;
    font-style: italic;
  }
  h1,
  h2,
  h3,
  h4 {
    em {
      font-style: normal;
    }
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 34px;
  }
  h3 {
    font-size: 28px;
  }
  ul {
    font-size: 20px;
  }
  p {
    font-size: 22px;
    line-height: 30px;
  }
  blockquote {
    font-size: 24px;
    border-left: 3px solid #445384;
    padding-left: 30px;
  }
  ol,
  ul {
    font-size: 22px;
    line-height: 30px;
  }
  pre {
    overflow-x: auto;
    margin: 1.5em 0 3em;
    padding: 20px;
    max-width: 100%;
    border: 1px solid #000;
    color: #cfd2d3;
    font-size: 1.1rem;
    line-height: 1.2em;
    background: #0e1012;
    border-radius: 5px;
    code {
      color: #929296;
    }
  }
  pre[class*='language-'],
  code[class*='language-'] {
    font-family: 'Roboto Mono';
  }
  .kg-bookmark-icon img {
    width: 1em;
  }
  .kg-gallery-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .kg-gallery-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .kg-gallery-image img {
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .kg-gallery-row:not(:first-of-type) {
    margin: 0.75em 0 0 0;
  }

  .kg-gallery-image:not(:first-of-type) {
    margin: 0 0 0 0.75em;
  }

  .kg-gallery-card + .kg-image-card.kg-width-wide,
  .kg-gallery-card + .kg-gallery-card,
  .kg-image-card.kg-width-wide + .kg-gallery-card,
  .kg-image-card.kg-width-wide + .kg-image-card.kg-width-wide {
    margin: -2.25em 0 3em;
  }
`;

export default PostContent;
