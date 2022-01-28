export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter((item, i) => i !== action.payload)
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        default:
            return state
    }
}

export default reducer;