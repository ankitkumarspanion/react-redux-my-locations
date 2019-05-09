import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import {isNamePresent, validateCategory} from '../../helpers';
import { addCategory,formCategoryNameChange,updateFormError } from '../../actions';
import CategoryForm from './CategoryForm';
import history from '../../history';

class AddCategory extends Component {

    onSubmit = (values) =>{
        const {categories} = this.props;
        if(validateCategory(values)){
            if(!isNamePresent(categories, values.name)){
                this.props.addCategory(values);
            }
            else{
                alert('name already exists');
            }
            this.props.updateFormError('');
            history.push('/categories');
        }
        else{
            this.props.updateFormError('Error: please enter correct values!');
        }
        this.props.formCategoryNameChange('');
    }
    
    render() {
        console.log(this.props.error)
        return (
            <div className='add-category'>
                <div>
                    {this.props.error}
                </div>
                <CategoryForm 
                    id={uuid()}
                    onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        categories: state.categories,
        error: state.formData.error
    }
}


export default connect(mapStateToProps, {addCategory,formCategoryNameChange,updateFormError})(AddCategory)