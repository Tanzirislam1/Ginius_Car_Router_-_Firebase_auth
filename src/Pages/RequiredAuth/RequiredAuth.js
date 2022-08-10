import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequiredAuth = ({ children }) => {
    /* amra auth theke information gulo pai amra react-firebase-hooks theke useAuthState kore user k ber kortase.... */

    /* Fix Reload redirect to login page (problem) : amra login kore jokhon private route e jai tokhon shob thik dekhay amader route er moddhe enter korte dae kinto amra jokhon page ta k reload kori tokhon amader login route e pathay aita hoy karon jokhon amra 1st time login kortase tokhon null dekhacche kinto amader route e enter kortase kinto jokhon reload kortase tokhon 1st time jokhon checkout kortaselo tokhon ghure ashar shomoy auth ta k null payoar karone amader login route e pathacche....

    solve-problem : ai problem ta solve korte amra loading use korbo jokhon user k call kora hocche tokhon ter status hoyoa dorker loading tai amra loading er kaj ta korbo...amra loading er jonne akta component baniye feltase shob jaygay loading use korar jonne amra aikhane condition use kortase if jodi loading hoy tahole amader return korba Loading component k...now amra check private route e login kore reload korle spinner k dekhabe and amader oi private route er moddhei rakhbe amader login route e niye jabe nh... */
    const [user, loading, error] = useAuthState(auth);
    console.log('inside require auth', user);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequiredAuth;