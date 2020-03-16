const initProduct = []

const products = (state = initProduct, action) => {
    switch (action.type) {
        case 'fetch_data_to_products':
            state = action.products;
            return [...state]
        case 'delete_item':
            for (var i = 0; i < state.length; i++) {
                if (state[i].id === action.id) {
                    state.splice(i, 1);
                }
            }
            return [...state]
        case 'add_item':
            state.push(action.product)
            return [...state]
        case 'update_item':
            for (var i = 0; i < state.length; i++) {
                if (state[i].id === action.product.id) {
                    state[i]=action.product
                }
            }
            return [...state]
        default: return [...state]
    }
}
export default products