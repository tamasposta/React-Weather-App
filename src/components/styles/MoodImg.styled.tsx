import styled from "styled-components";

export const StyledMoodImg = styled.img`
    width: 25%;
    max-height: 150px;

    @media(max-width: ${({theme})  => theme.mobile}) {
        width: 50%
      }
`