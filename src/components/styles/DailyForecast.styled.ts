import styled, { css } from "styled-components"

const borderSolidWhite = css`
    border: 2px solid white
`;

const borderRadius10px = css`
    border-radius: 10px
`;

// itt kulcs értékpárokat definiálunk, nem csak értéket, stringet bármikor elronthatjuk
// így jelezné a VsCode is, ha elrontanánk

export const StyledDailyForecastData = styled.div`
    ${borderSolidWhite}; // itt csak ez kell, nem kell kiírni, hogy border:
    ${borderRadius10px}; // alt + fellel lehet felvinni
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.blockbg};
    padding:10px;
    width:72.5%;
    min-height: 500px;

    @media(max-width: ${({ theme }) => theme.breakpoints.large}) {
        width:72%
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 100%;
    }
`

export const CurrentDate = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid white;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding: 0;
        border-bottom: 2px solid white
    }
`

export const ForecastTable = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;

    .daily-forecast-table-element {
        min-width:200px;
    }

    .windImg {
        width:30px
    }

    .windDiv {
        display:flex;
        flex-direction: row;
        justify-content: center
    }

    .daily-forecast-img {
        max-height:50px;
    }

    .daily-forecast-date {
        ${borderSolidWhite};
        ${borderRadius10px};
        padding:5px;
        background: ${({theme}) => theme.colors.whitetp};
        color:white;
        width:100%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display:flex;
        flex-flow: column wrap;
        gap:10px

        .daily-forecast-table-element {
            display: flex;
            flex-flow: column;
            justify-content: center;
            border-bottom: 1px solid white;
            align-items: center
        }

        .daily-forecast-table-element:last-child {
            border-bottom: none
        }

        .daily-forecast-img {
            max-height:100px;
            max-width: 100px;
        }

        .windImg {
            width:50px;
            padding-right:10px
        }
    }
`