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

    handleBackClick = () =>{
        history.push('/locations');
    }

    render() {
        let location = this.getLocation();
        if(location){
            const {name, address,coordinates,category } = location;
            return (
                <div className='view-location'>
                    <div className="heading">
                        View Location
                    </div>
                    <div className="form">
                        <div className='form-row'>
                            <div >Name:</div>
                            <div>{name}</div>
                        </div>
                        <div className='form-row'>
                            <div >Address:</div>
                            <div>{address}</div>
                        </div>
                        <div className='form-row'>
                            <div >Coordinates:</div>
                            <div>Lat. {coordinates.latitude} Lng. {coordinates.longitude}</div>
                        </div>
                        <div className='form-row'>
                            <div >Category:</div>
                            <div>{category}</div>
                        </div>
                    </div>
                    <div className="button-group">
                        <Button 
                            name='Back'
                            handleButtonClick={this.handleBackClick}
                        />
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