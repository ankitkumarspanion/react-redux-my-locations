import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import LocationForm from './LocationForm';
import { isCoordinatePresent, validateLocation } from '../../helpers';
import { addLocation, updateFormError } from '../../actions';
import history from '../../history';

class AddLocation extends Component {

    onSubmit = (values) =>{
        const {locations} = this.props;
        if(!isCoordinatePresent(locations, values.coordinates)){
            if(validateLocation(values)){
                this.props.addLocation(values);
                this.props.updateFormError('')
                history.push('/locations');
            }else{
                this.props.updateFormError('Error: Fill the form correctly!')
            }
        }else{
            alert('Given Coordinates already added!')
        }
    }
    render() {
        if(this.props.categories.length > 0){
        return (
            <div className='add-category'>
                <div>
                    {this.props.error}
                </div>
                <LocationForm                     
                    id={uuid()}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
        }else{
            return(
                <div>
                    Please add at least 1 category to continue adding location.
                </div>
            )
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        locations: state.locations,
        categories: state.categories,
        error: state.formData.error
    }
}


export default connect(mapStateToProps, {addLocation, updateFormError})(AddLocation)