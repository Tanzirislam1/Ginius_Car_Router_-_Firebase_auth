import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center'>
            <footer>
                <p className='mt-5'><small>copright @ {year} </small></p>
            </footer>
        </div>
    );
};

export default Footer;