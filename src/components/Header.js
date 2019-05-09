import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './Auth/GoogleAuth';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='left menu'>
                    <Link to='/' className='link'>
                        Home
                    </Link>
                </div>
                <div className='right menu'>              
                    <GoogleAuth />
                </div>
            </div>
        );
    }
}

export default Header;