import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-blue-100 max-h-screen mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      alt="Tailwind CSS hero component"
      src={bookimage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='w-6/12 mx-auto'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6 ">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className=''><button className="btn btn-success text-white">Get Started</button></div>
    </div>
  </div>
</div>
    );
};

export default Banner;