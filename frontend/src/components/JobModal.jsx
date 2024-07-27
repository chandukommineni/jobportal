import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setJobDraft, clearJobDraft } from '../store/jobSlice';
import {fetchData} from "../store/dataSlice"
import { toast } from 'react-toastify';
const JobModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const jobDraft = useSelector((state) => state.job.jobDraft);
    
    
    useEffect(() => {
        if (isOpen) {
            const savedDraft = JSON.parse(localStorage.getItem('jobDraft')) || {};
            dispatch(setJobDraft(savedDraft));
        }
    }, [isOpen, dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(setJobDraft({ ...jobDraft, [name]: value }));
    };

    const handleSaveDraft = () => {
        
        localStorage.setItem('jobDraft', JSON.stringify(jobDraft));
        console.log('Draft saved', jobDraft);
        onClose();
    };

    const handleJobPosting = async (e) => {
        e.preventDefault();
        const jobData = {
            company: jobDraft.companyName,
            timeAgo: new Date().toLocaleDateString(),
            title: jobDraft.jobTitle,
            experience: "2-5",
            type: jobDraft.jobType,
            salary: parseInt(jobDraft.salaryMax, 10),
            description: jobDraft.jobDescription,
            additionalDescription: "We are expecting the candidates with higher development skills and data structures knowledge",
            location: jobDraft.location
        };

        try {
            const response = await axios.post('https://jobportal-oz9g.vercel.app/', jobData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Job posted successfully:', response.data);
            localStorage.removeItem('jobDraft'); 
            dispatch(clearJobDraft()); 
            toast.success("Job Posted successfully")
            dispatch(fetchData())
            onClose();
        } catch (error) {
            console.error('Error posting job:', error);
            toast.error("Failed to post the Job")
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl">
                <div className="flex justify-between items-center mb-4 w-full">
                    <h2 className="text-xl font-bold mx-auto">Create Job Opening</h2>
                     <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-xl">
                        &times;
                    </button>
                    
                </div>
                <form onSubmit={handleJobPosting}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">Job Title</label>
                            <input
                                required
                                type="text"
                                name="jobTitle"
                                value={jobDraft.jobTitle}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="Full Stack Developer"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Company Name</label>
                            <input
                                required
                                type="text"
                                name="companyName"
                                value={jobDraft.companyName}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="Amazon, Microsoft, Swiggy"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">Location</label>
                            <select
                               required
                                name="location"
                                value={jobDraft.location}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Choose Preferred Location</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Job Type</label>
                            <select
                                required
                                name="jobType"
                                value={jobDraft.jobType}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Choose Job Type</option>
                                <option value="Onsite">Onsite</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">Salary Range</label>
                            <div className="flex space-x-2">
                                <input
                                    required
                                    type="number"
                                    name="salaryMin"
                                    value={jobDraft.salaryMin}
                                    onChange={handleInputChange}
                                    className="w-1/2 mt-1 p-2 border border-gray-300 rounded-md"
                                    placeholder="₹0"
                                />
                                <input
                                    required
                                    type="number"
                                    name="salaryMax"
                                    value={jobDraft.salaryMax}
                                    onChange={handleInputChange}
                                    className="w-1/2 mt-1 p-2 border border-gray-300 rounded-md"
                                    placeholder="₹12,00,000"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700">Application Deadline</label>
                            <input
                                required
                                type="date"
                                name="applicationDeadline"
                                value={jobDraft.applicationDeadline}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Job Description</label>
                        <textarea
                            required
                            name="jobDescription"
                            value={jobDraft.jobDescription}
                            onChange={handleInputChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md h-32"
                            placeholder="Please share a description to let the candidate know more about the job role"
                        ></textarea>
                    </div>
                    <div className="flex justify-between space-x-2">
                        <button type="button" className="px-4 py-2 bg-gray-300 rounded-md" onClick={handleSaveDraft}>
                            Save Draft
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobModal;
