import React from 'react';

const Hero = () => {
  const imgUrl = 'https://images.unsplash.com/photo-1629904888099-00285934292b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage:`url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}
    >
        {/* <div className="hero-overlay bg-black bg-opacity-60"></div> */}
        <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-[6rem] leading-[0.5] font-bold text-black'>Portfolio</h1>
          <h2 className='mb-5 text-[2.85rem] leading-[1] font-bold text-black'>Weerapan Thairak</h2>
          <h3 className='mb-5 text-[2rem] leading-[0.5] text-black'>Army to Software Engineer</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
