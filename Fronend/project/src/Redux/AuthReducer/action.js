import * as types from './actionTypes'
import axios from 'axios'


const login = (payload)=> dispatch=>{
// let username = payload.username  
// const navigate = useNavigate()

    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/login", payload)
    .then((r)=>{
      console.log(r.data)
   return dispatch({type:types.USER_LOGIN_SUCCESS, payload:r.data.token})
    
    })
    .catch((err)=>{
      dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
    })
  }
  export {login}
