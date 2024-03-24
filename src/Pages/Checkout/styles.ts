import styled from "styled-components";
import { mixins } from "../../Styles/mixins";
import { NavLink } from "react-router-dom";

export const CoffeeDeliveryChecoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 2rem 10rem 2rem 10rem;
    max-width: 90rem;
    gap:32px;
`;

export const CoffeeChecoutContainer = styled.div`
    background-color: ${(props) => props.theme['baseCard']};
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    padding: 2.5rem;
`

export const CoffeeChecoutAddress = styled(CoffeeChecoutContainer)`
    border-radius: 6px;
`;

export const CoffeeChecoutTypePayment = styled(CoffeeChecoutContainer)`
    border-radius: 6px;
`;

export const CoffeeChecoutHeaderAddress = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0 0.5rem;
    padding-bottom: 1rem;

    >svg {
        color: ${(props) => props.theme['yellowDark']};
    }
    >div {        
        display: flex;
        flex-direction: column;
        gap: 2px;
        p{
            margin-bottom: 0px;
        }
        p:nth-of-type(1){
            ${mixins.fonts.textM}
        }
        p:nth-of-type(2){
            ${mixins.fonts.textS}
        }
    }
`;

export const CoffeeChecoutTotalPayment = styled.div`
    margin-top: 1rem;
    background-color: ${(props) => props.theme['baseCard']};
    display: flex;
    flex-direction: column;
    gap: 0 0.5rem;
    margin-bottom: 0.75rem;
    padding: 2.5rem;
    width: 28rem;
    border-radius: 2% 10% 2% 10%;

    div:first-child{
    }
`;

export const CoffeeCheckoutTitle = styled.span`
    ${mixins.fonts.titleXS}
`;

export const CoffeeCheckoutFormAddress = styled.form`
  >div >div {
    padding: 10px 0 10px 0;
  }
`;

export const CoffeeCheckoutInputDelivery = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['baseButton']};
    border-radius: 6px;
    background-color: ${(props) => props.theme['baseInput']};

    transition: all 0.2s;
`;

export const CoffeeCheckoutCardPaymentType = styled.button`
    border: 1px solid ${(props) => props.theme['baseButton']};
    border-radius: 6px;
    background-color: ${(props) => props.theme['baseInput']};
    padding: 16px;
    gap: 0.75rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    >svg{
        color: ${(props) => props.theme['purple']};
    }

    >span{
        ${mixins.fonts.buttonM}
    }
    
    &:hover {
        background-color: ${(props) => props.theme['baseHover']};
    }
    
    &.selected {
        background-color: ${(props) => props.theme['purpleLight']};
        border: 1px solid ${(props) => props.theme['purple']};
    }

`;

export const CoffeeChecoutPaymentContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0 0.5rem;
    
    >div {
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        ${mixins.fonts.buttonM}
        
        &:hover {
            background-color: ${(props) => props.theme['baseHover']};
        }
        
        &[data-state='true'] {
            background-color: ${(props) => props.theme['purpleLight']};
            border-color: ${(props) => props.theme['purple']};
        }

        >svg {
            color: ${(props) => props.theme['purple']};
        }
    }
`;

export const CoffeeInShoppingCart = styled.div`
    display: flex;
    flex-direction: row;
    gap:1.25rem;    
    padding-bottom: 1.5rem;

    >div >img {
        width: 4rem;
    }
    
    div:nth-of-type(2){
        display: flex;
        flex-direction: column;
        ${mixins.fonts.textM}
        gap:0.5rem;

        div:nth-of-type(2){
            display: flex;
            flex-direction: row;
        }
    }
`;

export const RemoveCoffeeButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px;
    background-color: ${(props) => props.theme['baseButton']};
    padding: 0.5rem;
    border-radius: 0.625rem;   
    gap: 4px;

    &:hover{
        background-color: ${(props) => props.theme['baseHover']};
    }

    >span {
        ${mixins.fonts.buttonM}
    }

    >svg {
        cursor: pointer;
        color: ${(props) => props.theme['purple']};
    }
    >svg:hover{
        cursor: pointer;
        color: ${(props) => props.theme['purpleDark']};
    }
`;

export const CoffeePrice = styled.div`
    ${mixins.fonts.textM}
    font-weight: bold;
`;

export const TotalCoffeePrice = styled.div`
    display: flex;
    flex-direction: column;    
    ${mixins.fonts.textS}
    gap: 0.75rem;
    padding-bottom: 1.5rem;
    >div{
        display: flex;
        flex-direction: row;   
        justify-content: space-between; 
    }

    div:last-child{        
        ${mixins.fonts.titleS}
    }
`;


export const ButtonConfirmPayment = styled(NavLink)`
    text-decoration: none;
    >button{
        display: flex;
        flex-direction: column;    
        align-items: center;
        justify-content: center;
        ${mixins.fonts.buttonG}
        background-color: ${(props) => props.theme['yellow']};
        color: ${(props) => props.theme['white']};
        width: 100%;
        height: 2.875rem;
        border: 0;
    
        text-decoration: none;
        border-color: ${(props) => props.theme['white']};    
        border-radius: 2% 2% 2% 2%;
        &:disabled{            
            background-color: #cccccc;
            color: #666666;
            border: 0;
        }
        &:hover:enabled{            
            background-color:  ${(props) => props.theme['yellowDark']};
            color: ${(props) => props.theme['white']};
            border: 0;
        }
    }
`;