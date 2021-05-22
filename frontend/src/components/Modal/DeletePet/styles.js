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
    height: 28%;
    background-color: #fff;
    border-radius: 4px;

    h2 {
        font-family: 'Sigmar One', cursive;
        margin: 0;
        padding: 1rem;
        color: #2088d8;
    }
`

export const Text = styled.div`
    margin-left: 3rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 2rem;
`