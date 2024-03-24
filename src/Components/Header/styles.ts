import styled from "styled-components";
import { mixins } from "../../Styles/mixins";

export const HeaderContainer = styled.header`
    width: 90rem;
    margin: 0 auto 0 auto;
    >div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2rem 10rem 2rem 10rem;
    
        nav {
            display: flex;
            gap: 0.75rem;
        }
    }
`;

export const BaseButtonLinkHeader = styled.div`
    height: 2.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LocationHeaderButtonLink = styled(BaseButtonLinkHeader)`
    background-color: ${(props) => props.theme['purpleLight']};
    color: ${(props) => props.theme['purpleDark']};
    border-radius: 6px;
    
    padding: 0.5rem;
    gap: 0.25rem;
`

export const CartShopHeader = styled.div`
    display: flex;
    flex-direction: row;
    
    >a {
        height: 2.375rem;
        display: flex;
        justify-content: center;
        align-items: center;
    
        background-color: ${(props) => props.theme['yellowLight']};
        color: ${(props) => props.theme['yellowDark']};
    
        border-radius: 6px;
        padding: 0.5rem;        
    }
    >div{
        background-color: ${(props) => props.theme['yellowDark']};
        width: 20px;
        height: 20px;    
        margin-left: -11px;
        margin-top: -8px;
        border-radius: 1000px;
        color: white;
        ${mixins.fonts.textXS}
        
        display: flex;
        align-items: center;
        justify-content: center;

    }
`;