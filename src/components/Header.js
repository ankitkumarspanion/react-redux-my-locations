import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to='/' className='link'>
                        Login
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;