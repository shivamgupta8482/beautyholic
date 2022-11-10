import * as types from './actionType'
import axios from 'axios'


// const login = (payload)=> dispatch=>{
// // let username = payload.username  
// // const navigate = useNavigate()

//     dispatch({type:types.USER_LOGIN_REQUEST})
//     return axios.post("http://localhost:5000/customer/login", payload)
//     .then((r)=>{
//       console.log(r.data);
//    return dispatch({type:types.USER_LOGIN_SUCCESS, payload:r.data.token})
    
//     })
//     .catch((err)=>{
//       console.log(err)
//       dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
//     })
//   }


  const login = (payload) =>dispatch => {
    dispatch({type:types.USER_LOGIN_REQUEST})
  return  fetch('http://localhost:5000/customer/login', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
 
  })
  .then((response) => response.json())
  .then(async(r) => {
   // console.log(r);
   const y = await dispatch({type:types.USER_LOGIN_SUCCESS, payload:r})
return y;
  
  })
  .catch((err) => {
    console.log(err)
    dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
  });
  
    
  }




  export {login}
