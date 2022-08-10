import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    /* agree-state : amra state nise agree name diye and amra state er initial value false kore rakhse...amra ai state k !agree diye set kortase onClick er moddhe normally unclick thakbe tai false kora hoise...*/
    const [agree, setAgree] = useState(false);


    /* signup-with-email-verification : createUserWithEmailAndPassword from react-firebase-hooks */

    /* Email-verification : amra createUserWithEmailAndPassword hook er moddhe auth set kori abar optional kicu peramter set kora jay jeigulo object return kore amra createUserWithEmailAndPassword hook er takes following perameter er options gulo porle dekhbo auth er por options ase emailVerification er jonne jeita object return kore normally emailVerification boolean thake amra true set kore use korte hbe tai amra createUserWithEmailAndPassword er moddhe auth k set kortase terpor , diye {} object er moddhe
    sendEmailVerification: true kore diyei amra amader email verification er kajta khub shohoj e kore feltase.... */ 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    /* useUpdatePassword form react-firebase-hooks */
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        navigate('/home');
    }

    /* step-5 : create from for register and if you are already user so we navigate you to login route...  */
    const navigateLogin = () => {
        navigate('/login');
    }

    /* step-6 : create a handler for register form submit and set handler-name on from tag attribute onSubmit={} */
    const handleRegister = event => {
        event.preventDefault();
        /* system-3 : access email,password field target value => amra input field er moddhe name='' name property tae proti input field er akta name set kore dise...amra event.target.input-field-name.value diye amra individual input filed er target value access korte pari name er por .value use kore amra email er jonne email name dite pari email, password er jonne password...ex: 
        console.log(event.target.email.value);
        console.log(event.target.password.value);  
        */

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        /* jodi amra check box er moddhe click kori ba checked kori tahole amader register er kaj korbe karon amra conditionally handle kortase...amra agree varibale diye korte pari kinto amra upore akta state nise... */
        // const agree = event.target.terms.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }

    return (
        <div className='container register-form'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                {/* amra input er moddhe onClick er moddhe arrow function use kore amra upore agree name state nise oita k ulta vabe set korse setAgree(!agree) amra agree state k ulta vabe set kortase...state er initial value false kora ase karon default vabe unclick obostay thakbe...*/}
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            
                {
                /* conditional-css-class :
                /* system-1: <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Con ditions</label> 
                
                amra label er moddhe className diye dynamic vabe ternary operator use korse agree true hole text-primary : false hole text-danger 
                */
                }

                {/* system-2: */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Con ditions</label>
                <input
                /* conditional-disabled : jodi amra checkbox er moddhe click nh kori tahole register button disable thakbe jokhon click kore agree korbo tokhon button inable hbe.. aikhane !agree bolte bujhacche agree nh thaka... */
                disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-4' type="submit"
                    value="Register" />
            </form>

            <p className='mt-4'>Already have an Account? <Link to="/login" onClick={navigateLogin} className='text-primary text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;