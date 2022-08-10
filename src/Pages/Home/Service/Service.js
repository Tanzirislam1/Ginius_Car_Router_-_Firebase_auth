import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service || {};
    const navigate = useNavigate();
    /* amra id tah k navigate korte akta handler nise amra perameter hisabe id k nise oi id k onClick er moddhe amra arrow function e rap kore function er moddhe id ta pathacchi koi pathacchi handler er moddhe... amra navigate kortase and ter moddhe amra `` template string use kore dynamic vabe amra dynamic route path er moddhe enter korbo terpor ${id} set korbo ex: (`/service/${id}`) aivabe amra id tah k set kore navigate kortase....  */
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>Service-name: {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;