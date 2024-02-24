import styled from "styled-components";
import theme from "../../../theme";

export const Card = styled.li`
    margin: 9px;
    width: 300px;

    @media screen and (max-width: 600px) {
        margin: .7rem 0;
    }
`

export const MainCard = styled.section`
    background: linear-gradient(${theme.gradients.firstGradient});
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 3px solid ${theme.colors.light};
    border-radius: 10px;
    padding: 10px 0;

    &:hover {
        border: 3px solid ${theme.colors.blue300};
    } 
`

export const CardSection = styled.section`

`

export const PetType = styled.div`

`

export const CardText = styled.div`
    display: flex;

    &>span{
      margin-left: .6rem;
    }
`
export const DropDown = styled.div`
    display: none;
    border: 3px solid ${theme.colors.blue300};
    border-radius: 10px;
    margin-top: 14px;
    position: absolute;
    width: 300px;
    box-shadow: 0px 0px 15px 10px #0056E233;

    &.dropDownActive {
        display: inline-block;
    }
`

export const DropDownMenu = styled.span`
    cursor: pointer;
    display: inline-block;
    
    &.rotate {
        transform: rotate(0.5turn);
    }
`
export const DropDownContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const DropDownText = styled.div`
    display: flex;
    align-self: center;
    width: calc(100% - 100px);
    margin: 4px 0;

    &>span {
        margin-left: 10px;
    }
`

export const DropDownSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 21px 0;
` 

export const DropDownButtonsArea = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;

    height: 120px;
`