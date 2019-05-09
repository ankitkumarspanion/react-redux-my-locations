import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import LocationForm from './LocationForm';
import { isCoordinatePresent, validateLocation } from '../../helpers';
import { addLocation, updateFormError } from '../../actions';
import history from '../../history';

class AddLocation extends Component {

    componentDidMount = () =>{        
        this.props.updateFormError('');
    }

    onSubmit = (values) =>{
        const {locations} = this.props;
        if(validateLocation(values)){
            if(!isCoordinatePresent(locations, values.coordinates)){
                this.props.addLocation(values);
                this.props.updateFormError('')
            }else{
                alert('Given Coordinates already added!')
            }
            history.push('/locations');
        }else{
            this.props.updateFormError('Error: Fill the form correctly!')
        }
    }
    render() {
        if(this.props.categories.length > 0){
        return (
            <div className='add-category'>
                <div className="heading">
                    Add Location
                </div>
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