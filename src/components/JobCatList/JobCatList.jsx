import React, { useEffect, useState } from 'react';
import './JobCatList.css'
import JobList from '../JobList/JobList';

const JobCatList = () => {
    const [lists, setLists] = useState([]);
    useEffect( () => {
        fetch('jobcategory.json')
        .then(res => res.json())
        .then(data => setLists(data))
    }, [])
    return (
        <div className='job-category-sect'>
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='job-lists'>
                {
                    lists.map(list => <JobList list={list} key={list.title}></JobList>)
                }
            </div>
        </div>
    );
};

export default JobCatList;