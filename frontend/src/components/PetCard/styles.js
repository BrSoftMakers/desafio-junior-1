import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 30rem;
    height: 13.5rem;
    background: #fff;
    border-radius: 4px;
    display: flex;
    margin: 0.8rem;
    box-shadow: 5px 5px 8px;
`

export const PetImage = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 75%;
        height: 65%;
    }
`

export const PetInfos = styled.section`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #2088d8;

    p {
        margin: 0;
        padding: 2.5px 2px;
    }
`

export const Buttons = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
`
