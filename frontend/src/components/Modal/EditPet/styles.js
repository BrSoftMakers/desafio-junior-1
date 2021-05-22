import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.section`
    width: 40%;
    height: 70%;
    background-color: #fff;
    border-radius: 4px;

    h2 {
        font-family: 'Sigmar One', cursive;
        margin: 0;
        padding: 1rem;
        color: #2088d8;
    }
`

export const Inputs = styled.article`
    width: 100%;
    height: 78.3%;
    padding: 0 2rem;
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
`