import { ReactNode, createContext, useReducer, useState } from "react"
import { SaleReducer } from "../../Reducers/Sale/Reducer"
import { addNewCoffeeAction, removeOneCoffeeAction, removeCoffeeAction } from "../../Reducers/Sale/actions"

interface SaleContextType {
    coffees: Coffee[]
    payment: Payment | undefined
    deliveryAddress: DeliveryAddress | undefined
    totalPrices: TotalPrices | undefined
    addCoffeesOnShoppintCartAction: (coffee: Coffee) => void
    addOneCoffeeOnShoppintCartAction: (coffee: Coffee) => void
    removeOneCoffee: (coffee: Coffee) => void
    removeCoffee: (coffee: Coffee) => void
    setCurrentPayment: (newPaymentType: PaymentType) => void
    setCurrentDeliveryAddress: (newDeliveryAddress: DeliveryAddress) => void
}
  
export enum PaymentType{
    CreditCard = 'Cartão de Crédito',
    DebitCard = 'Cartão de Débito',
    Money = 'Dinheiro'
}

export interface Payment{
    paymentType: PaymentType | null
}
    
export interface Coffee {
    id: string
    tag: string[]
    title: string
    description: string
    price: number
    url: string
    quantity: number
}  
  
export interface DeliveryAddress {
    cep: string
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
}
    
export interface TotalPrices {
    totalCoffees: number
    quantity: number
    deliveryFee: number
    total: number
}
  
export interface Sale {
    deliveryAddress: DeliveryAddress 
    payment: Payment
    totalPrices: TotalPrices
    quantity: number
    completed: boolean
}  

export const SaleContext = createContext({} as SaleContextType)
  
interface SaleContextProviderProps {
    children: ReactNode
}

export function SaleProvider({ children }: SaleContextProviderProps) {    
    const [coffees, dispatch] = useReducer(SaleReducer, []);    
    const [payment, setPayment] = useState<Payment>({
        paymentType: null
    });
    const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({
        cep: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
    });
    const [totalPrices, setTotalPrices] = useState<TotalPrices>({
        totalCoffees: 0,
        quantity: 0,
        deliveryFee: 5,
        total: 0,
    });

    const setCurrentPayment = (newPaymentType: PaymentType) => {
        setPayment({ paymentType: newPaymentType })
    };

    const setCurrentDeliveryAddress = (newDeliveryAddress: DeliveryAddress) => {
        setDeliveryAddress({ 
            cep: newDeliveryAddress.cep,
            street: newDeliveryAddress.street,
            number: newDeliveryAddress.number,
            complement: newDeliveryAddress.complement,
            neighborhood: newDeliveryAddress.neighborhood,
            city: newDeliveryAddress.city,
            state: newDeliveryAddress.state,
        })
    };

    const addCoffeesOnShoppintCartAction = (coffee: Coffee) => {
        const existCoffee = coffees.filter(item => item.id === coffee.id);
        if (existCoffee.length < 1){
            dispatch(addNewCoffeeAction(coffee))
            recalcTotalAddCoffees(coffee);
        }
    };

    const addOneCoffeeOnShoppintCartAction = (coffee: Coffee) => {
        dispatch(addNewCoffeeAction(coffee))
        recalcTotalAddCoffees(coffee, true);
    };

    const removeCoffee = (coffee: Coffee) => {
        const existCoffee = coffees.filter ((item: Coffee) => coffee.id === item.id);
        if (existCoffee.length > 0){
            dispatch(removeCoffeeAction(coffee))
            recalcTotalRemoveCoffees(coffee);
      }
    };
    
    const removeOneCoffee = (coffee: Coffee) => {
        const existCoffee = coffees.filter ((item: Coffee) => coffee.id === item.id);
        if (existCoffee.length > 0){
            dispatch(removeOneCoffeeAction(coffee))
            recalcTotalRemoveCoffees(coffee, true);
      }
    };    

    function recalcTotalAddCoffees (coffee: Coffee, addOne?: boolean){
        let quantity = 0;
        let totalCoffees = 0;

        for (let i = 0; i < coffees.length; i++) {
            totalCoffees += (coffees[i].price * coffees[i].quantity);
            quantity += coffees[i].quantity;
        }
        if(addOne){     
            totalCoffees += coffee.price;
            quantity += 1;
        }
        else{
            totalCoffees += (coffee.price * coffee.quantity);
            quantity += coffee.quantity;
        }

        setTotalPrices(prevState => ({
            ...prevState,
            quantity: quantity,
            totalCoffees: totalCoffees,
            total: totalCoffees + prevState.deliveryFee
        }));
    }
    
    function recalcTotalRemoveCoffees (coffee: Coffee, removeOne?: boolean){
        let quantity = 0;
        let totalCoffees = 0;

        for (let i = 0; i < coffees.length; i++) {
            totalCoffees += (coffees[i].price * coffees[i].quantity);
            quantity += coffees[i].quantity;
        }

        if(removeOne){
            totalCoffees -= coffee.price;
            quantity -= 1;
        }
        else{
            totalCoffees -= (coffee.price * coffee.quantity);
            quantity -= coffee.quantity;
        }

        setTotalPrices(prevState => ({
            ...prevState,
            quantity: quantity,
            totalCoffees: totalCoffees,
            total: totalCoffees + prevState.deliveryFee
        }));
    }
    
    return (
        <SaleContext.Provider
            value={{
                coffees,
                payment,
                deliveryAddress,
                totalPrices,
                addCoffeesOnShoppintCartAction,
                addOneCoffeeOnShoppintCartAction,
                removeOneCoffee,
                removeCoffee,
                setCurrentPayment,
                setCurrentDeliveryAddress
            }}>
            {children}
        </SaleContext.Provider>
    )
}