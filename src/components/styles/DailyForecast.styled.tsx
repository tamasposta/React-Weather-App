import styled from "styled-components";

export const StyledDailyFC = styled.div`
    display: flex;
    flex-direction: column;
    border: ${({ theme }) => theme.border.brwhite};
    border-radius: ${({ theme }) => theme.border.brradius};
    background-color: ${({ theme }) => theme.colors.blockbg};
    padding:10px;
    width:72.5%;

    #daily-forecast-table {
        display:flex;
        flex-flow: row wrap;
        justify-content: space-between; 
    }

    #current-date {
        display: flex;
        justify-content: space-between;
    }

    .windImg {
        width:30px
    }

    .windDiv {
        display:flex;
        flex-direction: row
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;

        #daily-forecast-table {
            display:flex;
            flex-flow: column wrap;
            gap:0px
        }

        .daily-forecast-table-element {
            display: flex;
            flex-flow: column;
            justify-content: center;
            border-bottom: 1px solid white;
            align-items: center
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