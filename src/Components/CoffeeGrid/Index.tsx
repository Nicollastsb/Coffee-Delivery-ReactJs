import { useEffect, useReducer } from "react";
import { CoffeeGridContainer, CoffeeGridItem, CoffeeGridTitle, CoffeeGridContent, CoffeTag, CoffeTitle, CoffeDescription, CoffeeValueQuantCart, CoffeePrice, CoffeeQuantity, CoffeeQuantityButton, BuyCoffeeButton } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useCart } from "../Hooks/useCart";
import { coffeGridReducer } from "../../Reducers/coffeeGrid/reducer";
import { addOneQuantity, removeOneQuantity } from "../../Reducers/coffeeGrid/action";
import { coffeeArray } from '../../../data.json'
import { Coffee } from "../Contexts/SaleProvider";
import Arabe  from "../../Assets/Arabe.svg"
import CafeComLeite  from "../../Assets/CafeComLeite.svg"
import Capuccino  from "../../Assets/Capuccino.svg"
import ChocolateQuente  from "../../Assets/ChocolateQuente.svg"
import Cubano  from "../../Assets/Cubano.svg"
import ExpressoAmericano  from "../../Assets/ExpressoAmericano.svg"
import ExpressoCremoso  from "../../Assets/ExpressoCremoso.svg"
import ExpressoGelado  from "../../Assets/ExpressoGelado.svg"
import ExpressoTradicional  from "../../Assets/ExpressoTradicional.svg"
import Havaiano  from "../../Assets/Havaiano.svg"
import Irlandes  from "../../Assets/Irlandes.svg"
import Latte  from "../../Assets/Latte.svg"
import Macchiato  from "../../Assets/Macchiato.svg"
import Mocaccino  from "../../Assets/Mocaccino.svg"

export function CoffeeGrid() {
    const [coffees, dispatch] = useReducer(coffeGridReducer, [],
        () => {
            // const storedStateAsJson = localStorage.getItem(
            //     'coffe-delivery-array-coffee-3.0.0',
            // )
            // if(storedStateAsJson)
            //     return JSON.parse(storedStateAsJson)

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
    
    let urlCoffeeImage = "";
    function setUrl (coffeeUrl: string): string{
        if(coffeeUrl.includes("Arabe"))
        return Arabe;
        if(coffeeUrl.includes("CafeComLeite"))
        return CafeComLeite;
        if(coffeeUrl.includes("Capuccino"))
        return Capuccino;
        if(coffeeUrl.includes("ChocolateQuente"))
        return ChocolateQuente;
        if(coffeeUrl.includes("Cubano"))
        return Cubano;
        if(coffeeUrl.includes("ExpressoAmericano"))
        return ExpressoAmericano;
        if(coffeeUrl.includes("ExpressoCremoso"))
        return ExpressoCremoso;
        if(coffeeUrl.includes("ExpressoGelado"))
        return ExpressoGelado;
        if(coffeeUrl.includes("ExpressoTradicional"))
        return ExpressoTradicional;
        if(coffeeUrl.includes("Havaiano"))
        return Havaiano;
        if(coffeeUrl.includes("Irlandes"))
        return Irlandes;
        if(coffeeUrl.includes("Latte"))
        return Latte;
        if(coffeeUrl.includes("Macchiato"))
        return Macchiato;
        if(coffeeUrl.includes("Mocaccino"))
        return Mocaccino;
        
        return "";
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
                        urlCoffeeImage = setUrl(coffeeItem.url);
                        return (
                        <CoffeeGridItem key={coffeeItem.id}>          
                            <div>                    
                                <img src={urlCoffeeImage} alt="" />
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
  