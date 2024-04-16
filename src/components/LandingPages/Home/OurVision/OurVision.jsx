import React from 'react';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';

const OurVision = () => {
    const items = [
        { name: "People Joined", number: "18K+" },
        { name: "VIP Users", number: "1800+" },
        { name: "Big Company", number: "148+" }
    ]
    return (
        <div className='ourvision-section py-24 container' data-aos="fade-up"
        data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <div className="ourvision-content relative flex flex-row-reverse gap-20 items-center justify-between">

                <div className="vision-info relative w-[50%]">
                    {/* <BackgroundShadow customShadow="0px 0px 400px 50px #1181E8"/> */}
                    <span className='text-secondary text-lg font-semibold'>OUR VISION</span>
                    <h2 className='text-white text-4xl mt-3 mb-5 font-bold'>Users from all around_ the world</h2>
                    <p className='text-gray '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quo libero cumque! Quod, molestias commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="items flex items-center gap-16 mt-12">
                        {
                            items.map((item, index) => <div key={index} className='text-center'>
                                <h2 className='text-light text-4xl font-bold mb-2'>{item.number}</h2>
                                <p className='text-gray'>{item.name}</p>
                            </div>)
                        }
                    </div>
                </div>
                <div className="vision-image relative">
                    <BackgroundShadow customShadow="0px 0px 300px 50px #1181E8" />
                    <img className='' src="/public/images/flat-map.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurVision;