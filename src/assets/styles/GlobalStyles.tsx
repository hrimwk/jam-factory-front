import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap'); 

  ${reset} 

    *{
        box-sizing: border-box;
    }
    a {
	text-decoration: none;
}

    body{
      font-family: 'Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic', sans-serif;
      font-weight: 400;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }
    img{
      width: 100%;
    }
    .d-flex{
      display: flex;
    }
    .ft-12 {
    font-size: 12px;
  }
  .ft-14 {
    font-size: 14px;
  }
 .ml-10{
  margin-left: 10px;
 }
`;

export default GlobalStyles;
