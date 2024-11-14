import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Oppsss....</h1>
            <Link to='/'>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;