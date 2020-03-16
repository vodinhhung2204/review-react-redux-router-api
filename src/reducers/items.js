const initProduct = {}

const item = (state = initProduct, action) => {
    switch (action.type) {
        case 'get_data_to_edit':
            state=action.product
            return state
        default: return state
    }
}
export default item