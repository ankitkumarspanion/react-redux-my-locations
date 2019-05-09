import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import { getItem } from '../../helpers';
import history from '../../history';


class ViewLocation extends Component {

    getLocation = () =>{
        const {locations, match} = this.props;
        return getItem(locations, match.params.id);
    }

    onViewMapClick = () =>{        
        let {coordinates} = this.getLocation();
        history.push(`/map/${coordinates.latitude}/${coordinates.longitude}`);
    }



    render() {
        let location = this.getLocation();
        if(location){
            const {name, address,coordinates,category } = location;
            return (
                <div className='view-location'>
                    <div>
                        Name: {name}
                    </div>
                    <div>
                        Address: {address}
                    </div>
                    
                    <div>
                        Coordinates: <span>{coordinates.latitude}</span> <span>{coordinates.longitude}</span> 
                    </div>
                    <div>
                        Category: {category}
                    </div>
                    <div className="right">
                        <Button 
                            name="View on Map"
                            handleButtonClick={this.onViewMapClick}
                            />
                    </div>
                </div>
            );
        }
        else{
            return (
                <div>
                    Invalid request
                </div>
            )
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        locations: state.locations
    }
}


export default connect(mapStateToProps, {})(ViewLocation)