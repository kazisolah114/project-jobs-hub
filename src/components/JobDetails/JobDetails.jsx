import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetailsPage from '../JobDetailsPage/JobDetailsPage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const [job, setJob] = useState({});
    useEffect(() => {
        if(jobs.length > 0) {
            const job = jobs.find(item => item.id == id)
            setJob(job)
        }
    }, [])
    // console.log(job)
    return (
        <div>
            <JobDetailsPage key={job.id} job={job}></JobDetailsPage>
        </div>
    );
};

export default JobDetails;