import React from 'react';
import notFound from '../../images/notfound/notfound.jpg'

const NotFound = () => {
    return (
        <div className="mx-auto">
            <img src={notFound} className="img-fluid" alt="" />
        </div>
    );
};

export default NotFound;