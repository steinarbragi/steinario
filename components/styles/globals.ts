import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Aleo;
    color: #ccc;
  }
  a {
    color: #4be6ff;
  }
  h1,h2,h3,h4, .MuiButton-label {
    font-family: "Oswald";
    color: #fff;
  }
  pre, code {
    font-family: "Roboto Mono";
  }
  .kg-bookmark-card {
    width: 100%;
    position: relative;
  }

  .kg-bookmark-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      color: currentColor;
      font-family: inherit;
      text-decoration: none;
      border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .kg-bookmark-container:hover {
      text-decoration: none;
  }

  .kg-bookmark-content {
      flex-basis: 0;
      flex-grow: 999;
      padding: 20px;
      order: 1;
  }

  .kg-bookmark-title {
      font-weight: 600;
  }

  .kg-bookmark-metadata,
  .kg-bookmark-description {
      margin-top: .5em;
  }

  .kg-bookmark-metadata {
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }

  .kg-bookmark-description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
  }

  .kg-bookmark-icon {
      display: inline-block;
      width: 1em;
      height: 1em;
      vertical-align: text-bottom;
      margin-right: .5em;
      margin-bottom: .05em;
  }

  .kg-bookmark-thumbnail {
      display: flex;
      flex-basis: 24rem;
      flex-grow: 1;
  }

  .kg-bookmark-thumbnail img {
      width: 100%;
      height: 180px;
      vertical-align: bottom;
      object-fit: cover;
  }

  .kg-bookmark-author {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }

  .kg-bookmark-publisher::before {
      content: "•";
      margin: 0 .5em;
  }
`;

export default GlobalStyle;
