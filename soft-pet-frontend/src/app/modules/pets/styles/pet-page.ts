import styled from "styled-components";
import theme from "../../chore/theme";

export const PageContent = styled.div`
    margin: 3rem;
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 3rem 0 2rem 0;
    height: 3rem;

    @media screen and (max-width: 600px) {
        display: inline;
        padding: 1rem;
        
        &>button {
            margin-top: 1rem;
        }
    }
`

export const Main = styled.main`

`

export const CardContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 22rem));
`

export const PageSelector = styled.div`
    display: flex;
    align-items: center;

    position: absolute;
    bottom: 5.5rem;
    right: 8rem;

    @media screen and (max-width: 600px){
        position: initial;
        margin-top: 3rem;
        margin-left: calc(100% / 3);
    }
`