import {applyMiddleware, legacy_createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
import {reducer as productPageReducer} from "./ProductPageRedux/reducer"
import {reducer as AuthReducer} from "./AuthReducer/reducer"

let reducer = combineReducers({productPageReducer,AuthReducer})
export const store = legacy_createStore(reducer, applyMiddleware(thunk))