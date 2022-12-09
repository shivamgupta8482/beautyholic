import {Navigate, useLocation} from "react-router-dom"
import {useSelector} from "react-redux"
//Create the HOC for protected Routes
const PrivateRoute = ({children}) => {
    const location = useLocation();

   // const isAuth = useSelector((state) => state.AuthReducer.isAuth);
   const isAuth = localStorage.getItem("token2")
  console.log(isAuth)

    if (!isAuth) {
      return <Navigate to="/Login" ></Navigate>;
    }
    
    return children;
};

export default PrivateRoute;