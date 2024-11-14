import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Features from '../Features/Features';


const Home = () => {
    return (
        <div className='space-y-6'>
            <Banner></Banner>
            <Category></Category>
            <Features></Features>
        </div>
    );
};

export default Home;