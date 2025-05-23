import React, { useEffect, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import './Leaderboard.css';
import { Link } from 'react-router-dom';
import AppSectionHeader from '../../../../../components/CommonComponents/AppSectionHeader/AppSectionHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import leaderboardData from '/public/leaderboard.json';

const Leaderboard = () => {
    const notify = () => toast.success('Wallet added to the tracking list!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });


    const [leaderboards, setLeaderboards] = useState([]);

    useEffect(() => {
        setLeaderboards(leaderboardData.leaderboards);
    }, []);

    const [tracking, setTracking] = useState(false);
    const [trackingList, setTrackingList] = useState([]);
    const handleTrackWallet = (wallet) => {
        if (trackingList.includes(wallet)) {
            setTrackingList(trackingList.filter(item => item !== wallet));
        } else {
            setTrackingList([...trackingList, wallet]);
            setTracking(!tracking)
            notify();
        }
    }

    const isLoading = false;
    const error = false;

    return (
        <div className='leaderboard-main '>
            <ToastContainer />
            <AppSectionHeader setInterval={setInterval} details={"Find out the top performers at 0x0 and track any desired wallet"} defaultBtn={"Monthly"} secondBtn={"Weekly"} />
            {isLoading ?
                <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
                    <div className=" grid md:grid-cols-2 " style={{ gap: "30px" }}>
                        <div className='item'>
                            <h4 className='w-40 '><Skeleton height={"40px"} /></h4>
                            <div className='mt-5'>
                                <div className='mb-3'>
                                    <Skeleton height={"40px"} />
                                </div>
                                <div className=''>
                                    <Skeleton className='mb-1' count={10} height={"40px"} />
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <h4 className='w-40 '><Skeleton height={"40px"} /></h4>
                            <div className='mt-5'>
                                <div className='mb-3'>
                                    <Skeleton height={"40px"} />
                                </div>
                                <div className=''>
                                    <Skeleton className='mb-1' count={10} height={"40px"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </SkeletonTheme>
                : error
                    ?
                    <div className="error-message flex flex-col gap-3 justify-center items-center ">
                        <img src="/images/error-robot.png" alt="" className='w-80 mb-5' />
                        <h3 className='font-semibold text-[#ed615b] text-xl text-center'>An error has occured while fetching data!</h3>
                        <p className='text-gray'>Pleae refresh the page or try again later</p>
                    </div>
                    :
                    <div className="leaderboard  relative flex justify-between flex-wrap">
                        {
                            leaderboards.map((leaderboard, index) => (
                                <div key={index} className='item backdrop-blur-md border border-[#0fcfcf3d] py-4 px-4 rounded-md max-md:w-full'>
                                    <h4 className='bg-[#122036] text-light font-bold p-3 w-40 text-center rounded-md'>
                                        <button>{leaderboard.token.toUpperCase()}</button> / <button>WETH</button>
                                    </h4>
                                    <div className='mt-5 flex flex-col justify-center'>
                                        <div className='leaderboard-table-head text-light bg-[#122036] rounded-md py-3 px-4'>
                                            <p>#</p>
                                            <p className='mr-12'>Wallet Address</p>
                                            <p>Profit</p>
                                            <p className='mx-auto'>Track</p>
                                        </div>
                                        {
                                            leaderboard.leaderboard.map((item, itemIndex) => (
                                                <div key={itemIndex} className='leaderboard-table-content border-b border-slate-800 text-light py-4 px-4'>
                                                    <p>{itemIndex + 1}</p>
                                                    <Link to={`https://etherscan.io/address/${item.wallet}`} target="_blank" className='uppercase'>
                                                        {item.wallet.substring(0, 6)}...{item.wallet.substring(item.wallet.length - 6)}
                                                    </Link>
                                                    <p className={`${item.profitPercent.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                                                        {item.profitPercent}
                                                    </p>
                                                    <p onClick={() => handleTrackWallet(item.wallet)} className='mx-auto cursor-pointer'>
                                                        {trackingList.includes(item.wallet) ?
                                                            <HiOutlineEyeSlash className='text-2xl text-secondary' />
                                                            :
                                                            <HiOutlineEye className='text-2xl' />
                                                        }
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }

                    </div>
            }
        </div>
    );
};

export default Leaderboard;