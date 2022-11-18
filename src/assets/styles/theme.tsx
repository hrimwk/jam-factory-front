import { DefaultTheme } from 'styled-components';

const colors = {
  mainBrown: '#7B5F3C',
  subBrown: '#a49b91',
  subIvory: '#ebe6d7',
  subGray: '#999690',
  darkGray: '#21211a',
  pointRed: '#9a131a',
};

const fontSize = {};

export type ColorsTypes = typeof colors;
// export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};
export default theme;
