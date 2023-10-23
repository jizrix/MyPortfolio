const Hero = () => {
  const imgUrl =
    'https://images.unsplash.com/photo-1629904888099-00285934292b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  return (
    <div
      className='
      hero h-auto py-[3rem] 
      min-h-screen
      '
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* <div className="hero-overlay bg-black bg-opacity-60"></div> */}
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='
          leading-[0.8] font-bold text-[#333]
          text-[3rem]
          sm:mb-5 sm:text-[6rem] mb-1'>
            Portfolio
          </h1>
          <h2 className='
          text-[1.45rem] font-bold text-[#333] mb-1
          sm:mb-5 sm:text-[2.85rem] sm:leading-[1]'>
            Weerapan Thairak
          </h2>
          <h3 className='
          mb-5 text-[1rem] leading-[0.5] text-[#777]
          sm:text-[2rem]'>
            Army to Software Engineer
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
