import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { Range } from 'react-range';
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Jobs = () => {
  const jobs = useSelector((state) => state.data.data || []);
  const loading = useSelector((state) => state.data.loading);
  const [filter, setFilter] = useState({ jobType: '', location: '', title: '' });
  const [values, setValues] = useState([500000, 1500000]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    if (
      filter.jobType === '' &&
      filter.location === '' &&
      filter.title === '' &&
      values[0] === 500000 &&
      values[1] === 1500000
    ) {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter((job) => {
        const matchesType = filter.jobType ? job.type === filter.jobType : true;
        const matchesLocation = filter.location ? job.location === filter.location : true;
        const matchesTitle = filter.title ? job.title.toLowerCase().includes(filter.title.toLowerCase()) : true;
        const matchesSalary = job.salary >= values[0] && job.salary <= values[1];
        return matchesType && matchesLocation && matchesTitle && matchesSalary;
      });
      setFilteredJobs(filtered);
    }
  }, [jobs, filter, values]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div className="flex justify-center mt-4 w-full">
      <div className="w-full">
        <div className="bg-white shadow-md rounded-lg py-4 px-4 md:px-8 flex flex-wrap justify-between items-center space-y-4 md:space-y-0 w-full">
          <div className="flex items-center border-r-2 h-full border-gray-300 pr-4 w-full md:w-1/4">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search By Job Title, Role"
              className="border-none outline-none focus:ring-0 w-full"
              onChange={(e) => handleFilterChange(e)}
              name="title"
            />
          </div>
          <div className="flex items-center border-r-2 border-gray-300 md:px-4 w-full md:w-1/4">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <select
              className="border-none outline-none focus:ring-0 w-full bg-inherit"
              onChange={(e) => handleFilterChange(e)}
              name="location"
            >
              <option value="">Preferred Location</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div className="flex items-center border-r-2 border-gray-300 md:px-4 w-full md:w-1/4">
            <FaBriefcase className="text-gray-500 mr-2" />
            <select
              className="border-none outline-none focus:ring-0 w-full bg-inherit"
              onChange={(e) => handleFilterChange(e)}
              name="jobType"
            >
              <option value="">Job type</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-col items-start md:items-center space-y-4 md:space-y-0 w-full md:w-1/4">
            <div className="font-semibold flex justify-evenly w-full mb-4 text-[0.9rem]">
              <span className="w-auto">Salary Per Annum</span>
              <span className="w-auto">₹{values[0].toLocaleString()} - ₹{values[1].toLocaleString()}</span>
            </div>
            <div className="w-full md:w-32">
              <Range
                step={100000}
                min={500000}
                max={1500000}
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
        {!loading ? (
          filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10 my-10">
              {filteredJobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-xl font-semibold text-gray-700">No jobs found</p>
            </div>
          )
        ) : (
          <div role="status" className="flex justify-center align-middle w-full h-[500px] mt-52">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
