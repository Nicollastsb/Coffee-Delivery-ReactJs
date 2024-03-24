import styled from "styled-components";
import { mixins } from "../../Styles/mixins";

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 2rem 10rem 2rem 10rem;
    max-width: 90rem;
`;

export const SuccessTitleContainer = styled.div`
    p:nth-of-type(1){
        ${mixins.fonts.titleL}
        color: ${(props) => props.theme['yellowDark']};
    }
    p:nth-of-type(2){
        ${mixins.fonts.textL}
    }
`

export const SuccessCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6.375rem;
    >div{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        padding: 2.5rem;
        border: 1px solid ${(props) => props.theme['baseButton']};
        border-radius: 6px 36px 6px 36px;
        width: 32.875rem;
        div:nth-of-type(1){          
            >svg {
                background-color:  ${(props) => props.theme['purple']};
                color:  ${(props) => props.theme['background']};
            }
        }
        div:nth-of-type(2){          
            >svg {
                background-color:  ${(props) => props.theme['yellow']};
                color:  ${(props) => props.theme['background']};
            }
        }
        div:nth-of-type(3){          
            >svg {
                background-color:  ${(props) => props.theme['yellowDark']};
                color:  ${(props) => props.theme['background']};
            }
        }
    }
`

export const SuccessTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;

    >div{
        display: flex;
        flex-direction: column;
        >p{
            margin-bottom: 0%;;
        }
    }
    >svg {
        padding: 8px;
        border-radius: 999px;
    }
`