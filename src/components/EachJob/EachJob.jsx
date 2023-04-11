import React from 'react';
import './EachJob.css'
import { Link } from 'react-router-dom';

const EachJob = ({job}) => {
    // console.log(job)
    const {image, job_title, availability_1, availability_2, company_name, salary, addressd, id} = job;
    return (
        <div className='featured-job'>
            <img src={image} alt="" />
            <h3>{job_title}</h3>
            <p>{company_name}</p>
            <div>
                <button>{availability_1}</button>
                <button>{availability_2}</button>
            </div>
            <div>
                <p><img src="../../../assets/Icons/Frame-4.png" alt="" />{addressd}</p>
                <p><img src="../../../assets/Icons/Frame.png" alt="" />Salary: {salary}</p>
            </div>
            {/* <button className='main-button'>View Details</button> */}
            <Link to={`/jobdetails/${id}`}><button className='main-button'>View Details</button></Link>
        </div>
    );
};

export default EachJob;