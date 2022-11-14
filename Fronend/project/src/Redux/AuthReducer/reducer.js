import * as types from './actionTypes';

const iniState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  data: "",
  addtocarddata:[],
  cartdata:[],
  checkoutdata:[]

};
export const reducer = (state = iniState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...iniState,
        isLoading: true,
        isError:false,
        isAuth:false,
      };

    case types.USER_LOGIN_SUCCESS:
      return {
        ...iniState,
        isLoading: false,
        data: payload,
        isAuth: true,
        isError:false,
        payload:payload
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...iniState,
        isLoading: false,
        isAuth: false,
        isError:true,
        data: "",
      };
      case types.ADD_TO_CART_REQUEST:
      return {
          ...iniState,
          isLoading: true,

        
      }
      case types.ADD_TO_CART_SUCCESS:
      return {
          ...iniState,
         audioProjects : payload
      }
      case types.ADD_TO_CART_FAILURE:
      return {
          ...iniState,
         
      }

      case types.GET_CART_DATA_REQUEST:
        return {
            ...iniState,
  
          
        }
        case types.GET_CART_DATA_SUCCESS:
        return {
            ...iniState,
           cartdata : payload
        }
        case types.GET_CART_DATA_FAILURE:
        return {
            ...iniState,
           
        }
        case types.CHECK_OUT_PAGE_REQUEST:
          return {
              ...iniState,
              isLoading: true,
    
            
          }
          case types.CHECK_OUT_PAGE_SUCCESS:
          return {
              ...iniState,
             checkoutdata:payload
          }
          case types.CHECK_OUT_PAGE_FAILURE:
          return {
              ...iniState,
             
          }

    default:
      return state;
  }
};





























// import {
//     CREATE_FAILURE,
//     CREATE_REQUEST,
//     CREATE_SUCCESS,
//     SIGNIN_FAILURE,
//     SIGNIN_REQUEST,
//     SIGNIN_SUCCESS,
//     SIGNOUT,
//   } from "./actionTypes";
  
//   const signInData = {
//     userData: {},
//     token: "",
//     isAuth: false,
//     isLooding: false,
//     isError: false,
  
//     successfullyCreated: false,
//     createAccountLooding: false,
//     createAccountError: false,
//     errorData: [],
//   };
  
//   export const reducer = (state = signInData, action) => {
//     const { type, payload } = action;
//     switch (type) {
//       case SIGNIN_REQUEST:
//         return {
//           ...state,
//           isLooding: true,
//         };
//       case SIGNIN_SUCCESS:
//         return {
//           ...state,
//           isLooding: false,
//           isAuth: true,
//           token: payload.token,
//           userData: payload.data,
//           isError: false,
//         };
//       case SIGNIN_FAILURE:
//         return {
//           ...state,
//           isAuth: false,
//           isLooding: false,
//           isError: true,
//           errorData: payload,
//         };
//       case CREATE_REQUEST:
//         return {
//           ...state,
//           createAccountLooding: true,
//         };
//       case CREATE_SUCCESS:
//         return {
//           ...state,
//           createAccountLooding: false,
//           successfullyCreated: true,
//           createAccountError: false,
//           userData: payload,
//         };
//       case CREATE_FAILURE:
//         return {
//           ...state,
//           createAccountLooding: false,
//           successfullyCreated: false,
//           createAccountError: true,
//           isAuth: false,
//           errorData: payload,
//         };
//       case SIGNOUT:
//         return {
//           ...state,
//           userData: {},
//           token: "",
//           isAuth: false,
//           isLooding: false,
//           isError: false,
  
//           successfullyCreated: false,
//           createAccountLooding: false,
//           createAccountError: false,
//           errorData: [],
//         };
//       default:
//         return state;
//     }
//   };
  