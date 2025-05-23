import React, { useState } from 'react';
import { HiMenuAlt1, HiOutlineLogout, HiX, HiOutlinePaperAirplane } from 'react-icons/hi';
import { HiOutlineCodeBracket, HiOutlineUser } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import './Header.css';
import { useUserContext } from '../../../../ContextAPI/UserContext';
import { FaDiscord, FaFacebook, FaGlobe, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Header = ({ showResponsiveMenu, setShowResponsiveMenu }) => {
    const [userProfileClicked, setUserProfileClicked] = useState(false);
    const handleuserProfileClicked = () => {
        setUserProfileClicked(!userProfileClicked);
    }
    const { wallet, balance, handleConnectWallet, handleDisconnectWallet } = useUserContext();
    return (
        <div className='app-header w-full py-5 justify-between flex items-center px-5'>
            <div className="menu-vs-socials">
                <div className='menu hidden'>
                    {showResponsiveMenu ?
                        <div className='close' onClick={() => setShowResponsiveMenu(false)}>
                            <HiX className='text-3xl opacity-0 ' />
                        </div>
                        :
                        <HiMenuAlt1 onClick={() => setShowResponsiveMenu(true)} className='text-3xl text-secondary' />
                    }
                </div>
                <div className="socials">
                    <ul className="flex items-center gap-4">
                        <h2 className="text-[20px] font-semibold text-light">Follow us at</h2>
                        <li className="border border-gray-600 hover:border-gray-200 duration-160 w-8 h-8 flex items-center justify-center rounded-full">
                            <Link to="https://twitter.com/www0x0com" target="_blank">
                                <FaTwitter size={16} />
                            </Link>
                        </li>
                        <li className="border border-gray-600 hover:border-gray-200 duration-160 w-8 h-8 flex items-center justify-center rounded-full">
                            <Link to="https://www.facebook.com/www0x0com" target="_blank">
                                <FaFacebook size={16} />
                            </Link>
                        </li>
                        <li className="border border-gray-600 hover:border-gray-200 duration-160 w-8 h-8 flex items-center justify-center rounded-full">
                            <Link to="https://www.instagram.com/0x0_official/?hl=en" target="_blank">
                                <FaInstagram size={16} />
                            </Link>
                        </li>
                        <li className="border border-gray-600 hover:border-gray-200 duration-160 w-8 h-8 flex items-center justify-center rounded-full">
                            <Link to="https://discord.com" target="_blank">
                                <FaDiscord size={16} />
                            </Link>
                        </li>
                        <li className="border border-gray-600 hover:border-gray-200 duration-160 w-8 h-8 flex items-center justify-center rounded-full">
                            <Link to="https://t.me/www0x0com" target="_blank">
                                <FaGlobe size={16} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {wallet ?
                <div className="user-details flex items-center  gap-4">
                    <div className="balance flex items-center gap-2  py-[6px] px-3 rounded-md border border-[#0fcfcfb7]">
                        <img className='w-5' src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="" />
                        <h4 className='font-semibold text-secondary'>{Number(balance).toFixed(3)} ETH</h4>
                    </div>
                    <div className="account-info cursor-pointer flex items-center gap-2  py-[6px] px-3 rounded-md border border-[#0fcfcfb7]">
                        <img src="/images/metamask-logo.png" alt="" />
                        <h4 className='font-semibold text-secondary'>{`${wallet.substring(0, 5)}....${wallet.substring(wallet.length - 5)}`}</h4>
                    </div>
                    <div onClick={handleuserProfileClicked} className={`user-profile z-10 relative border  border-[#0fcfcfb7] p-2 rounded-full cursor-pointer hover:border-[#0fcfcf] ${userProfileClicked && 'border-[#0fcfcf]'} duration-200`}>
                        <HiOutlineUser className='text-secondary text-[22px]' />
                        {userProfileClicked &&
                            <div className="user-options absolute w-52 top-[56px] -right-[2px] bg-[#263041] shadow-2xl rounded-md">
                                <div className="ractangle w-8 h-8  absolute -top-[17px] right-0"></div>
                                <ul>
                                    <li>
                                        <Link to="user-profile" className='group flex items-center gap-3 py-3 px-2 text-[#dfdfdf] hover:text-secondary duration-200 hover:bg-slate-800 rounded-t-md border-b border-gray-500 border-opacity-50'>
                                            <HiOutlineUser className='text-[#dfdfdf] text-xl group-hover:text-secondary' />User profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='group flex items-center gap-3 py-3 px-2 text-[#dfdfdf] hover:text-secondary duration-200 hover:bg-slate-800 rounded-t-md border-b border-gray-500 border-opacity-50'>
                                            <HiOutlineCodeBracket className='text-[#dfdfdf] text-xl] group-hover:text-secondary' />Report a bug
                                        </Link>
                                    </li>
                                    <li onClick={handleDisconnectWallet} className='group flex items-center gap-3 py-3 px-2 cursor-pointer text-[#dfdfdf] hover:text-red-500 duration-200 hover:bg-slate-800 rounded-b-md'>
                                        <HiOutlineLogout className='text-[#dfdfdf] text-xl group-hover:text-red-500' />
                                        Disconnect wallet
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                :
                <div className="connect-metamask ">
                    <button onClick={handleConnectWallet} className='flex items-center justify-center gap-1 bg-transparent border border-[#12AFAF] text-secondary hover:text-white hover:bg-[#12AFAF] duration-200 w-44 h-11 rounded-full font-bold'>Connect wallet <img src="/images/metamask-logo.png" alt="" className='w-6' /></button>
                </div>
            }


        </div>
    );
};

export default Header;