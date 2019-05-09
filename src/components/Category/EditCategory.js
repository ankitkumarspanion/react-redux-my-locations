import React, { Component } from 'react';
import { connect } from 'react-redux';

import {isIdPresent} from '../../helpers';
import { editCategory,formCategoryNameChange } from '../../actions';
import CategoryForm from './CategoryForm';
import history from '../../history';

class EditCategory extends Component {
    onSubmit = (values) =>{
        this.props.editCategory(values);
        this.props.formCategoryNameChange('');
        history.push('/categories');
    }

    render() {
        const {categories, match} = this.props;
        if(isIdPresent(categories, match.params.id)){
            return (
                <div className='edit-category'>
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
        categories: state.categories
    }
}

export default connect(mapStateToProps, {editCategory,formCategoryNameChange})(EditCategory)