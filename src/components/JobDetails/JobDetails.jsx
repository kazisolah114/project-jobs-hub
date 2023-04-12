import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetailsPage from '../JobDetailsPage/JobDetailsPage';
import { addToDb } from '../../Utilities/fakeDB';

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
    const handleApplyJobBtn = (id) => {
        // console.log(id);
        addToDb(id);
    }
    return (
        <div>
            <JobDetailsPage key={job.id} job={job} handleApplyJobBtn={handleApplyJobBtn}></JobDetailsPage>
        </div>
    );
};

export default JobDetails;