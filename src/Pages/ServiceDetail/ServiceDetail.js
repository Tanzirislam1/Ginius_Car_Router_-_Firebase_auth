import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    /* useParams : amra aikhane useParams kore dynamic route er jei id name dise shei id name ta k amra aikhane useParams kore destructureing kortase data id ta access korar jonne....amra console korle dekhte parbo... */
    const { serviceId } = useParams();
    // console.log(serviceId);
    return (
        <div>
            <h2>Welcome to detail {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;