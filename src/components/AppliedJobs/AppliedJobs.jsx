import React from 'react';
import { addToDb, handleStoredCart } from '../../Utilities/fakeDB';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid } from 'recharts';
import './AppliedJobs.css'
import Cart from '../Cart/Cart';

const AppliedJobs = () => {
    const mainJobs = useLoaderData();
    // console.log(mainJobs)
    let jobArr = [];
    const storedJobs = handleStoredCart();
    for (const id in storedJobs) {
        const foundJobs = mainJobs.find(job => job.id == id)
        jobArr.push(foundJobs)
    }


    return (
        <div className='applied-jobs-sect'>
            <div className='job-details-banner applied-jobs-banner'>
                <h2>Applied Jobs</h2>
            </div>
            <div className='cart-filter'>
                <select name="" id="">
                    <option value="Filter By">Filter By</option>
                    <option value="">Remote</option>
                    <option value="">Onsite</option>
                </select>
            </div>
            {
                jobArr.map(job => <Cart key={job.id} job={job}></Cart>)
            }
        </div>
    );
};

export default AppliedJobs;