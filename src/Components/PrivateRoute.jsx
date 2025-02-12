import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { contextApi } from '../AuthProvider/AuthContext';
import Loading from './Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(contextApi);

    if(user && user.email){
        return children;
    }
    if(loading){
        return <Loading></Loading>
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;