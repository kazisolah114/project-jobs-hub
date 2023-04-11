import React from 'react';
import './Home.css'
import JobCatList from '../JobCatList/JobCatList';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div>

                <div className='home-container'>
                    <div className="home-text-content">
                        <h2>One Step Closer To Your <span>Dream Job</span></h2>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='main-button'>Get Started</button>
                    </div>
                    <div className="home-image-content">
                        <img src="../../../assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                    </div>
                </div>

                <main>
                    <JobCatList></JobCatList>
                    <FeatureJobs></FeatureJobs>
                </main>
        </div>
    );
};

export default Home;