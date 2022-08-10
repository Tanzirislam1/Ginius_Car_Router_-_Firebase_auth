// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* sicure-firebase-configuration : amra package.json file e click kore akta .env.local diye amra akta file create korse ter moddhe amra React_App_firebase-config-object-property-name=object-property-value 1st e amra react-app likhar por apiKey object-property name nibo then react-app er por paste korbo terpor = equal diye amra object property value ta set korbo = er age pore kono space thakbe nh aivabe amra firebaseConfig er shob gulo object property er value gulo .env file e copy paste kore rakhbo....then amra aikhane object-property er value er gulo remove korbo karon amra .env file er moddhe paste korse then amra ai object-property er value er poriborte amra object-property:process.env.REACT_APP_apiKey amra 1st e object property er por amra : diye no space terpor process.env. amra .env er moddhe value paste korar age REACT_APP_ diye amra firebase-config object er jei property-name sheita dise terpor =diyevalue dise oi name tae amra process.env. diye pase korbo....then koma , dite hbe nh hole error dibe karon aita object.... */

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;