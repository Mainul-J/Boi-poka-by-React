import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-11/12 mx-auto'>
            <div className="">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</h1>
                <button className='btn btn-primary'>test</button>
            </div>
            <div>
                <img className='w-3/12' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;