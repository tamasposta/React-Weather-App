import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
    box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.body};
        padding:10px;
        text-align: center;
        display:block;
        font-family: Poppins, Arial;
      }
      
    p, h1, h2, h3, h4, h5, h6 {
    color:white
    }
      
    .main-container {
    text-align: center
    }
`

export default GlobalStyles