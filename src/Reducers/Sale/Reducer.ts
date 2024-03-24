import { Coffee } from "../../Components/Contexts/SaleProvider"
import { ActionSaleTypes } from "./actions"
import { produce } from 'immer'

export function SaleReducer(state: Coffee[], action: any) {
  switch(action.type){
    case ActionSaleTypes.ADD_NEW_COFFEE_TO_SHOPPING_CART:{
      const currentCoffeeIndex = state.findIndex(coffee => {
        return coffee.id == action.payload.newCoffee.id
      })

      if(currentCoffeeIndex < 0){        
        return produce(state, draft =>{
          draft.push(action.payload.newCoffee)
        })
      }
      
      let quantity = state[currentCoffeeIndex].quantity;
      quantity = quantity + 1;
      return produce(state, (draft) => {          
        draft[currentCoffeeIndex].quantity = quantity
      })
    }
 
      
    case ActionSaleTypes.REMOVE_ONE_COFFEE_TO_SHOPPING_CART:{
      const currentCoffeeIndex = state.findIndex(coffee => {
        return coffee.id == action.payload.deletedCoffee.id
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

    case ActionSaleTypes.REMOVE_COFFEE_TO_SHOPPING_CART:
      return produce(state, draft =>{            
        const index = draft.findIndex(item => item.id === action.payload.deletedCoffee.id)
        if (index !== -1) 
          draft.splice(index, 1)
      })
    default:
      return state
  }
}