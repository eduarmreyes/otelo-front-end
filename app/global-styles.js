import { injectGlobal } from 'styled-components';

import 'normalize.css'; // Note this

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Graphik LC Web';
    src: url('Graphik-Semibold-Web.eot');
    src: url('Graphik-Semibold-Web.eot?#iefix') format('embedded-opentype');
    font-weight:  600;
    font-style:   normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Graphik Web';
    src: url('Graphik-Regular-Web.eot');
    src: url('Graphik-Regular-Web.eot?#iefix') format('embedded-opentype');
    font-weight:  400;
    font-style:   normal;
    font-stretch: normal;
  }

  html,
  body {
    color: #187aff;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Graphik Web', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Graphik LC Web', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;
