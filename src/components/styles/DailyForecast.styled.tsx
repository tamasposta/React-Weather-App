import styled from "styled-components";

export const StyledDailyFC = styled.div`
    display: flex;
    flex-direction: column;
    border: ${({ theme }) => theme.border.brwhite};
    border-radius: ${({ theme }) => theme.border.brradius};
    background-color: ${({ theme }) => theme.colors.blockbg};
    padding:10px;
    width:72.5%;
    min-height: 500px;


    #daily-forecast-table {
        display:flex;
        flex-flow: row wrap;
        justify-content: space-around; 
    }

    .daily-forecast-table-element {
        min-width:200px;
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
        flex-direction: row;
        justify-content: center
    }

    img {
        max-height:50px;
    }

    .daily-forecast-date {
        border: ${({theme}) => theme.border.brwhite};
        border-radius: ${({theme}) => theme.border.brradius};
        padding:5px;
        background: ${({theme}) => theme.colors.whitetp};
        color:white;
        width:100%;
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