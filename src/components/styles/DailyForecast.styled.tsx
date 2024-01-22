import styled from "styled-components";

export const StyledDailyFC = styled.div`
    display: flex;
    flex-direction: column;
    border: ${({ theme }) => theme.border.brwhite};
    border-radius: ${({ theme }) => theme.border.brradius};
    background-color: ${({ theme }) => theme.colors.blockbg};
    padding:10px;
    width:73.5%;

    #daily-forecast-table {
        display:flex;
        flex-flow: row wrap;
        justify-content: space-between; 
    }

    #current-date {
        display: flex;
        justify-content: space-between;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;

        #daily-forecast-table {
            display:flex;
            flex-flow: column wrap;
        }

        .daily-forecast-table-element {
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            border-bottom: 1px solid white;
        }
    }
`