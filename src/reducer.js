export const initialState = {
    basket: [],
    user: null
};

//selector

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action ) => {
    console.log(action)
    
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET': 
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]
            index >=0 ? newBasket.splice(index, 1) : console.warn(`Can't remove product id: ${action.id} as it is not in the basket`)
            //This allows users remove one product only when the several products in the basket share the same id

            return {
                ...state,
                basket: newBasket
            };

        case "SET_USER":
            return {
                ...state, 
                user: action.user
            }



    default: 
            return state; 
    }
};


export default reducer;