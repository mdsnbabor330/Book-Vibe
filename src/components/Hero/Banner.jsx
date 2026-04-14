import React from 'react';
import bannerImg from '../../assets/hero_img.jpg'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='p-5 md:p-20 bg-[#03030306] flex flex-col md:flex-row items-center justify-between rounded-4xl my-10'>
            <div className='space-y-8'>
                <h1 className='text-[24px] text-center md:text-left md:text-[56px] font-bold'>Books to freshen up <br /> your bookshelf</h1>
                <Link to='/books' className='btn bg-[#23BE0A] text-white'>View The List</Link>
            </div>
            <div className='rounded-4xl overflow-hidden w-5/12'>
                <img src={bannerImg} alt="Books" />
            </div>
        </div>
    );
};

export default Banner;