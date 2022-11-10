import * as types from './actionTypes';

const iniState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  data: "",
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
        isError:false
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...iniState,
        isLoading: false,
        isAuth: false,
        isError:true,
        data: "",
      };
    //   case types.USER_SIGNUP_REQUEST:
    //   return {
    //       ...iniState,
    //       isLoading:false,
    //       isAuth:false,
    //   }
    //   case types.USER_SIGNUP_SUCCESS:
    //   return {
    //       ...iniState,
    //       isLoading:false,
    //       isAuth:true,
    //   }
    //   case types.USER_SIGNUP_FAILURE:
    //   return {
    //       ...iniState,
    //       isLoading:false,
    //       isError:true,
    //       isAuth:false,
    //       data:{}
    //   }

    default:
      return state;
  }
};