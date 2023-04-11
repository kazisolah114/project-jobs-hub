import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <div className='web-header'>
                <div><h3>Jobs Hub</h3></div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/apjobs">Applied Jobs</Link>
                    <Link to="/blogs">Blogs</Link>
                </div>
                <div>
                    <button className='main-button'>Start Applying</button>
                </div>
            </div>


            <Outlet></Outlet>
        </div>
    );
};

export default Header;