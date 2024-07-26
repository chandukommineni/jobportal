import React from 'react';
import { FaUserPlus,FaLayerGroup,FaCity} from 'react-icons/fa';
const JobCard = ({ job }) => {
 
  return (
    <div className="flex flex-col p-4 border rounded-lg shadow-md bg-white min-h-[360px] max-h-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center bg-[#fafafa] h-20 w-20 rounded-lg shadow-custom-all-sides">
          <div 
            className="h-11 w-11 rounded-full bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${job.companyLogo || '/default_company_logo.png'})` }}

          ></div>
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded mt-[-50px]">{job.timeAgo}</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold">{job.title}</h3>
      <div className="flex items-center  mt-3 text-gray-600 text-sm">
        <span className="mx-2 mt-[0.7px]"><FaUserPlus/></span>
        <span >{job.experience} yr Exp</span>
        <span className="mx-2 mt-[0.7px]"><FaCity/></span>
        <span>{job.type}</span>
        <span className="mx-2 mt-[0.7px]"><FaLayerGroup/></span>
        <span>{job.salary / 100000} LPA</span>
      </div>
      <ul className="list-disc pl-5 mt-2 text-gray-600 text-sm">
        <li>{job.description}</li>
        <li className="mt-1">{job.additionalDescription}</li>
      </ul>
      <div className="mt-auto pt-4">
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
