import React from 'react';
import './UserProfile.css'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import TrackingList from './TrackingList';

const UserProfile = () => {
    const notify = () => toast.success('Wallet has been copied!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    const handleWalletCopy = () => {
        notify();
    }
    return (
        <div className='user-profile'>
            <div className="user-profile-content">
                <div className="manage-profile ">
                    <div className='account bg-[#122036] p-5 rounded-md'>
                        <div className="">
                            <h2 className='text-lg text-light font-semibold mb-2'>Wallet Address</h2>
                            <div className='address flex items-center  gap-3 bg-slate-700 p-3 rounded-md'>
                                <img src="/public/images/metamask-logo.png" alt="" />
                                <p onClick={() => {
                                    handleWalletCopy();
                                    navigator.clipboard.writeText("user metamask address")
                                }} className='flex items-center justify-between text-[#f1f1f1] hover:text-white duration-200 gap-2 cursor-pointer '>0xd2798238940382735775e5 <HiOutlineDocumentDuplicate className='' /></p>
                            </div>
                            <ToastContainer />
                        </div>
                        <div className="balance mt-5">
                            <h2 className='text-lg text-light font-semibold mb-2'>Wallet Balance</h2>
                            <div className='address flex items-center gap-3 bg-slate-700 p-3 rounded-md'>
                                <img className='w-6' src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="" />
                                <p className='font-semibold'>0.00 ETH</p>
                            </div>
                        </div>
                    </div>
                    <div className='email mt-5 bg-[#122036] p-5 rounded-md'>
                        <h2 className='text-lg text-light font-semibold mb-2'>Email Address <span className='text-sm font-light'>(Enter email to get tracking notifications and so on)</span></h2>
                        <div className='flex items-center gap-3'>
                            <input type="email" placeholder='Type email address ' className='w-full rounded px-2 py-2 text-dark font-semibold outline-none' />
                            <input type="submit" value="Save" className='cursor-pointer bg-secondaryHover hover:bg-secondary duration-200 font-semibold px-8 py-2 rounded-md' />
                        </div>
                    </div>
                </div>
                <div className="socials-and-rewards">
                    <div className="socials bg-[#122036] p-5 rounded-md">
                        <div className="item cursor-pointer flex items-center gap-5 justify-center border border-gray-500 hover:bg-[#0FCFCF] hover:border-transparent duration-200 rounded-full p-3">
                            <img className='w-10  rounded-md' src="data:image/png;base64,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" alt="" />
                            <p className='font-bold text-lg'>Authorize X / Twitter</p>
                        </div>
                        <div className="item cursor-pointer mt-5 flex items-center gap-5 justify-center border border-gray-500 hover:bg-[#0FCFCF] hover:border-transparent duration-200 rounded-full p-3">
                            <img className='w-10 rounded-md' src="data:image/png;base64,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" alt="" />
                            <p className='font-bold text-lg'>Authorize Telegram</p>
                        </div>
                    </div>
                    <div className="rewards bg-[#122036] p-5 rounded-md mt-5">
                        <h2 className='text-lg text-light font-semibold mb-5  border-b border-gray-500'>Rewards</h2>
                        <p className='text-center text-gray pb-10'>You have no rewards yet😕. Retweet to earn some, now!</p>
                    </div>
                </div>
            </div>
            <div className="tracking-list rounded-md mt-10">
                <h2 className='text-lg text-light font-semibold '>Wallet Tracking List</h2>
                <TrackingList />
            </div>


        </div>
    );
};

export default UserProfile;