import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isIdPresent, validateLocation } from '../../helpers';


import { editLocation,updateFormError } from '../../actions';
import LocationForm from './LocationForm';
import history from '../../history';


class EditLocation extends Component {

    onSubmit = (values) =>{
        if(validateLocation(values)){
            this.props.editLocation(values);
            this.props.updateFormError('')
            history.push('/locations');
        }else{
            this.props.updateFormError('Error: Fill the form correctly!')
        }
    }

    render() {
        const {locations, match} = this.props;
        if(isIdPresent(locations, match.params.id)){
            return (
                <div className='edit-category'>
                    <LocationForm 
                        id={this.props.match.params.id}
                        onSubmit={this.onSubmit}/>
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


export default connect(mapStateToProps, {editLocation,updateFormError})(EditLocation)