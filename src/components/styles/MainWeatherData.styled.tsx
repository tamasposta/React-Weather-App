import styled from "styled-components";

export const StyledMainWeatherData = styled.div`
    display:flex;
    flex-flow: column nowrap;
    border-radius: ${({theme}) => theme.border.brradius};
    border: ${({theme}) => theme.border.brwhite}
    width:25%;
    background-color: ${({theme}) => theme.colors.blockbg};
    min-height: 430px;
    align-items: center;

    img {
        width:100px;
        padding-top:20px;
    }

    @media(max-width: ${({theme})  => theme.mobile}) {
        width: 100%
      }
`