import {applyMiddleware, legacy_createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
import {reducer as productPageReducer} from "./ProductPageRedux/reducer"

let reducer = combineReducers({productPageReducer})
export const store = legacy_createStore(reducer, applyMiddleware(thunk))