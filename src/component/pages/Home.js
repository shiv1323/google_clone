import React from 'react'
import '../../component_css/home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';
function Home() {
    return (
        <div className='home'>
            {/* header */}
            <div className="home_header">
                <div className="header_right">
                    {/* link */}
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>
                        Images
                    </Link>
                    {/* link */}
                    {/* icon */}
                    <AppsIcon className="iconic" />
                    <Avatar />
                </div>
            </div>
            {/* header body */}
            <div className="home_body">
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google icon" />
                <div className="home_inputContainer">
                    {/* Search */}
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
