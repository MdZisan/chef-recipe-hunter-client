import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

const {user,loading} =  useContext(AuthContext)
const location = useLocation();
// console.log(location);
if(loading){
    return <div className='h-screen flex justify-center mt-4'><progress className="progress w-56 mx-auto"></progress></div>
}
    if(user){
        return children;
    }
return <Navigate to={'/login'} state={{from:location}} replace></Navigate>

  
};

export default PrivateRoutes;