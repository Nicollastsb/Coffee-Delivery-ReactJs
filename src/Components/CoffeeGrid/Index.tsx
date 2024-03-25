import { useEffect, useReducer } from "react";
import { CoffeeGridContainer, CoffeeGridItem, CoffeeGridTitle, CoffeeGridContent, CoffeTag, CoffeTitle, CoffeDescription, CoffeeValueQuantCart, CoffeePrice, CoffeeQuantity, CoffeeQuantityButton, BuyCoffeeButton } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useCart } from "../Hooks/useCart";
import { coffeGridReducer } from "../../Reducers/coffeeGrid/reducer";
import { addOneQuantity, removeOneQuantity } from "../../Reducers/coffeeGrid/action";
import { coffeeArray } from '../../../data.json'
import { Coffee } from "../Contexts/SaleProvider";

export function CoffeeGrid() {
    const [coffees, dispatch] = useReducer(coffeGridReducer, [],
        () => {
            return coffeeArray
        });
    const { addCoffeesOnShoppintCartAction } = useCart()

    function changeQuantityCoffe(isPlus: boolean, coffee: Coffee){
        if(isPlus)
            dispatch(addOneQuantity(coffee.id))
        else{
            dispatch(removeOneQuantity(coffee.id))
        }
    }

    useEffect(() => {        
        const stateJSON = JSON.stringify(coffees)
        localStorage.setItem('coffe-delivery-array-coffee-3.0.0', stateJSON)
      }, [coffees])

    return (
        <CoffeeGridContent>
            <div>
                <CoffeeGridTitle>Nossos cafés</CoffeeGridTitle>
                <CoffeeGridContainer>
                    {coffees.map((coffeeItem) => {
                        return (
                        <CoffeeGridItem key={coffeeItem.id}>          
                            <div>                    
                                <img src={coffeeItem.url} alt="" />
                            </div>  
                            <CoffeTag>
                                {coffeeItem.tag.map((tagItem, index) => {
                                    return (
                                        <span key={index}>
                                            {tagItem}
                                        </span>
                                    )
                                })} 
                            </CoffeTag>
                            <CoffeTitle>
                                {coffeeItem.title}
                            </CoffeTitle>
                            <CoffeDescription>
                                {coffeeItem.description}
                            </CoffeDescription>
                            <CoffeeValueQuantCart>
                                <CoffeePrice>
                                    <span>R$</span> <span>{coffeeItem.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                                </CoffeePrice>

                                <CoffeeQuantityButton>
                                    <CoffeeQuantity>
                                        <Minus  weight="bold" onClick={()=>changeQuantityCoffe(false, coffeeItem)} size={14} />
                                        <span>{coffeeItem.quantity}</span>
                                        <Plus  weight="bold" onClick={()=>changeQuantityCoffe(true, coffeeItem)} size={14} />
                                    </CoffeeQuantity>

                                    <BuyCoffeeButton>
                                        <ShoppingCart size={32} onClick={()=>addCoffeesOnShoppintCartAction(coffeeItem)} weight="fill" />
                                    </BuyCoffeeButton>
                                </CoffeeQuantityButton>
                            </CoffeeValueQuantCart>
                        </CoffeeGridItem>
                        )
                    })}
                </CoffeeGridContainer>
            </div>
        </CoffeeGridContent>
    )
  }
  