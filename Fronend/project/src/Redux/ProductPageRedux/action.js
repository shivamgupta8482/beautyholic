import axios from "axios";
import { 
    GET_PROJECT_DATA_FAILURE, 
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

// nav bar data start ***********************************
    export const getNavData = (category) => (dispatch) =>{
      const token =localStorage.getItem("token");
      const headers = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       }
     
      dispatch({type : GET_NAVBAR_DATA_REQUEST}) 
 
      return axios.get(`https://backendcwnem.onrender.com/products/${category}`,{
         headers:headers
      })
      .then((res)=>{
         return dispatch({ type : GET_NAVBAR_DATA_SUCCESS, payload : res.data })
      })
      .catch((error)=>{
         dispatch({ type : GET_NAVBAR_DATA_FAILURE })
      })
 } 
// nav bar data end **************************************

export const getProjectData = (category) => (dispatch) =>{
     
     dispatch({type : GET_PROJECT_DATA_REQUEST}) 


     return axios.get(`https://backendcwnem.onrender.com/products/${category}`)

     .then((res)=>{
        return dispatch({ type : GET_PROJECT_DATA_SUCCESS, payload : res.data })
     })
     .catch((error)=>{
        dispatch({ type : GET_PROJECT_DATA_FAILURE })
     })
} 

export const filterData = (value) =>(dispatch)=>{

   dispatch({type : FILTER_PROJECT_DATA_REQUEST}) 

   return axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?status=${value}`)
   .then((res)=>{
      //console.log(res.data)
      return dispatch({ type : FILTER_PROJECT_DATA_SUCCESS, payload : res.data})
      
   })
   .catch((error)=>{
      dispatch({ type : FILTER_PROJECT_DATA_FAILURE})
   })
} 

export const sortData = (value)=>(dispatch) =>{
   dispatch({ type : SORT_DATA_REQUEST}) 

   return axios.get(`https://beautybebodbjson.onrender.com/Hair?_sort=fund&_order=${value}`)
   .then((res)=>{
     // console.log("action", res)
     return dispatch({ type : SORT_DATA_SUCCESS, payload : res.data })
   })
   .catch((error)=>{
      dispatch({type : SORT_DATA_FAILURE})
   })
}



