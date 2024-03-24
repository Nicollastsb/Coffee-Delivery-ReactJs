import { Coffee } from "../../Components/Contexts/SaleProvider";

export enum ActionSaleTypes{
    ADD_NEW_COFFEE_TO_SHOPPING_CART = 'ADD_NEW_COFFEE_TO_SHOPPING_CART',
    REMOVE_ONE_COFFEE_TO_SHOPPING_CART = 'REMOVE_ONE_COFFEE_TO_SHOPPING_CART',
    REMOVE_COFFEE_TO_SHOPPING_CART = 'REMOVE_COFFEE_TO_SHOPPING_CART'
}

export function addNewCoffeeAction(newCoffee: Coffee){
    return {
        type: ActionSaleTypes.ADD_NEW_COFFEE_TO_SHOPPING_CART,
        payload: {
          newCoffee
        },
      }
}

export function removeOneCoffeeAction(deletedCoffee: Coffee){
    return {
        type: ActionSaleTypes.REMOVE_ONE_COFFEE_TO_SHOPPING_CART,
        payload: {
          deletedCoffee
        },
      }
}

export function removeCoffeeAction(deletedCoffee: Coffee){
  return {
      type: ActionSaleTypes.REMOVE_COFFEE_TO_SHOPPING_CART,
      payload: {
        deletedCoffee
      },
    }
}