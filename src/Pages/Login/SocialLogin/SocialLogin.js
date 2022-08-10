import React from 'react';
import googleIcon from '../../../images/social/google-icon.png';
import facebookIcon from '../../../images/social/facebook-icon.png';
import githubIcon from '../../../images/social/GitHub-Mark.png';
import auth from '../../../Firebase/Firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();

    /* warning-message-for-me : jodi amra 1ta gmail use kore 2 ta ba ter beshi provider use kori jokhon amra provider er moddhe click kore same email ta diye login korte chai tahole error dibe (account-exists-different-credential) kaj korbe nh...tokhon amra firebase er sign-in method er providers er one account per email address option er change e dhuke amra allow multiple account with same email address diye set kore dibo...save korbo...tahole amader er error dibe nh ta chara amader error dibe...    */

    /* google provider from react-firebase-hooks */
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    /* github provider from react-firebase-hooks */
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    /* handle-error (conditional-rendering) : amra error show korar jonne akta variable nise normally amra 1st e return kortaselam socialLogin function er moddhe amra return korase div k amra error show korar por amader er retry korar jonne amder provider gulo show kortase nh karon hocche error er jonne div return korar por next step e jitase nh tai amra errorElement name variable create korse then amra if(error) hoy tahole amra div return nh kore ai variable = div tag ta k set kortase tahole amader error condition er moddhe div k return nh kore amra ai variable k use kortase ter value hisabe jer fole error ta show kortase jokhon amra provider btn e click kore gmail nh diye kete ditase amader error show kortrase and provider btn o dekhacche amra return div korle dekhay nh tai amra return er poriborte variable use kortase...amra dynamic vabe ai variable k call kore jei khane dekhabo shei khane call kore set kore dibo..amra akshate google provider and github provider er jonne error set kortase || odd sign diye githubError state name k call kortase and p tag er moddhe dynamic vabe githubError.message k set kortase  */

    /* conditional-rendering (variable) : amra akta variable er upor depend kore amra condition apply kortase means jodi error khay taholei shudhu amra ai variable ta k use korbo...if er moddhe jei error condition oita jodi hoy tahole amra variable k call kortase = ter moddhe amra return jei value ta return hisabe chaitase sheita set kore ditase...error jodi true hoy tahole error?.message k set kortase let er variable er moddhe... */
    let errorElement;

    if (error || githubError) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {githubError?.message}</p>
        </div>
    }

    /* user-navigate : amra google and github 2 ta provider er condition akshate kortase jodi google ba github jeita diye login korbo amader navigate korbe home route e... */

    if (user || githubUser) {
        navigate('/home');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 mx-auto d-block'>
                    <img style={{ width: '40px', height: 'auto' }} src={googleIcon} alt="" />
                    <span className='ms-2'>Google Sign In</span>
                </button>

                <button className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img style={{ width: '30px', height: 'auto' }} src={facebookIcon} alt="" />
                    <span className='ms-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img style={{ width: '40px', height: 'auto' }} src={githubIcon} alt="" />
                    <span className='ms-2'>GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;