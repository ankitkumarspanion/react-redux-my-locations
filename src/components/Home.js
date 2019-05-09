import React, { Component } from 'react';
import Button from './Button';

import history from '../history';

class Home extends Component {


    onCategoriesClick = () =>{
        history.push('/categories');
    }

    onLocationsClick = () =>{
        history.push('/locations');
    }

    render() {
        return (
            <div className='home'>
                <div className="home-col col-1">
                    <Button 
                        name="Categories"
                        handleButtonClick={this.onCategoriesClick}
                    />                    
                </div>                
                <div className="home-col col-1">
                    <Button 
                        name="Locations"                        
                        handleButtonClick={this.onLocationsClick}
                    />                    
                </div>
            </div>
        );
    }
}

export default Home;