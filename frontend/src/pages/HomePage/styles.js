import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    height: ${props => props.visibleScroll === true ? '100vh' : 'auto'};
    display: flex;
    flex-direction: column;
    overflow: ${props => props.visibleScroll === true ? 'hidden' : 'visible'};
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`

export const TextAndButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    h2 {
        font-family: 'Sigmar One', cursive;
        font-size: 2rem;
        color: #fff;
    }
`

export const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom: 1rem;
    overflow: hidden;
`