import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
    formNameChange,
    formAddressChange,
    formCoordXChange,
    formCoordYChange,
    formSelectChange

} from '../../actions';

class LocationForm extends Component {

    componentDidMount = () =>{
        const {categories} = this.props;
        if(categories.length > 0){
            this.props.formSelectChange(categories[0].name);
        }
        this.props.formNameChange('');
        this.props.formAddressChange('');
        this.props.formCoordXChange('');
        this.props.formCoordYChange('');
    }

    handleNameChange = (event) =>{
        this.props.formNameChange(event.target.value);
    }
    handleAddressChange = (event) =>{
        this.props.formAddressChange(event.target.value);
    }
    handleCoordXChange = (event) =>{
        this.props.formCoordXChange(event.target.value);
    }
    handleCoordYChange = (event) =>{
        this.props.formCoordYChange(event.target.value);
    }
    handleSelectChange = (event) =>{
        this.props.formSelectChange(event.target.value);
    }
    renderOptions = () =>{
        const {categories} = this.props;
        return categories.map((category) => {
            return (
                <option key={category.id} >
                    {category.name}
                </option>
            )
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const {locationName, address,coordinates, category} = this.props.data;
        this.props.onSubmit({
            id: this.props.id,
            name: locationName,
            address,
            coordinates,
            category
        });
    }
    

    render() {
        const {address, coordinates, locationName} = this.props.data;
        return (
            <form
                onSubmit={this.handleSubmit} 
                className='form location-form'>
                <div className="form-row">
                    <label>Name: </label>
                    <input 
                        name="lName"
                        placeholder='enter location name' 
                        onChange={this.handleNameChange} 
                        value={locationName}/>                        
                </div>
                <div className="form-row">
                    <label>Address: </label>
                    <input 
                        name="lAddress" 
                        placeholder='enter location address' 
                        onChange={this.handleAddressChange} 
                        value={address}/>
                </div>
                <div className="form-row">
                    <label>Coordinates: </label>
                    <div>
                        <input 
                            name="lCoordX" 
                            type='number' 
                            placeholder='enter latitude' 
                            onChange={this.handleCoordXChange} 
                            value={coordinates.latitude}/>
                        <input 
                            name="lCoordY" 
                            type='number' 
                            placeholder='enter longitude' 
                            onChange={this.handleCoordYChange} 
                            value={coordinates.longitude}/>
                    </div>
                </div>
                <div className="form-row">
                    <label>Category: </label>
                    <select 
                        name="lCategory"
                        onChange={this.handleSelectChange}>
                        {this.renderOptions()}
                    </select>
                </div>
                <button className="button" >Submit</button>
            </form>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        data: state.formData.locationForm,
        categories: state.categories
    }
}


export default connect(mapStateToProps, {
    formNameChange, 
    formAddressChange,
    formCoordXChange,
    formCoordYChange,
    formSelectChange
})(LocationForm)