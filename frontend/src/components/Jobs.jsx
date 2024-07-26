// Jobs.jsx
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { Range } from 'react-range';
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
const jobsData = [
  {
    company: 'Amazon',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    timeAgo: '24h Ago',
    title: 'Full Stack Developer',
    experience: '1-3',
    type: 'Onsite',
    salary: 1200000,
    description: 'A user-friendly interface lets you browse stunning photos and videos...',
    additionalDescription: 'Collaborate with cross-functional teams to define, design, and ship new features.',
    location: 'New York'
  },
  {
    company: 'Tesla',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
    timeAgo: '24h Ago',
    title: 'Node Js Developer',
    experience: '1-3',
    type: 'Onsite',
    salary: 1200000,
    description: 'Filter destinations based on interests and travel style, and create personalized...',
    additionalDescription: 'Write clean, maintainable, and efficient code.',
    location: 'San Francisco'
  },
  {
    company: 'Spotify',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    timeAgo: '24h Ago',
    title: 'UX/UI Designer',
    experience: '1-3',
    type: 'Onsite',
    salary: 1200000,
    description: 'Design user interfaces that are both aesthetically pleasing and functional...',
    additionalDescription: 'Conduct user research and evaluate user feedback.',
    location: 'Los Angeles'
  },
  {
    company: 'Google',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    timeAgo: '24h Ago',
    title: 'Product Manager',
    experience: '2-5',
    type: 'Onsite',
    salary: 1500000,
    description: 'Manage product development from conception to launch...',
    additionalDescription: 'Ensure that the product aligns with the company’s overall strategy and goals.',
    location: 'Mountain View'
  },
  {
    company: 'Amazon',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    timeAgo: '24h Ago',
    title: 'Full Stack Developer',
    experience: '1-3',
    type: 'Onsite',
    salary: 1200000,
    description: 'A user-friendly interface lets you browse stunning photos and videos...',
    additionalDescription: 'Collaborate with cross-functional teams to define, design, and ship new features.',
    location: 'New York'
  },
  {
    company: 'Tesla',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
    timeAgo: '24h Ago',
    title: 'Node Js Developer',
    experience: '1-3',
    type: 'Onsite',
    salary: 1200000,
    description: 'Filter destinations based on interests and travel style, and create personalized...',
    additionalDescription: 'Write clean, maintainable, and efficient code.',
    location: 'San Francisco'
  },
  {
    company: 'Spotify',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    timeAgo: '24h Ago',
    title: 'UX/UI Designer',
    experience: '1-3',
    type: 'Onsite',
    salary: 1200000,
    description: 'Design user interfaces that are both aesthetically pleasing and functional...',
    additionalDescription: 'Conduct user research and evaluate user feedback.',
    location: 'Los Angeles'
  },
  {
    company: 'Google',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    timeAgo: '24h Ago',
    title: 'Product Manager',
    experience: '2-5',
    type: 'Onsite',
    salary: 1500000,
    description: 'Manage product development from conception to launch...',
    additionalDescription: 'Ensure that the product aligns with the company’s overall strategy and goals.',
    location: 'Mountain View'
  },
  
];

const Jobs = () => {
  const [filter, setFilter] = useState({ jobType: '', location: '', salaryRange: 80000 });
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [values, setValues] = useState([50000, 80000]);
  useEffect(() => {
    let filtered = jobsData;
    if (filter.jobType) {
      filtered = filtered.filter(job => job.title.toLowerCase().includes(filter.jobType.toLowerCase()));
    }
    if (filter.location) {
      filtered = filtered.filter(job => job.location.toLowerCase().includes(filter.location.toLowerCase()));
    }
    filtered = filtered.filter(job => job.salary <= filter.salaryRange * 1000);
    setFilteredJobs(filtered);
  }, [filter]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="w-full max-w-[1312px] ">
      <div className="bg-white shadow-md rounded-lg py-4 px-4 md:px-8 flex flex-wrap justify-between items-center space-y-4 md:space-y-0 w-full">
      <div className="flex items-center border-r-2 h-full border-gray-300 pr-4 w-full md:w-1/4">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          className="border-none outline-none focus:ring-0 w-full"
        />
      </div>
      <div className="flex items-center border-r-2 border-gray-300 px-4 w-full md:w-1/4">
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <select className="border-none outline-none focus:ring-0 w-full">
          <option>Preferred Location</option>
          <option>Location 1</option>
          <option>Location 2</option>
        </select>
      </div>
      <div className="flex items-center border-r-2 border-gray-300 px-4 w-full md:w-1/4">
        <FaBriefcase className="text-gray-500 mr-2" />
        <select className="border-none outline-none focus:ring-0 w-full">
          <option>Job type</option>
          <option>Full-time</option>
          <option>Part-time</option>
        </select>
      </div>
      {/* <div className="flex flex-col md:flex-col items-start md:items-center space-y-4 md:space-y-0 w-full md:w-1/4">
        <div className='font-semibold flex justify-evenly w-full'>
        <span className="w-auto">Salary Per Month</span>
        <span className="w-auto">₹50k - ₹80k</span>
        </div>
        <div>
        <input type="range" min="50000" max="80000" className="w-full md:w-32" />
        </div>
      
        
      </div> */}
      
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
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
