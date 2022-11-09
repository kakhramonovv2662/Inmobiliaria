import { createGlobalStyle } from 'styled-components';

// // IMPORT FONTS

import Golos from '@assets/fonts/Golos-Text-Regular.ttf';
import GolosMedium from '@assets/fonts/Golos-Text-Medium.ttf';
import GolosDemiBold from '@assets/fonts/Golos-Text-DemiBold.ttf';
import GolosBold from '@assets/fonts/Golos-Text-Bold.ttf';
import GolosBlack from '@assets/fonts/Golo-Text-Black.ttf';
import PhilosopherItalic from '@assets/fonts/philosopher-v19-latin-700italic.woff';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Golos';
    src: url(${Golos}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'GolosMedium';
    src: local('GolosMedium'),
      url(${GolosMedium}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'GolosDemiBold';
    src: url(${GolosDemiBold}) format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'GolosBold';
    src: url(${GolosBold}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'GolosBlack';
    src: url(${GolosBlack}) format('truetype');
    font-weight: 800;
  }

  @font-face {
    font-family: 'PhilosopherItalic';
    src: url(${PhilosopherItalic}) format('truetype');
    font-weight: 800;
  }

  body {
    padding: 0;
    background-color: #F1F5F9;
  }

  .ant-layout {
    padding: 0 !important;
    margin: 0 !important;
  }
`;
