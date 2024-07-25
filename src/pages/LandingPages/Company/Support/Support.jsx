import React from 'react';
import { HiOutlineLocationMarker, HiOutlineMailOpen, HiOutlinePhone } from 'react-icons/hi';
import './Support.css'

const Support = () => {
    return (
        <div className="support-page container  py-14">
            <div className="support-page-header mb-14">
                <h1 className='text-white text-5xl mb-5 font-bold '>Got a question?</h1>
                <p className='text-light text-3xl font-semibold '>Feel free to contact us, anytime.</p>
            </div>
            <div className="support grid grid-cols-[2fr_1fr] items-center gap-10">
                <form action="" className='bg-[#0d10184d] border border-gray-700 border-opacity-80 rounded-md p-10 '>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="first_name" className='text-light '>First Name</label>
                            <input type="text" id="first_name" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="second_name" className='text-light '>Second Name</label>
                            <input type="text" id="second_name" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 my-6'>
                        <label htmlFor="email" className='text-light '>Email address</label>
                        <input type="text" id="email" />
                    </div>
                    <div className='flex flex-col gap-2 my-6'>
                        <label htmlFor="subject" className='text-light '>Subject</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="message" className='text-light '>Message</label>
                        <textarea rows={10} name="" id="message" placeholder='Type here' className=' w-full '></textarea>
                    </div>
                    <div>
                        <button className='w-44 h-12 flex items-center justify-center  bg-secondary hover:bg-secondaryHover duration-200 font-semibold rounded-[4px] mt-10'>Send Message</button>
                    </div>
                </form>
                <aside className='rounded-md '>
                    <div className='flex gap-4 rounded-md shadow-xl shadow-gray-950 px-5 py-10 mb-5'>
                        <div>
                            <HiOutlineLocationMarker className='text-secondary text-2xl relative top-[2px]' />
                        </div>
                        <div>
                            <h3 className='text-white text-xl mb-3'>Address</h3>
                            <p className='text-light '>82 York Dr, 24802, Black Creek <br /> Maryland, USA</p>
                        </div>
                    </div>
                    <div className='flex gap-4 rounded-md shadow-xl shadow-gray-950 px-5 py-10 mb-5'>
                        <div>
                            <HiOutlineMailOpen className='text-secondary text-2xl relative top-[2px]' />
                        </div>
                        <div>
                            <h3 className='text-white text-xl mb-3'>Email address</h3>
                            <p className='text-light '>info@0x0.com</p>
                            <p className='text-light '>ks@0x0.com</p>
                        </div>
                    </div>
                    <div className='flex gap-4 rounded-md shadow-xl shadow-gray-950 px-5 py-10'>
                        <div>
                            <HiOutlinePhone className='text-secondary text-2xl relative top-[2px]' />
                        </div>
                        <div>
                            <h3 className='text-white text-xl mb-3'>Phone</h3>
                            <p className='text-light '>+0123456789</p>
                            <p className='text-light '>+9876543210</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Support;