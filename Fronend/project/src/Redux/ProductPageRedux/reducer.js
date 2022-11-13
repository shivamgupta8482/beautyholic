import { GET_PROJECT_DATA_FAILURE, 
    GET_PROJECT_DATA_SUCCESS, 
    GET_PROJECT_DATA_REQUEST, 
    FILTER_PROJECT_DATA_FAILURE,
    FILTER_PROJECT_DATA_REQUEST,
    FILTER_PROJECT_DATA_SUCCESS, 
    SORT_DATA_FAILURE,
    SORT_DATA_REQUEST, 
    SORT_DATA_SUCCESS,    
    GET_NAVBAR_DATA_REQUEST,
    GET_NAVBAR_DATA_SUCCESS,
    GET_NAVBAR_DATA_FAILURE
    } from "./actionTypes"; 

const iniState = {
    audioProjects : [],
    navData:[],
    isLoading : false,
    isError : false
} 

export const reducer=(state=iniState, action)=>{
    const {type, payload} = action 
    switch(type){

        // NAVBAR CASES START*******************************

        case GET_NAVBAR_DATA_REQUEST :{
            return {
                ...state,
                isLoading : true
            }
        } 

        case GET_NAVBAR_DATA_SUCCESS :{
            return {
                ...state,
                isLoading : false,
                navData : payload
            }
        } 

        case GET_NAVBAR_DATA_FAILURE :{
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        // NAVBAR CASES END*******************************


        case GET_PROJECT_DATA_REQUEST :{
            return {
                ...state,
                isLoading : true
            }
        } 

        case GET_PROJECT_DATA_SUCCESS :{
            return {
                ...state,
                isLoading : false,
                audioProjects : payload
            }
        } 

        case GET_PROJECT_DATA_FAILURE :{
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        case FILTER_PROJECT_DATA_REQUEST :{
            return {
                ...state,
                isLoading : true
            }
        } 

        case FILTER_PROJECT_DATA_SUCCESS :{
            return {
                ...state,
                isLoading : false,
                audioProjects : payload
            }
        } 

        case FILTER_PROJECT_DATA_FAILURE :{
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        } 

        case SORT_DATA_REQUEST :{
            return {
                ...state,
                isLoading : true
            }
        } 

        case SORT_DATA_SUCCESS :{
            return {
                ...state,
                isLoading : false,
                audioProjects : payload
            }
        } 

        case SORT_DATA_FAILURE :{
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        default:return state
    }
}