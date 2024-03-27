import styled, { css } from "styled-components"

const borderSolidWhite = css`
    border: 2px solid white
`;

const borderRadius10px = css`
    border-radius: 10px
`;

export const StyledDailyForecastData = styled.div`
    ${borderSolidWhite}; // itt csak ez kell, nem kell kiírni, hogy border:
    ${borderRadius10px}; // alt + fellel lehet felvinni
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme?.colors?.blockbg};
    padding:10px;
    width:72.5%;
    min-height: 500px;

    @media(max-width: ${({ theme }) => theme?.breakpoints?.large}) {
        width:72%
    }

    @media(max-width: ${({ theme }) => theme?.breakpoints?.medium}) {
        width: 100%;
    }
`

export const CurrentDate = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid white;

    @media(max-width: ${({ theme }) => theme?.breakpoints?.medium}) {
        padding: 0;
        border-bottom: 2px solid white
    }
`

export const ForecastTable = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;

    @media(max-width: ${({ theme }) => theme?.breakpoints?.medium}) {
        display:flex;
        flex-flow: column wrap;
        gap:10px
    }
`

export const DailyForecastTableElement = styled.div`
    min-width:200px;

    @media(max-width: ${({ theme }) => theme?.breakpoints?.medium}) {
            display: flex;
            flex-flow: column;
            justify-content: center;
            border-bottom: 1px solid white;
            align-items: center
        }

    &:last-child {
        border-bottom: none
    }
`

export const DailyForecastDate = styled.h4`
    ${borderSolidWhite};
    ${borderRadius10px};
    padding:5px;
    background: ${({ theme }) => theme?.colors?.whitetp};
    color:white;
    width:100%;
`

export const WeatherIcon = styled.img`
    max-height:50px;

    @media(max-width: ${({ theme }) => theme?.breakpoints?.medium}) {
            max-height:100px;
            max-width: 100px;
    }
`

export const WindDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center
`

export const WindImg = styled.img`
    width:30px;

    @media(max-width: ${({ theme }) => theme?.breakpoints?.medium}) {
        width:50px;
        padding-right:10px
    }
`

