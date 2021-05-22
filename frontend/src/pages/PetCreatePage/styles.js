import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BackButton = styled.div`
    position: absolute;
    right: 1rem;
    top: 0.8rem;
    font-family: 'Sigmar One', cursive;
    color: #2088d8;
    cursor: pointer;
`

export const Container = styled.section`
    width: 35%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.15rem 0;
    padding-bottom: 1.1rem;
    border-radius: 4px;

    h2 {
        margin: 1rem 0;
        font-family: 'Sigmar One', cursive;
        color: #2088d8;
    }
`

export const Inputs = styled.div`
    width: 90%;
    padding: 0 1rem;
`

export const ButtonSave = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`