import React, { useEffect, useState } from 'react';
import './FeatureJobs.css'
import EachJob from '../EachJob/EachJob';

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect( () => {
        fetch('featuredjobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div className='feature-jobs-sect'>
            <div className="feature-jobs-header">
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='featured-jobs'>
                {
                    jobs.map(job => <EachJob key={job.id} job={job}></EachJob>)
                }
            </div>
        </div>
    );
};

export default FeatureJobs;