import React from 'react';
import './JobList.css'

const JobList = ({list}) => {
    // console.log(list)
    return (
        <div>
            <div className='job-list'>
                <img src={list.image} alt="" />
                <h3>{list.title}</h3>
                <p>{list.availableJobs} jobs available</p>
            </div>
        </div>
    );
};

export default JobList;