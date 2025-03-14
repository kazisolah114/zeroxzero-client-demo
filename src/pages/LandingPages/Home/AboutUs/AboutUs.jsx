import React from 'react';
import SectionHeader from '../../../../components/CommonComponents/SectionHeader/SectionHeader';

import { HiOutlinePlayCircle } from 'react-icons/hi2';
import './AboutUs.css';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const animationDataUrl = 'https://lottie.host/f7d73fa5-8827-402e-a710-053cb3873d97/MhjJdXMBat.json';
    const [animationData, setAnimationData] = React.useState(null);

    React.useEffect(() => {
        fetch(animationDataUrl)
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((error) => console.error('Error loading animation data:', error));
    }, [animationDataUrl]);

    if (!animationData) {
        return null; // or render a loading indicator
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
        speed: 5000,
    };
    return (
        <div className='aboutus-section py-24 container'
        data-aos="fade-up" data-aos-duration="1000"
        >
            <SectionHeader sectionTitle={"About Us_"} sectionDesc={"Learn more about who we are, our mission, and how we're making a difference"} />
            <div className="aboutus-content relative  flex items-center gap-10 justify-between" >
                <BackgroundShadow customShadow="0px 0px 400px 50px #10B8B9" />
                <div className="aboutus-info relative w-3/5">
                    <BackgroundShadow customShadow="0px 0px 400px 50px #10B8B9" />
                    <h2 className='text-light text-5xl font-bold mb-10 leading-[60px]'>
                        We are dedicated to bring you the best <span className='text-secondary'>trading information</span>
                    </h2>
                    <h4 className='text-gray text-xl  mb-4 '>Our project is live all around the world, with different features available we are expanding everyday</h4>
                    <p className='text-gray text-1xl text-justify mb-10'>
                        We address a critical issue in copy trading. While copy trading is not a new concept, centralized copy trading platforms pose risks of market manipulation, particularly with low-volume tokens. At 0x0, traders are unaware they're being followed, ensuring trades are solely based on blockchain data, mitigating manipulation risks. 0x0 is a game-changing decentralized trading app that harnesses the power of cutting-edge algorithms to detect profitable trading patterns for you.
                    </p>
                    <div className='flex buttons'>
                        <Link to="/aboutus" className='bg-transparent border border-[#12AFAF] hover:bg-secondaryHover duration-200 px-8 py-3 text-white font-semibold rounded-full '>More About Us</Link>
                        <button className='text-secondary ml-6 text-xl duration-200 flex items-center gap-2'>
                            <HiOutlinePlayCircle className='relative top-[2px] icon-glow' />
                            How we work
                        </button>
                    </div>
                </div>
                <div className='w-2/5 aboutus-image  flex justify-end text-right '>
                    <Lottie options={defaultOptions} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;