import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    height: 6rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.article`
    font-family: 'Sigmar One', cursive;
    font-size: 2rem;
    color: #2088d8;
`

export const Logo = styled.article`
    width: 8rem;
    height: 8rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`