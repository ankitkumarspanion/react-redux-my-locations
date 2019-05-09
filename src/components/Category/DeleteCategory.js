import React, { Component } from 'react';
import { connect } from 'react-redux';


import {isIdPresent} from '../../helpers'
import { deleteCategory } from '../../actions';
import history from '../../history';
import Button from '../Button';

class DeleteCategory extends Component {

    handleDeleteClick = () =>{
        this.props.deleteCategory({id: this.props.match.params.id});
        history.push('/categories');
    }
    handleBackClick = () =>{
        history.push('/categories');
    }
    
    render() {
        const {categories, match} = this.props;
        if(isIdPresent(categories,match.params.id)){
            return (
                <div className='delete-category'>
                    <div>
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
        categories: state.categories
    }
}

export default connect(mapStateToProps, {deleteCategory})(DeleteCategory)