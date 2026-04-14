import React from 'react';
import Banner from '../components/Hero/Banner';
import AllBooks from '../components/AllBooks/AllBooks';

const HomePage = () => {
    return (
        <div className='max-mA'>
            <Banner></Banner>
            <AllBooks></AllBooks>
        </div>
    );
};

export default HomePage;