import styled from "styled-components"

const borderSolidWhite = "2px solid white"
const borderRadius10px = "10px"
// ezeket írjam át

export const StyledMainWeatherData = styled.div`
    display:flex;
    flex-flow: column nowrap;
    border-radius: ${borderRadius10px};
    border: ${borderSolidWhite};
    width:25%;
    background-color: ${({ theme }) => theme?.colors?.blockbg};
    min-height: 500px;
    align-items: center;
    padding: 20px 10px;

    .mainWeather {
        width: 100%
    }

    .actual-weather-img {
        width:100px;
    }

    .cityForm {
        padding: 0 10px;
    }

    .cityForm input, button {
        width:100%;
        background: ${({ theme }) => theme?.colors?.whitetp};
        border: ${borderSolidWhite};
        border-radius: ${borderRadius10px};
        height: 40px;
        color:white;
        font-family: 'Fira Sans', sans-serif;
        font-size: 15px;
        padding:0 10px;
    }

    .cityForm input:focus-visible {
        background: ${({ theme }) => theme?.colors?.blockbg};
        outline: none;
        text-align:center;
    }

    .formButton {
        background: rgba(200, 200, 100, 0.6);
        transition: 0.5s ease-out;
        font-weight: 600;
        margin-top:10px
    }

    .formButton:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    ::placeholder {
        color:white;
        text-align: center;
    }

    @media(max-width: ${({ theme }) => theme?.breakpoints?.xxlarge}) {
        min-height: 732px
      }

    @media(max-width: ${({ theme }) => theme?.breakpoints?.extralarge}) {
        min-height: 735px
      }    

    @media(max-width: ${({ theme }) => theme?.breakpoints?.large}) {
        min-height: 1025px
      }

    @media(max-width: ${({ theme }) => theme?.breakpoints?.medium}) {
        width: 100%;
        padding: 20px 0;
      }
`