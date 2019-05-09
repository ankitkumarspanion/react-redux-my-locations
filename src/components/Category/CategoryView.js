import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import ItemList from '../ItemList';

import history from '../../history';

class CategoryView extends Component {

    onAddClick = () =>{
        history.push('/categories/add');
    }

    render() {
        return (
            <div className='category-view'>
                Categories
                <ItemList list={this.props.categories} type="categories"/>
                <div className="add-button">
                    <Button 
                        name="Add"
                        handleButtonClick={this.onAddClick}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, {})( CategoryView);