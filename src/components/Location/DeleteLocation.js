import React, { Component } from 'react';
import { connect } from 'react-redux';


import {isIdPresent} from '../../helpers'
import { deleteLocation } from '../../actions';
import history from '../../history';
import Button from '../Button';

class DeleteLocation extends Component {

    handleDeleteClick = () =>{
        this.props.deleteLocation({id: this.props.match.params.id});
        history.push('/locations');
    }
    handleBackClick = () =>{
        history.push('/locations');
    }

    render() {
        const {locations, match} = this.props;
        if(isIdPresent(locations,match.params.id)){
            return (
                <div className='delete-location'>
                    <div className="heading">
                        Delete Location
                    </div>
                    <div className='sure'>
                        Are You sure?
                    </div>
                    <div className='button-group'>
                        <Button 
                            name='Back'
                            handleButtonClick={this.handleBackClick}
                        />
                        <Button 
                            name='Yes'
                            handleButtonClick={this.handleDeleteClick}
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


export default connect(mapStateToProps, {deleteLocation})(DeleteLocation)