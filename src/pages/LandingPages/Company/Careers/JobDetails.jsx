import React from 'react';
import { HiOutlineBriefcase, HiOutlineCash, HiOutlineExternalLink, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhoneOutgoing } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

const JobDetails = () => {
    let location = useLocation();
    const jobData = location.state?.jobData;
    return (
        <div className="job-details max-lg:my-14 border border-gray-700 border-opacity-80 rounded-md lg:overflow-auto lg:h-[600px] lg:sticky lg:top-[115px] lg:left-0 outlet-scrollbar">
            <div className="job-details-header flex justify-between p-4 shadow-lg shadow-gray-950">
                <div>
                    <h2 className='text-white font-semibold text-2xl mb-3'>{jobData.title}</h2>
                    <div className='flex gap-5 flex-start'>
                        <p className='text-slate-300 flex items-center gap-1'><HiOutlineLocationMarker className='text-secondary' /> {jobData.address}</p>
                        <p className='text-slate-300 flex items-center gap-1'><HiOutlineCash className='text-secondary' /> {jobData.salary}</p>
                        <p className='text-slate-300 flex items-center gap-1'><HiOutlineBriefcase className='text-secondary' /> Full-time</p>
                    </div>
                </div>
                <div className='max-sm:hidden'>
                    <button className='flex items-center gap-1 font-bold text-white py-3 px-7 bg-secondaryHover hover:bg-secondary duration-200 rounded-md '>Apply Now <HiOutlineExternalLink className='text-lg font-bold' /></button>
                </div>
            </div>
            <div className="job-details-main p-4 my-5">
                <p className='text-gray  mb-5'>{jobData.job_description}</p>
                <p className='text-gray font-semibold'>Number of vacancy: {jobData.num_vacancy}</p>
                <div className="contacts mt-5">
                    <h4 className='text-light font-semibold mb-2 text-lg '>Contact:</h4>
                    <ul className='flex items-center gap-5'>
                        <li className='text-gray flex items-center gap-1'><HiOutlinePhoneOutgoing className='text-secondary' /> {jobData.contact.phone}</li>
                        <li className='text-gray flex items-center gap-1'><HiOutlineMail className='text-secondary' /> {jobData.contact.email}</li>
                    </ul>
                </div>
                <div className='sm:hidden flex justify-center mt-10'>
                    <button className='flex items-center justify-center gap-1 font-bold text-white w-full  py-3 px-7 bg-secondaryHover hover:bg-secondary duration-200 rounded-md '>Apply Now <HiOutlineExternalLink className='text-lg font-bold' /></button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;