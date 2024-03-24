import styled from "styled-components";
import { mixins } from "../../Styles/mixins";

export const CoffeeGridContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  box-sizing: border-box;
  max-width: 102rem;

  >div {
    margin: 2rem 10rem 2rem 10rem;
  }
`

export const CoffeeGridTitle = styled.h1`
  ${mixins.fonts.titleL}
  padding-top: 32px;
  padding-bottom: 54px;
`

export const CoffeeGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 2.5rem 2rem; /* Espaçamento entre os elementos */
  width: 100%; /* Largura da grade */
  height: 100%; /* Altura da grade */
`;

export const CoffeeGridItem = styled.div`
  background-color: ${(props) => props.theme['baseCard']};
  padding: 1.25rem;
  text-align: center;
  border-radius: 2% 10% 2% 10%;
  display: flex;
  flex-direction: column;

  >div >img{
    margin-top: -2.5rem;
  }
`;

export const CoffeTag = styled.div`
  gap: 0.25rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 0.5rem 0;

  >span{
    ${mixins.fonts.tag}
    background-color: ${(props) => props.theme['yellowLight']};
    color: ${(props) => props.theme['yellowDark']};
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border-radius: 6.25rem;    
  }
`;

export const CoffeTitle = styled.div`
  ${mixins.fonts.titleS}
  padding: 0.5rem 0 0.5rem 0;
`;

export const CoffeDescription = styled.div`
  ${mixins.fonts.textS}  
  color: ${(props) => props.theme['baseLabel']};
`;

export const CoffeeValueQuantCart = styled.div`    
  display: flex;
  align-items: center;
  justify-content: space-between;  
  margin-top: auto;
`;

export const CoffeePrice = styled.div`
  span:nth-of-type(1){
    ${mixins.fonts.textS}
  }
  span:nth-of-type(2){
    ${mixins.fonts.titleM}    
  }
`;

export const CoffeeQuantity = styled.div`    
  background-color: ${(props) => props.theme['baseButton']};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.625rem;    
  gap: 0.25rem;
  >svg {
    cursor: pointer;
    color: ${(props) => props.theme['purple']};
  }
  >svg:hover{
    cursor: pointer;
    color: ${(props) => props.theme['purpleDark']};
  }
`;

export const CoffeeQuantityButton = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;    
  gap: 0.5rem;
`;

export const BuyCoffeeButton = styled.button`
  background-color: ${(props) => props.theme['purple']};    
  color: ${(props) => props.theme['white']};
  padding: 0.5rem;
  border-radius: 6px;    
  border: 0;
  width: 38px;
  height: 38px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background-color: ${(props) => props.theme['purpleDark']};   
    border: 0;
  }
`;


