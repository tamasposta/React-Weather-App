import styled from "styled-components";

export const StyledMainWeatherData = styled.div`
    display:flex;
    flex-flow: column nowrap;
    border-radius: ${({ theme }) => theme.border.brradius};
    border: ${({ theme }) => theme.border.brwhite}
    width:25%;
    background-color: ${({ theme }) => theme.colors.blockbg};
    min-height: 500px;
    align-items: center;
    padding: 20px 10px;

    div {
        width: 100%
    }

    img {
        width:100px;
    }

    form {
        padding: 0 10px;
    }

    form input, button {
        width:100%;
        background: ${({ theme }) => theme.colors.whitetp};
        border: ${({ theme }) => theme.border.brwhite};
        border-radius: ${({ theme }) => theme.border.brradius};
        height: 40px;
        color:white;
        font-family: 'Fira Sans', sans-serif;
        font-size: 15px;
        padding:0 10px;
    }

    form input:focus-visible {
        background: ${({ theme }) => theme.colors.blockbg};
        outline: none;
        text-align:center;
    }

    button {
        background: rgba(200, 200, 100, 0.6);
        transition: 0.5s ease-out;
        font-weight: 600;
    }

    button:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    ::placeholder {
        color:white;
        text-align: center;
    }

    form button {
        margin-top:10px
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        padding: 20px 0;
      }
`