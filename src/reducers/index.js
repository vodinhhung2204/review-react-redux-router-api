import {combineReducers} from 'redux'
import products from './products'
import item from './items'

const appReducers = combineReducers({
    products,
    item
})

export default appReducers