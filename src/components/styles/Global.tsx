import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');


    * {
    box-sizing: border-box;
    }

    body {
        background-image: url("./src/images/darkmoon.jpg");
        background-size: cover;
        background-position: center;
        padding:10px;
        text-align: center;
        display:block;
        font-family: 'Fira Sans', sans-serif;
      }
      
    p, h1, h2, h3, h4, h5, h6 {
    color:white
    }
      
    .mainContainer {
    display:flex;
    flex-flow: row wrap;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    min-height:90vh;
    }

    @media(max-width: ${({theme})  => theme.mobile}) {
      .mainContainer {
        flex-direction: column;
      }

      body {
        background-image: url("./src/images/darkmoon-mobile.jpg");
        background-position:left;
      }
    }
`

export default GlobalStyles