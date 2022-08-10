import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    /* step-1 : amra from er input field er target value access korte state declair nh kore amra useRef declair korse email password er jonne...and amra input er moddhe ref={} ref niye ter moddhe amra email,password er uref() er jei variable name set korse sheita ref={} ref er moddhe call kortase.. */
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    /* for login from react-firebase-hooks */
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    /* forget-password / sendPasswordResetEmail from react-firebase-hooks  */
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    /* condition rendering (for error handleing) => all details in SocailLogin component... */
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    /* use-loading : amra react-firebase-hook er state gulo copy kore niye ashale shob jaygay loading state thake amra loading ta set kore dayoar jonne amra shared er moddhe loading name component create korse...if jodi loading hoy abar if jodi sendPasswordResetEmail er sending hoy tahole amader return korbe loading component k... */

    if (loading || sending) {
        return <Loading></Loading>
    }

    /* redirected form */
    let from = location.state?.from?.pathname || "/";

    if (user) {
        /* amra 1st e jodi if user hoy tahole navigate kortaselam home er moddhe amra form redirected er kaj korte if jodi user hoy tahole take replace kora hoise... */
        navigate(from, { replace: true });
    }

    /* step-2 : create a handler for form submit and set the handler-name in from tag attribute onSubmit={} for submit form and event.preventDefault() for reload issue when we submit form... */
    const handleSubmit = event => {
        event.preventDefault();

        /* step-3 : 3 system to Access email-password target value  => system-1 : amra normally email er password er jonne amra handler create kore input connection ditam onChange ba onBlur then amra handler er moddhe event.target.value ta console kortam then amra email password er jonne state nitam oi state e event.target.value setState kortam then amra form submit er handler er mopddhe state k console kore dekhtam.... system-2 (useRef) :  kinto amra aikhane useRef use kore different way tae amra email and pass k access kortase useRef use kore step-1 e email and password k use ref use kore input connection kora hoise er amra aikhane email,password er variable name k call kore .current.value use kore amra email,password filed er target value k access kortase...system-3 amra register form er moddhe dekhbo... */
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    /* step-4 (toggle) : if you are new this website so we navigate you and send you in register form... */
    const navigateRegister = event => {
        navigate('/register');
    }

    /* Forget password / Reset password Handler */
    const resetPassword = async () => {
        const email = emailRef.current.value;
        /* validation : if jodi email hoy ba email jodi thake  tahole amader toast ta k dekhabe er else jodi email nh thake tahole amader error hisabe bolbe Please enter your email address... */
        if (email) {
            await sendPasswordResetEmail(email);
            // alert('Sent email');
            /* react-tostify */
            toast('Sent Email');
        }
        else{
            toast('Please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-4'>Please Login</h2>
            <Form className='mt-4' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary mx-auto d-block w-50" type="submit">
                    Login
                </Button>
            </Form>

            {/* show error */}
            <p className='mt-4  text-center d-block mx-auto'>{errorElement}</p>

            <p className='text-center'>New to Genius Car? <Link to="/register" onClick={navigateRegister} className='text-danger text-decoration-none'>Please Register</Link></p>

            <p className='text-center'> Forget Password? <button onClick={resetPassword} className='btn btn-link text-danger text-decoration-none'>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            {/* react tostify container : amra container k import korse and amra toastContainer k jei kono jayga theke call korlei hbe... */}
            <ToastContainer />
        </div>
    );
};

export default Login;