import React, { Component } from 'react';
import { connect } from 'react-redux';

import {isIdPresent,isNamePresent, validateCategory} from '../../helpers';
import { editCategory,formCategoryNameChange, updateFormError} from '../../actions';
import CategoryForm from './CategoryForm';
import history from '../../history';

class EditCategory extends Component {

    componentDidMount = () =>{        
        this.props.updateFormError('');
    }

    onSubmit = (values) =>{
        const {categories} = this.props;
        if(validateCategory(values)){
            if(!isNamePresent(categories, values.name)){
                this.props.editCategory(values);
                this.props.updateFormError('');
                this.props.formCategoryNameChange('');
            }
            else{
                alert('given name already exists');
            }
            history.push('/categories');
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
                    <div className="heading">
                        Edit Category
                    </div>
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