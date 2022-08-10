import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
// import repair1 from '../../../images/repair1.jpg';

/* data load process : amra public er moddhe data.json akare data rakhte pari abar amra nijera array of object kore data banaiye amra use korte pari amra img er khetre amra img k import kore amra set korte pari abar img k imgbb use kore link e convert korte pari... */

// const services = [
//     {id: 1, name: 'oil change', price: 100, description: '', img: repair1 }
// ]

const Services = () => {
    /* amra external vabe data load korle amra bahir theke jei data tah k pacchi oita amader obosthan er poriborton kore tai amra state create kori amra data load kore state er moddhe data store kori amra state theke 2ta jinish pai ak hocche cureent state and 2 number hocche state tah k update korar jonne update state pai...*/
    const [services, setServices] = useState([]);
    // console.log(services);

    /* amra useEffect er moddhe amra jodi dependency set nh kori tahole useEffect er moddhe amra jei callback function tah use kortase sheita k call korbe er jodi amra dependency set kori tahole callback function er moddhe jodi kono kicu change ghote taholei dependency k call korbe... */

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='container'>
            <div className="row">
                <h2 className='text-primary text-center mt-5'>Our Services : {services.length}</h2>
                <div className='services-container mt-5'>
                    {
                        services?.map(service => <Service key={service.id} service={service}></Service>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Services;