import * as types from './actionTypes'
import axios from 'axios'


const login = (payload)=> dispatch=>{
// let username = payload.username  
// const navigate = useNavigate()

    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post("https://backendcwnem.onrender.com/customer/login", payload)
    .then((r)=>{
      //let data = JSON.parse(r.config.data)
      console.log(r.data)
   return dispatch({type:types.USER_LOGIN_SUCCESS, payload:r.data})
    
    })
    .catch((err)=>{
      dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
    })
  }
  export {login}





//addtocart----------------------------------------------------------------------------------------------------------
const token =localStorage.getItem("token2");
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

const addtocart = (payload)=> dispatch=>{
  // let username = payload.username  
  // const navigate = useNavigate()
  console.log(payload[0]);
  console.log(token);
      dispatch({type:types.ADD_TO_CART_REQUEST})
      return axios.post("https://backendcwnem.onrender.com/addcart/create", payload[0],{headers:headers})
      .then((r)=>{
        //let data = JSON.parse(r.config.data)
        console.log(r)
     return dispatch({type:types.ADD_TO_CART_SUCCESS, payload:r.data})
      
      })
      .catch((err)=>{
        dispatch({type:types.ADD_TO_CART_FAILURE,payload:err})
      })
    }

export {addtocart}





  
export const getcartdata = () => (dispatch) =>{

  
     
  dispatch({type : types.GET_CART_DATA_REQUEST}) 

  return axios.get("https://backendcwnem.onrender.com/addcart",{headers:headers})
  .then((res)=>{

     return dispatch({ type : types.GET_CART_DATA_SUCCESS, payload : res.data })
  })
  .catch((error)=>{
     dispatch({ type : types.GET_CART_DATA_FAILURE })
  })
} 



const cartproductdelete = (payload)=> dispatch=>{
  // let username = payload.username  
  // const navigate = useNavigate()
  //console.log(payload[0]);
  //console.log(token);
      dispatch({type:types.CART_PRODUCT_DELETE_REQUEST})
      return axios.delete(`https://backendcwnem.onrender.com/addcart/${payload}`,{headers:headers})
      .then((r)=>{
        //let data = JSON.parse(r.config.data)
        console.log(r.data)
        
     return dispatch({type:types.CART_PRODUCT_DELETE_SUCCESS, payload:r.data})
      
      })
      .catch((err)=>{
        dispatch({type:types.CART_PRODUCT_DELETE_FAILURE,payload:err})
      })
    }

export {cartproductdelete}


// const checkoutdata = (payload)=> dispatch=>{
  
//       dispatch({type:types.CHECK_OUT_PAGE_REQUEST})
//       return ( payload)
//       .then((r)=>{
//         //let data = JSON.parse(r.config.data)
//         console.log(r)
//      return dispatch({type:types.CHECK_OUT_PAGE_SUCCESS, payload:r})
      
//       })
//       .catch((err)=>{
//         dispatch({type:types.CHECK_OUT_PAGE_FAILURE,payload:err})
//       })
//     }

// export {checkoutdata}












//   const register = (payload)=> dispatch=>{
//     console.log(payload)
//       dispatch({type:types.USER_LOGIN_REQUEST})
//       return axios.post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
//       .then((r)=>{
//         console.log(r)
//        return dispatch({type:types.USER_SIGNUP_SUCCESS, payload:r.data})
//       })
//       .catch((err)=>{
//         dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
//       })
//     }
// export{register}





























// import axios from "axios";
// import {
//   CREATE_FAILURE,
//   CREATE_REQUEST,
//   CREATE_SUCCESS,
//   SIGNIN_FAILURE,
//   SIGNIN_REQUEST,
//   SIGNIN_SUCCESS,
// } from "./actionTypes";

// export const Signigfun = (data) => (dispatch) => {
//   dispatch({ type: SIGNIN_REQUEST });

//   axios
//     .post("http://localhost:5000/customer/login", data)
//     .then((response) => {
//      // console.log(response.data);
//       if(response.data.message=="Login Successful"){
//       return  dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
//       }else if(response.data.message=="User not exists"){
//        return dispatch({ type: SIGNIN_FAILURE, payload: response.data });
//       }
      
//     })
//     .catch((e) => {
//       console.log(e);
//       dispatch({
//         type: SIGNIN_FAILURE,
//         payload: e.response.data?.message
//           ? e.response.data.message === "Incorrect credentials"
//             ? [{ msg: e.response.data.message, param: "password" }]
//             : [{ msg: e.response.data.message, param: "email" }]
//           : e.response.data.errors,
//       });
//     });
// };

// // export const Createaccount = (data) => (dispatch) => {
// //   dispatch({ type: CREATE_REQUEST });

// //   axios
// //     .post("https://expedia-apiproject.herokuapp.com/auth/register", data)
// //     .then((response) => {
// //       dispatch({ type: CREATE_SUCCESS, payload: response.data.data });
// //     })
// //     .catch((e) => {
// //       dispatch({ type: CREATE_FAILURE, payload: e.response.data.errors });
// //     });
// // };

































// // import * as types from './actionTypes'
// // import axios from 'axios'


// // // const login = (payload)=> dispatch=>{
// // // // let username = payload.username  
// // // // const navigate = useNavigate()

// // //     dispatch({type:types.USER_LOGIN_REQUEST})
// // //     return axios.post("http://localhost:5000/customer/login", payload)
// // //     .then((r)=>{
// // //       console.log(r.data);
// // //    return dispatch({type:types.USER_LOGIN_SUCCESS, payload:r.data.token})
    
// // //     })
// // //     .catch((err)=>{
// // //       console.log(err)
// // //       dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
// // //     })
// // //   }


// //   const login = (payload) =>dispatch => {
// //     dispatch({type:types.USER_LOGIN_REQUEST})
// //   return  fetch('http://localhost:5000/customer/login', {
// //   method: 'POST', // or 'PUT'
// //   headers: {
// //     'Content-Type': 'application/json',
// //   },
// //   body: JSON.stringify(payload),
 
// //   })
// //   .then((response) => response.json())
// //   .then(async(r) => {
// //    // console.log(r);
// //    const y = await dispatch({type:types.USER_LOGIN_SUCCESS, payload:r})
// // return y;
  
// //   })
// //   .catch((err) => {
// //     console.log(err)
// //     dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
// //   });
  
    
// //   }




// //   export {login}
