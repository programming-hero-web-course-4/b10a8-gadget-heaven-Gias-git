import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero bg-[#9538E2] mb-60 ">
            <div className="hero-content text-center pt-10 pb-32">
                <div className="w-10/12">
                    <h1 className="text-5xl text-white font-bold leading-snug">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 text-white w-8/12 mx-auto">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn bg-white text-[#9538E2] rounded-full text-lg px-8 ">Shop Now</button>

                    <div className=' -mb-80 mt-10 p-4 border-2 bg-white/30 backdrop-blur-md rounded-lg'>
                        <img className='rounded-lg w-[1024px] h-[560px] mx-auto object-fit' src={banner} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;