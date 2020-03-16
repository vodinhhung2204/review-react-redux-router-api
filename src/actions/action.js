import callAPI from '../utils/apiCaller'

export const act_Request_Products = () => {
    return (dispatch) => {
        return callAPI('GET', 'products', null).then(res => {
            dispatch(act_Fetch_To_Products(res.data))
        })
    }
}
export const act_Fetch_To_Products = (products) => {
    return {
        type: 'fetch_data_to_products',
        products: products
    }
}
export const act_request_detele_item = (id) => {
    return (dispatch) => {
        return callAPI('delete', 'products/' + id, null).then(() => {
            dispatch(act_delete_item(id))
        })
    }
}
export const act_delete_item = (id) => {
    return {
        type: 'delete_item',
        id: id
    }
}
export const act_request_add_item = (product) => {
    return (dispatch) => {
        return callAPI('post', 'products', product).then((res) => {
            dispatch(act_add_item(res.data))
        })
    }
}
export const act_add_item = (product) => {
    return {
        type: 'add_item',
        product: product
    }
}

export const get_data_to_edit_request = (id) => {
    return (dispatch) => {
        return callAPI('get', 'products/' + id, null).then((res) => {
            dispatch(get_data_to_edit(res.data))
        })
    }
}
export const get_data_to_edit = (product) => {
    return {
        type: 'get_data_to_edit',
        product: product
    }
}
export const update_item_request = (product) => {
    return (dispatch) => {
        return callAPI('put', 'products/' + product.id, product).then((res) => {
            dispatch(update_item(res.data))
        })
    }
}
export const update_item = (product) => {
    return {
        type: 'update_item',
        product: product
    }
}