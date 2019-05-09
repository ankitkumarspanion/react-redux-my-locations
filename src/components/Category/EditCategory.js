import React, { Component } from 'react';
import { connect } from 'react-redux';

import {isIdPresent, validateCategory} from '../../helpers';
import { editCategory,formCategoryNameChange, updateFormError} from '../../actions';
import CategoryForm from './CategoryForm';
import history from '../../history';

class EditCategory extends Component {
    onSubmit = (values) =>{
        if(validateCategory(values)){
            this.props.editCategory(values);
            this.props.formCategoryNameChange('');
            history.push('/categories');
            this.props.updateFormError('');
        }
        else{
            this.props.updateFormError('Error: please enter correct values!');
        }
        this.props.formCategoryNameChange('');
    }

    render() {
        const {categories, match, error} = this.props;
        if(isIdPresent(categories, match.params.id)){
            return (
                <div className='edit-category'>
                    <div>
                        {error}
                    </div>
                    <CategoryForm 
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
        categories: state.categories,
        error: state.formData.error
    }
}

export default connect(mapStateToProps, {editCategory,formCategoryNameChange, updateFormError})(EditCategory)