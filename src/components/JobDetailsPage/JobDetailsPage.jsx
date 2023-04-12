import React from 'react';
import './JobDetailsPage.css'

const JobDetailsPage = ({job, handleApplyJobBtn}) => {
    // console.log(job)
    const {salary, job_title, phone, email, addressd, job_description, job_resposibilities, educational_requirements, experience, id} = job;
    return (
        <div>
            <div className="job-details-banner">
                <h2>Job Details</h2>
            </div>
            <div className='details-container'>
                <div className='details-text-content'>
                    <p><span>Job Description:</span> {job_description}</p>
                    <p><span>Job Responsibilities:</span> {job_resposibilities}</p>
                    <p><span>Educational Requirements: </span> <br />
                    {educational_requirements}</p>
                    <p><span>Experience: </span> <br />
                    {experience}</p>
                </div>
                <div>
                    <div className='details-info-content'>
                        <h4>Job Details</h4>
                        <ul>
                            <li><img src="https://i.ibb.co/M2j9hVC/Frame.png" alt="" /><span>Salary: </span>{salary}</li>
                            <li><img src="https://i.ibb.co/FbfrFqj/Frame-1.png" alt="" /><span>Job Title: </span>{job_title}</li>
                        </ul>
                        <h4>Contact Information</h4>
                        <ul>
                            <li><img src="https://i.ibb.co/SrKhvjT/Frame-2.png" alt="" /><span>Phone: </span>{phone}</li>
                            <li><img src="https://i.ibb.co/YZGQknN/Frame-3.png" alt="" /><span>Email: </span>{email}</li>
                            <li><img src="https://i.ibb.co/QbxxZFG/Frame-4.png" alt="" /><span>Address: </span>{addressd}</li>
                        </ul>
                    </div>
                    <button onClick={() => handleApplyJobBtn(id)} className='details-button'>Apply Now</button>
                </div>
                
            </div>
        </div>
    );
};

export default JobDetailsPage;