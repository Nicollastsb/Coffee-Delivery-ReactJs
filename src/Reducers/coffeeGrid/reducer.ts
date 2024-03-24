import { Coffee } from "../../Components/Contexts/SaleProvider"
import { ActionCoffeeTypes } from "./action"
import { produce } from 'immer'

export function coffeGridReducer(state: Coffee[], action: any) {
    switch(action.type){
      case ActionCoffeeTypes.ADD_ONE_COFFEE_TO_QUANTITY:{
        const currentCoffeeIndex = state.findIndex(coffee => {
          return coffee.id == action.payload.coffeeId
        })

        if(currentCoffeeIndex < 0){
          return state
        }
        
        let quantity = state[currentCoffeeIndex].quantity;
        quantity = quantity + 1;
        return produce(state, (draft) => {          
          draft[currentCoffeeIndex].quantity = quantity
        })
      }
      case ActionCoffeeTypes.REMOVE_ONE_COFFEE_TO_QUANTITY:{
        const currentCoffeeIndex = state.findIndex(coffee => {
          return coffee.id == action.payload.coffeeId
        })

        if(currentCoffeeIndex < 0){
          return state
        }
        
        let quantity = state[currentCoffeeIndex].quantity;        
        if(quantity > 0)
          quantity --;
        
        return produce(state, (draft) =>{
          draft[currentCoffeeIndex].quantity = quantity
        })
      }
      default:
        return state
    }
  }