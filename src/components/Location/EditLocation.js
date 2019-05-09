import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isIdPresent, isCoordinatePresent,validateLocation } from '../../helpers';


import { editLocation,updateFormError } from '../../actions';
import LocationForm from './LocationForm';
import history from '../../history';


class EditLocation extends Component {

    componentDidMount = () =>{        
        this.props.updateFormError('');
    }

    onSubmit = (values) =>{
        const {locations} = this.props; 
        
        if(validateLocation(values)){       
            if(!isCoordinatePresent(locations, values.coordinates)){
                this.props.editLocation(values);
                this.props.updateFormError('');
            }else{
                alert('Given Coordinates already added!')
            }
            history.push('/locations');
        }else{
            this.props.updateFormError('Error: Fill the form correctly!')
        }
    }

    render() {
        const {locations, match, error} = this.props;
        if(isIdPresent(locations, match.params.id)){
            return (
                <div className='edit-location'>
                    <div className="heading">
                        Edit Location
                    </div>
                    <div>
                        {error}
                    </div>
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
        locations: state.locations,
        error: state.formData.error
    }
}


export default connect(mapStateToProps, {editLocation,updateFormError})(EditLocation)