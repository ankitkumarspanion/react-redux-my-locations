import React, { Component } from 'react';
import { connect } from 'react-redux';


import { formCategoryNameChange,addCategory } from '../../actions';

class CategoryForm extends Component {

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit({id: this.props.id, name: this.props.data.categoryName});
    }
    handleChange = (event) =>{
        this.props.formCategoryNameChange(event.target.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form form-row">
                <input 
                    name="name" 
                    placeholder="enter category name" onChange={this.handleChange} value={this.props.data.categoryName}/>
                <button className="button" >Submit</button>
            </form>
        );
    }
}
const MapStateToProps = (state) =>{
    return {
        data: state.formData.categoryForm
    }
}

export default connect(MapStateToProps, {formCategoryNameChange, addCategory})(CategoryForm)