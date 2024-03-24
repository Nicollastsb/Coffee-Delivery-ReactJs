export enum ActionCoffeeTypes{
    ADD_ONE_COFFEE_TO_QUANTITY = 'ADD_ONE_COFFEE_TO_QUANTITY',
    REMOVE_ONE_COFFEE_TO_QUANTITY = 'REMOVE_ONE_COFFEE_TO_QUANTITY'
}

export function addOneQuantity(coffeeId: string){
    return {
        type: ActionCoffeeTypes.ADD_ONE_COFFEE_TO_QUANTITY,
        payload: {
            coffeeId
        }
      }
}

export function removeOneQuantity(coffeeId: string){
    return {
        type: ActionCoffeeTypes.REMOVE_ONE_COFFEE_TO_QUANTITY,
        payload: {
            coffeeId
        }
      }
}