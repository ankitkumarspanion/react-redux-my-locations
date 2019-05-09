import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import ItemList from '../ItemList';

import history from '../../history';

class LocationView extends Component {

    onAddClick = () =>{
        history.push('/locations/add');
    }

    render() {
        if(this.props.categories.length > 0){
            return (
                <div className='location-view'>
                    Locations
                    <ItemList list={this.props.locations} type="locations"/>
                    <div className="add-button">
                        <Button 
                            name="Add"
                            handleButtonClick={this.onAddClick}
                        />
                    </div>
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

const mapStateToProps = (state) =>{
    return {
        locations: state.locations,
        categories: state.categories
    }
}

export default connect(mapStateToProps, {})( LocationView);