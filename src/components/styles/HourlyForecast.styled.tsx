import styled from "styled-components";

export const StyledHourlyFC = styled.div`
    display: flex;
    flex-direction: column;
    width: 73.5%;
    border: ${({theme}) => theme.border.brwhite};
    border-radius: ${({theme}) => theme.border.brradius};
    background-color: ${({theme}) => theme.colors.blockbg};
    height:400px;
    padding:10px;

    #hourly-forecast-upper {
        display: flex;
        justify-content: space-between;
    }

    #hourly-forecast-lower {
        display:flex;
        flex-flow: row nowrap;
        overflow-y:hidden;
        overflow-x: auto;
        gap:10px;
        height:100%;
        align-items: center
    }


    @media(max-width: ${({theme})  => theme.mobile}) {
        width: 100%;
        height: 100%;        
      }
`