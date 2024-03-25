import { useEffect, useReducer } from "react";
import { CoffeeGridContainer, CoffeeGridItem, CoffeeGridTitle, CoffeeGridContent, CoffeTag, CoffeTitle, CoffeDescription, CoffeeValueQuantCart, CoffeePrice, CoffeeQuantity, CoffeeQuantityButton, BuyCoffeeButton } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useCart } from "../Hooks/useCart";
import { coffeGridReducer } from "../../Reducers/coffeeGrid/reducer";
import { addOneQuantity, removeOneQuantity } from "../../Reducers/coffeeGrid/action";
//import { coffeeArray } from '../../../data.json'
import { Coffee } from "../Contexts/SaleProvider";
import ExpressoTradicional from "../../Assets/ExpressoTradicional.svg"
import ExpressoAmericano from "../../Assets/ExpressoAmericano.svg"
import ExpressoCremoso from "../../Assets/ExpressoCremoso.svg"
import ExpressoGelado from "../../Assets/ExpressoGelado.svg"
import CafeComLeite from "../../Assets/CafeComLeite.svg"
import Latte from "../../Assets/Latte.svg"
import Capuccino from "../../Assets/Capuccino.svg"
import Macchiato from "../../Assets/Macchiato.svg"
import Mocaccino from "../../Assets/Mocaccino.svg"
import ChocolateQuente from "../../Assets/ChocolateQuente.svg"
import Cubano from "../../Assets/Cubano.svg"
import Havaiano from "../../Assets/Havaiano.svg"
import Arabe from "../../Assets/Arabe.svg"
import Irlandes from "../../Assets/Irlandes.svg"

export function CoffeeGrid() {
    const coffeeArray: Coffee[] = [
        {
            id: "0",
            tag: ["TRADICIONAL"],
            title: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            price: 9.99,
            url: ExpressoTradicional,
            quantity: 0
        },
        {
            id: "1",
            tag: ["TRADICIONAL"],
            title: "Expresso Americano",
            description: "Expresso diluído, menos intenso que o tradicional",
            price: 9.99,
            url: ExpressoAmericano,
            quantity: 0
        },
        {
            id: "2",
            tag: ["TRADICIONAL"],
            title: "Expresso Cremoso",
            description: "Café expresso tradicional com espuma cremosa",
            price: 9.99,
            url: ExpressoCremoso,
            quantity: 0
        },
        {
            id: "3",
            tag: ["TRADICIONAL", "GELADO"],
            title: "Expresso Gelado",
            description: "Bebida preparada com café expresso e cubos de gelo",
            price: 9.99,
            url: ExpressoGelado,
            quantity: 0
        },
        {
            id: "4",
            tag: ["TRADICIONAL", "COM LEITE"],
            title: "Café com Leite",
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            price: 9.99,
            url: CafeComLeite,
            quantity: 0
        },
        {
            id: "5",
            tag: ["TRADICIONAL", "COM LEITE"],
            title: "Latte",
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: 9.99,
            url: Latte,
            quantity: 0
        },
        {
            id: "6",
            tag: ["TRADICIONAL", "COM LEITE"],
            title: "Capuccino",
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: 9.99,
            url: Capuccino,
            quantity: 0
        },
        {
            id: "7",
            tag: ["TRADICIONAL", "COM LEITE"],
            title: "Macchiato",
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            price: 9.99,
            url: Macchiato,
            quantity: 0
        },
        {
            id: "8",
            tag: ["TRADICIONAL", "COM LEITE"],
            title: "Mocaccino",
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: 9.99,
            url: Mocaccino,
            quantity: 0
        },
        {
            id: "9",
            tag: ["ESPECIAL", "COM LEITE"],
            title: "Chocolate Quente",
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: 9.99,
            url: ChocolateQuente,
            quantity: 0
        },
        {
            id: "10",
            tag: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
            title: "Cubano",
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: 9.99,
            url: Cubano,
            quantity: 0
        },
        {
            id: "11",
            tag: ["ESPECIAL"],
            title: "Havaiano",
            description: "bebida adocicada preparada com café e leite de coco",
            price: 9.99,
            url: Havaiano,
            quantity: 0
        },
        {
            id: "12",
            tag: ["ESPECIAL"],
            title: "Árabe",
            description: "Bebida preparada com grãos de café árabe e especiarias",
            price: 9.99,
            url: Arabe,
            quantity: 0
        },
        {
            id: "13",
            tag: ["ESPECIAL", "ALCOÓLICO"],
            title: "Irlandês",
            description: "Bebida a base de café, uisque irlandês, açúcar e chantily",
            price: 9.99,
            url: Irlandes,
            quantity: 0
        }
    ]
    
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
  