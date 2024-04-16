import styled, { css } from "styled-components"
import { ThemePropsType } from "../../utils/themes";

const borderSolidWhite = css`
    border: 2px solid white
`;

const borderRadius10px = css`
    border-radius: 10px
`;

export const StyledMainWeatherData = styled.div`
    ${borderRadius10px};
    ${borderSolidWhite};    
    display:flex;
    flex-flow: column nowrap;
    position: relative;
    border: ;
    width:25%;
    background-color: ${({ theme }) => theme?.colors?.blockbg};
    min-height: 500px;
    align-items: center;
    padding: 20px 10px;

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
        min-height:500px;
    }

    .cityForm {
        padding: 0 10px;
    }

    .cityForm {
        ${borderSolidWhite};
        ${borderRadius10px};
        width:100%;
        background: ${({ theme }) => theme?.colors?.whitetp};
        height: 40px;
        color:white;
        font-family: 'Fira Sans', sans-serif;
        font-size: 15px;
        padding:0 10px;
    }

    .cityForm {
        background: ${({ theme }) => theme?.colors?.blockbg};
        outline: none;
        text-align:center;
    }
`

export const MainWeatherDataDiv = styled.div`
    width: 100%
`

export const ActualWeatherImg = styled.img`
    width:100px;
`

export const LocationH1 = styled.h1<ThemePropsType>`
    color: ${({ theme }:ThemePropsType) => theme?.colors?.white}
`

export const TempH3 = styled.h1<ThemePropsType>`
    color: ${({ theme }:ThemePropsType) => theme?.colors?.white}
`

export const SearchButton = styled.button`
    ${borderSolidWhite};
    ${borderRadius10px};
    width:100%;
    height: 40px;
    color:white;
    font-family: 'Fira Sans', sans-serif;
    font-size: 15px;
    padding:0 10px;
    background-color: rgba(200, 200, 100, 0.6);
    transition: 0.5s ease-out;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`

export const StyledSearchInput = styled.input`
    ${borderSolidWhite};
    ${borderRadius10px};
    width:100%;
    background: ${({ theme }) => theme?.colors?.whitetp};
    height: 40px;
    color:white;
    font-family: 'Fira Sans', sans-serif;
    font-size: 15px;
    padding:0 10px;
    text-align: center;

    &:focus {
        background: ${({ theme }) => theme?.colors?.blockbg};
        outline: none;
        text-align:center;
    }

    &::placeholder {
        color:white;
        text-align: center;
    }
`

export const SearchInputButtonContainer = styled.div`
    display:flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    right: 0;
    left: 0;
    padding: 0px 10px 10px 10px;
    gap:10px
`