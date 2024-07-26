// Jobs.jsx
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { Range } from 'react-range';
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { useSelector } from 'react-redux';


const Jobs = () => {
  const jobs=useSelector((state)=>state.data.data || [])
 
  const [filter, setFilter] = useState({ jobType: '', location: '', salaryRange: 80000 });
  
  const [values, setValues] = useState([50000, 80000]);
  
  useEffect(() => {

     },[]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div className="flex justify-center mt-4 w-full">
      <div className="w-full ">
      <div className="bg-white shadow-md rounded-lg py-4 px-4 md:px-8 flex flex-wrap justify-between items-center space-y-4 md:space-y-0 w-full">
      <div className="flex items-center border-r-2 h-full border-gray-300 pr-4 w-full md:w-1/4">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          className="border-none outline-none focus:ring-0 w-full"
        />
      </div>
      <div className="flex items-center border-r-2 border-gray-300 md:px-4 w-full md:w-1/4">
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <select className="border-none outline-none focus:ring-0 w-full bg-inherit">
          <option>Preferred Location</option>
          <option>India</option>
          <option>USA</option>
        </select>
      </div>
      <div className="flex items-center border-r-2 border-gray-300 md:px-4 w-full md:w-1/4">
        <FaBriefcase className="text-gray-500 mr-2" />
        <select className="border-none outline-none focus:ring-0 w-full bg-inherit">
          <option>Job type</option>
          <option>Onsite</option>
          <option>Remote</option>
        </select>
      </div>
     
      
      <div className="flex flex-col md:flex-col items-start md:items-center space-y-4 md:space-y-0 w-full md:w-1/4">
      <div className="font-semibold flex justify-evenly w-full mb-4 text-[0.9rem]">
        <span className="w-auto">Salary Per Month</span>
        <span className="w-auto">₹{values[0].toLocaleString()} - ₹{values[1].toLocaleString()}</span>
      </div>
      <div className="w-full md:w-32">
        <Range
          step={1000}
          min={50000}
          max={80000}
          values={values}
          onChange={setValues}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '4px',
                width: '100%',
                backgroundColor: '#ccc'
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '10px',
                width: '10px',
                backgroundColor: '#000',
                borderRadius: '50%',
              }}
            />
          )}
        />
      </div>
    </div>
    </div>
                
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10 my-10">
          {jobs?.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
