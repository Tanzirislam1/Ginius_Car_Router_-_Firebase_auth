import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const RequiredAuth = ({ children }) => {
    /* amra auth theke information gulo pai amra react-firebase-hooks theke useAuthState kore user k ber kortase.... */
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequiredAuth;